export interface Package {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    duration: string;
    price: number;
    images: string[];
    location: string;
    highlights: string[];
    metaTitle: string;
    metaDescription: string;
}

export const packages: Package[] = [
    {
        id: "pkg001",
        title: "Goa Beach Holiday Package",
        slug: "goa-beach-holiday-package",
        shortDescription: "Enjoy sun, sand and beaches with our Goa holiday package.",
        description:
            "This Goa Beach Holiday Package includes beautiful beaches, nightlife, sightseeing, and comfortable stays. Perfect for couples, friends, and families.",
        duration: "4 Days / 3 Nights",
        price: 18999,
        images: [
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
        ],
        location: "Goa, India",
        highlights: [
            "Beachside stay",
            "North & South Goa sightseeing",
            "Cruise & nightlife",
            "Airport pickup & drop",
        ],
        metaTitle: "Goa Beach Holiday Package | Make Own Journey",
        metaDescription:
            "Book Goa Beach Holiday Package with Make Own Journey. Best price, beach resorts, sightseeing & nightlife included.",
    },

    {
        id: "pkg002",
        title: "Manali Honeymoon Package",
        slug: "manali-honeymoon-package",
        shortDescription: "Romantic honeymoon experience in Manali.",
        description:
            "Manali Honeymoon Package offers snow views, romantic stays, Solang Valley visit, and local sightseeing for newly married couples.",
        duration: "5 Days / 4 Nights",
        price: 24999,
          images: [
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
        ],
        location: "Manali, Himachal Pradesh",
        highlights: [
            "Snow point visit",
            "Romantic candlelight dinner",
            "Solang Valley & Rohtang Pass",
            "Private cab",
        ],
        metaTitle: "Manali Honeymoon Package | Make Own Journey",
        metaDescription:
            "Book Manali Honeymoon Package with snow views, romantic stays & sightseeing at best prices.",
    },

    {
        id: "pkg003",
        title: "Dubai Luxury Tour Package",
        slug: "dubai-luxury-tour-package",
        shortDescription: "Luxury tour experience in Dubai.",
        description:
            "Dubai Luxury Tour Package includes Burj Khalifa, desert safari, city tour, luxury hotels, and shopping experience.",
        duration: "6 Days / 5 Nights",
        price: 69999,
          images: [
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
        ],
        location: "Dubai, UAE",
        highlights: [
            "Burj Khalifa visit",
            "Desert Safari with BBQ",
            "Luxury hotel stay",
            "City tour & shopping",
        ],
        metaTitle: "Dubai Luxury Tour Package | Make Own Journey",
        metaDescription:
            "Explore Dubai with our luxury tour package including Burj Khalifa, desert safari & premium hotels.",
    },

    {
        id: "pkg004",
        title: "Kashmir Paradise Tour Package",
        slug: "kashmir-paradise-tour-package",
        shortDescription: "Experience heaven on earth – Kashmir.",
        description:
            "Kashmir Paradise Tour Package includes Srinagar, Gulmarg, Pahalgam, houseboat stay, and scenic sightseeing.",
        duration: "5 Days / 4 Nights",
        price: 28999,
          images: [
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
        ],
        location: "Kashmir, India",
        highlights: [
            "Houseboat stay",
            "Gulmarg & Pahalgam visit",
            "Shikara ride",
            "Mountain views",
        ],
        metaTitle: "Kashmir Tour Package | Make Own Journey",
        metaDescription:
            "Book Kashmir Paradise Tour Package with houseboat stay, Gulmarg, Pahalgam & scenic views.",
    },

    {
        id: "pkg005",
        title: "Kerala Backwaters Tour Package",
        slug: "kerala-backwaters-tour-package",
        shortDescription: "Relax in Kerala backwaters and nature.",
        description:
            "Kerala Backwaters Tour Package includes Alleppey houseboat stay, Munnar hills, tea gardens, and peaceful nature experience.",
        duration: "5 Days / 4 Nights",
        price: 26999,
          images: [
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
            "/packages/goa1.jpg",
            "/packages/goa2.jpg",
            "/packages/goa3.jpg",
        ],
        location: "Kerala, India",
        highlights: [
            "Houseboat stay",
            "Munnar hill station",
            "Tea garden visit",
            "Nature & relaxation",
        ],
        metaTitle: "Kerala Backwaters Tour Package | Make Own Journey",
        metaDescription:
            "Book Kerala Backwaters Tour Package with houseboat stay, Munnar hills & nature experience.",
    },
];
