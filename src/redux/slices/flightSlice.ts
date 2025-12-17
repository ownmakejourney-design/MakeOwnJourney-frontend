import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

/* ================= TYPES ================= */

export type Flight = {
  id: string;
  from: string;
  to: string;
  price: number;
  airline: string;
  stops: number;
};

type Filters = {
  from: string;
  to: string;
  maxPrice: number;
  stops?: number;     // 0 | 1
  airline?: string;
};

type FlightState = {
  allFlights: Flight[];
  filteredFlights: Flight[];
  selectedFlight: Flight | null;
  filters: Filters;
  loading: boolean;
  error: string | null;
};

/* ================= INITIAL STATE ================= */

const initialState: FlightState = {
  allFlights: [],
  filteredFlights: [],
  selectedFlight: null,
  filters: {
    from: "",
    to: "",
    maxPrice: 0,
  },
  loading: false,
  error: null,
};

/* ================= ASYNC THUNK ================= */

export const searchFlights = createAsyncThunk<
  Flight[],
  {
    from: string;
    to: string;
    departureDate: string;
    returnDate?: string;
    passengers: number;
    tripType: string;
  }
>("flight/searchFlights", async (params, thunkAPI) => {
  try {
    const query = new URLSearchParams({
      from: params.from,
      to: params.to,
      departureDate: params.departureDate,
      passengers: String(params.passengers),
      tripType: params.tripType,
    });

    if (params.returnDate) {
      query.append("returnDate", params.returnDate);
    }

    const res = await axios.get<Flight[]>(
      `http://localhost:8084/flights/search?${query.toString()}`
    );

    return res.data; // ✅ DIRECT ARRAY

  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to fetch flights"
    );
  }
});

/* ================= SLICE ================= */

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = { ...state.filters, ...action.payload };

      state.filteredFlights = state.allFlights.filter((flt) => {
        return (
          (!state.filters.from ||
            flt.from.toLowerCase().includes(state.filters.from.toLowerCase())) &&
          (!state.filters.to ||
            flt.to.toLowerCase().includes(state.filters.to.toLowerCase())) &&
          (!state.filters.maxPrice ||
            flt.price <= state.filters.maxPrice) &&
          (state.filters.stops === undefined ||
            flt.stops === state.filters.stops) &&
          (!state.filters.airline ||
            flt.airline === state.filters.airline)
        );
      });
    },

    selectFlight(state, action: PayloadAction<Flight>) {
      state.selectedFlight = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.allFlights = action.payload;
        state.filteredFlights = action.payload;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "Something went wrong";
      });
  },
});

export const { setFilter, selectFlight } = flightSlice.actions;
export default flightSlice.reducer;
