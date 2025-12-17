"use client";

const popularRoutes = [
  {
    from: "Delhi",
    to: "Mumbai",
    code: "DEL → BOM",
  },
  {
    from: "Bangalore",
    to: "Delhi",
    code: "BLR → DEL",
  },
  {
    from: "Mumbai",
    to: "Dubai",
    code: "BOM → DXB",
  },
  {
    from: "Patna",
    to: "Delhi",
    code: "PAT → DEL",
  },
  {
    from: "Hyderabad",
    to: "Bangalore",
    code: "HYD → BLR",
  },
  {
    from: "Kolkata",
    to: "Mumbai",
    code: "CCU → BOM",
  },
];

export default function PopularRoutes() {
  return (
    <section className="mb-12">
      <h3 className="mb-4 text-xl font-semibold">
        Popular Routes
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularRoutes.map((route, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-xl border border-border  p-4 transition hover:bg-hover-card"
          >
            <p className="font-medium">
              {route.from} → {route.to}
            </p>
            <p className="text-sm text-text-secondary">
              {route.code}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
