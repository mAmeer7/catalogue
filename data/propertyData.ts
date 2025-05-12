import { HomeIcon, ShieldCheckIcon, CalendarIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'

export const properties = [
  {
    id: 1,
    title: 'Palm Tower Residences',
    dynamicColor: '#1A695A',
    propDetails: {
      id: 1,
      name: "Luminous Path Society",
      location: "Amali Island",
      completion_date: "Q1 2026",
      price_starting: "Starting from AED 2,200,000",
      furnishing: "Semi Furnished",
      payment: "30% NOC",
      details: ["Luminous Path Building Society as fostering vibrant, well-informed communities within the physical spaces it creates, moving beyond the traditional role of simply providing housing. Imagine a building society deeply invested in cultivating environments where learning, connection, and personal growth flourish among its residents. This vision would materialize through the creation of dedicated community learning spaces within each housing complex, offering areas for workshops, libraries stocked with diverse resources, and flexible spaces for shared learning endeavors.",
        "Furthermore, the society would actively encourage skill-sharing initiatives, becoming a conduit for residents to connect and exchange their talents and knowledge through organized classes or informal gatherings, perhaps a neighbor leading a photography workshop or facilitating a language exchange. To further enrich the learning ecosystem, the Luminous Path Building Society might forge partnerships with local educational institutions, providing residents with easier access to courses, lectures, and valuable mentorship opportunities. Recognizing the importance of sustainable living, the society would also champion environmentally conscious practices by offering workshops and resources on topics such as community gardening, effective waste reduction techniques, and energy efficiency within the housing complexes.",
        "Finally, a core tenet would be the promotion of intergenerational learning, intentionally creating opportunities for residents of all ages to interact, share their unique perspectives, and learn from one another, thereby nurturing a supportive and intellectually stimulating community fabric within each development. In essence, the Luminous Path Building Society would be dedicated to constructing not just buildings, but dynamic living environments that actively inspire intellectual curiosity, foster collaboration, and champion a continuous pursuit of knowledge among all its residents, transforming these living spaces into true hubs of learning and growth.."],

    },
    areaDetails: {
      location: "Amali Island",
      details: ["Amali Island is an extraordinary development set within the iconic World Islands, designed for those who seek the pinnacle of luxury and exclusivity. This private island offers a limited collection of ultra-premium villas, each crafted with architectural excellence and a deep connection to nature. Surrounded by crystal-clear waters and panoramic views of the Dubai skyline, Amali redefines what it means to live in harmony with elegance and privacy.",

        "Every aspect of Amali Island has been curated to elevate the standard of elite living. From bespoke interiors and world-class amenities to dedicated yacht access and lush landscaping, the island has been master-planned to offer a seamless blend of serenity and sophistication. It's not just a place to live—it’s a retreat that brings together nature, design, and exclusivity in a way no other location in Dubai can.",
        "Every aspect of Amali Island has been curated to elevate the standard of elite living. From bespoke interiors and world-class amenities to dedicated yacht access and lush landscaping, the island has been master-planned to offer a seamless blend of serenity and sophistication. It's not just a place to live—it’s a retreat that brings together nature, design, and exclusivity in a way no other location in Dubai can."
      ],
      backgroundImage: '/island.jpg'
    },
    amenities: [
      { icon: HomeIcon, label: 'Furnished' },
      { icon: CalendarIcon, label: 'Play Zone' },
      { icon: HomeIcon, label: 'Shared Pool' },
      { icon: HomeIcon, label: 'Car Parking' },
      { icon: HomeIcon, label: 'Gym' },
      { icon: HomeIcon, label: 'Terrace' },
      { icon: ShieldCheckIcon, label: '24/7 Monitoring' },
      { icon: ShoppingBagIcon, label: 'Retail Outlets' },
      { icon: HomeIcon, label: 'Juice Bars' },
      { icon: HomeIcon, label: 'Coffee Zone' },
      { icon: ShieldCheckIcon, label: 'Personal Security' },
      { icon: HomeIcon, label: 'Small Garden' },
      { icon: HomeIcon, label: 'Jogging Tracks' },
      { icon: HomeIcon, label: 'Spa' },
    ],

    architectureImages: [
      { src: '/img/building1.jpg', alt: 'Modern building' },
      { src: '/img/building2.jpg', alt: 'Sky View' },
      { src: '/img/building3.jpg', alt: 'Sky View' }
    ],

    interiorImages: [
      { src: '/img/bed1.jpg', alt: 'Bedroom' },
      { src: '/img/bed2.jpg', alt: 'Living Area' },
      { src: '/img/bed3.jpg', alt: 'Living Area' }
    ],

    amenitiesImages: [
      { src: '/img/swim.jpg', alt: 'Gym' },
      { src: '/img/gym.jpg', alt: 'Gym' },
      { src: '/img/parking.jpg', alt: 'Parking' }
    ],

    paymentPlanData: [
      { percentage: 20, label: 'On Booking' },
      { percentage: 50, label: 'During Construction' },
      { percentage: 30, label: 'On Handover' }
    ],

    units: [
      {
        unitNumber: 'A1',
        type: 'Apartment',
        layout: '2 BHK',
        size: 1200,
        floor: 5,
        pricePerSqft: 4200,
        price: 5040000,
        favorite: false
      },
      {
        unitNumber: '41',
        type: 'Apartment',
        layout: '2 Bedroom',
        size: 8891,
        floorLabel: 'Floor',
        floor: 4,
        pricePerSqft: 3785,
        price: 5002000,
        favorite: false
      },
      {
        unitNumber: '55',
        type: 'Apartment',
        layout: '2 Bedroom',
        size: 9102,
        floorLabel: 'Floors',
        floor: 5,
        pricePerSqft: 3682,
        price: 5294000,
        favorite: true,
        note: 'hi, please focus on this unit.. best ocean view from the side balcony',
        userName: 'Sabir Al Raf',
        userAvatar: 'https://i.pravatar.cc/100?img=3',
        timeAgo: '6 hour'
      }
    ],

    planImages: [
      { type: 'image', src: '/img/map.png', alt: 'Site Plan' },
      { type: 'map', lat: 25.1972, lng: 55.2797, zoom: 12 }
    ],
    mapBackground: '/bg/lowanglebg.jpg',
    galleryBackground: '/bg/lowanglebg.jpg',
    amenityBackground: '/bg/bg6.jpg',
    paymentBackground: '/bg/bg3.jpg'
  },

  {
    id: 2,
    title: 'Ocean View Heights',
    dynamicColor: '#6E3482',

    propDetails: {
      id: 2,
      name: "Emirates Living",
      location: "Port City",
      completion_date: "Q2 2026",
      price_starting: "Starting from AED 9,200,000",
      furnishing: "Furnished",
      payment: "34% NOC",
      details: ["Devine Residence is a prestigious collection of luxury villas with 5-7 bedrooms, surrounded by sandy beaches and the waters of the Persian Gulf. The complex is an unrivaled combination of exquisite architecture and luxurious interiors that create a perfect harmony with the surrounding nature. The thoughtful design reflects the uniqueness of each residence, providing residents with individuality and a superior level of comfort.",

        "Each home has stunning panoramic views and direct access to the pristine waters of the Persian Gulf. The World Islands location gives residents access to private beaches, premium resorts, luxury spas and gyms. Luxury gourmet restaurants are in close proximity.",

        "Finally, a core tenet would be the promotion of intergenerational learning, intentionally creating opportunities for residents of all ages to interact, share their unique perspectives, and learn from one another, thereby nurturing a supportive and intellectually stimulating community fabric within each development. In essence, the Luminous Path Building Society would be dedicated to constructing not just buildings, but dynamic living environments that actively inspire intellectual curiosity, foster collaboration, and champion a continuous pursuit of knowledge among all its residents, transforming these living spaces into true hubs of learning and growth.."],

    },

    areaDetails: {
      location: "Port City",
      details: ["Amali Island is an extraordinary development set within the iconic World Islands, designed for those who seek the pinnacle of luxury and exclusivity. This private island offers a limited collection of ultra-premium villas, each crafted with architectural excellence and a deep connection to nature. Surrounded by crystal-clear waters and panoramic views of the Dubai skyline, Amali redefines what it means to live in harmony with elegance and privacy.",

        "Every aspect of Amali Island has been curated to elevate the standard of elite living. From bespoke interiors and world-class amenities to dedicated yacht access and lush landscaping, the island has been master-planned to offer a seamless blend of serenity and sophistication. It's not just a place to live—it’s a retreat that brings together nature, design, and exclusivity in a way no other location in Dubai can.",
        "Every aspect of Amali Island has been curated to elevate the standard of elite living. From bespoke interiors and world-class amenities to dedicated yacht access and lush landscaping, the island has been master-planned to offer a seamless blend of serenity and sophistication. It's not just a place to live—it’s a retreat that brings together nature, design, and exclusivity in a way no other location in Dubai can."
      ],
      backgroundImage: '/bg/bg5.jpg'
    },

    amenities: [
      { icon: HomeIcon, label: 'Furnished' },
      { icon: CalendarIcon, label: 'Play Zone' },
      { icon: HomeIcon, label: 'Shared Pool' },
      { icon: HomeIcon, label: 'Car Parking' },
      { icon: HomeIcon, label: 'Gym' },
      { icon: HomeIcon, label: 'Terrace' },
      { icon: ShieldCheckIcon, label: '24/7 Monitoring' },
      { icon: ShoppingBagIcon, label: 'Retail Outlets' },
      { icon: HomeIcon, label: 'Juice Bars' },
      { icon: HomeIcon, label: 'Coffee Zone' },
      { icon: ShieldCheckIcon, label: 'Personal Security' },

    ],

    builderDetails: {
      name: "Elysian Developments",
      details: ["Elysian Developments is a visionary real estate development firm headquartered in Dubai, dedicated to crafting world-class luxury living experiences. Renowned for its commitment to design excellence, sustainability, and exclusivity, Elysian specializes in premium waterfront and island-based residential projects that redefine the standards of modern living. Each development under the Elysian name is a harmonious blend of cutting-edge architecture, artisanal craftsmanship, and curated lifestyle amenities tailored for the global elite.",

        "Driven by a philosophy that prioritizes timeless value over trends, Elysian Developments partners with leading architects, designers, and consultants to bring ambitious concepts to life. From serene private islands to urban luxury enclaves, their projects consistently stand out for their attention to detail, iconic locations, and lasting investment appeal.",

        "Elysian Developments partners with leading architects, designers, and consultants to bring ambitious concepts to life. From serene private islands to urban luxury enclaves, their projects consistently stand out for their attention to detail, iconic locations, and lasting investment appeal."
      ],
      backgroundImage: '/bg/bg2.jpg'
    },

    architectureImages: [
      { src: '/img/building3.jpg', alt: 'Luxury building' },
      { src: '/img/building2.jpg', alt: 'Luxury building' }
    ],

    interiorImages: [
      { src: '/img/bed3.jpg', alt: 'Interior design' },
      { src: '/img/bed2.jpg', alt: 'Living Area' },
    ],

    amenitiesImages: [
      {
        src: '/img/swim.jpg',
        alt: 'swim'
      },
      {
        src: '/img/parking.jpg',
        alt: 'Beige residential apartment building against blue sky'
      },
      {
        src: '/img/gym.jpg',
        alt: 'Contemporary apartment building with balconies'
      },
      {
        src: '/img/parking.jpg',
        alt: 'Urban residential development'
      },
      {
        src: '/img/gym.jpg',
        alt: 'Modern high-rise residential complex'
      },
      {
        src: '/swim.jpg',
        alt: 'Contemporary building design with geometric features'
      }
    ],

    paymentPlanData: [
      { percentage: 10, label: 'Down Payment' },
      { percentage: 40, label: 'Installments' },
      { percentage: 50, label: 'Completion' }
    ],

    units: [
      {
        unitNumber: '32',
        type: 'Apartment',
        layout: '1 Bedroom',
        size: 4891,
        floorLabel: 'Floor',
        floor: 3,
        pricePerSqft: 3758,
        price: 2200000,
        favorite: false
      },
      {
        unitNumber: '41',
        type: 'Apartment',
        layout: '2 Bedroom',
        size: 8891,
        floorLabel: 'Floor',
        floor: 4,
        pricePerSqft: 3785,
        price: 5002000,
        favorite: false
      },
      {
        unitNumber: '55',
        type: 'Apartment',
        layout: '2 Bedroom',
        size: 9102,
        floorLabel: 'Floors',
        floor: 5,
        pricePerSqft: 3682,
        price: 5294000,
        favorite: true,
        note: 'hi, please focus on this unit.. best ocean view from the side balcony',
        userName: 'Sabir Al Raf',
        userAvatar: 'https://i.pravatar.cc/100?img=3',
        timeAgo: '6 hour'
      },
      // Additional units for demonstration
      {
        unitNumber: '60',
        type: 'Apartment',
        layout: '3 Bedroom',
        size: 12000,
        floorLabel: 'Floor',
        floor: 7,
        pricePerSqft: 3950,
        price: 7800000,
        favorite: false
      },
      {
        unitNumber: '62',
        type: 'Apartment',
        layout: '1 Bedroom',
        size: 5100,
        floorLabel: 'Floor',
        floor: 8,
        pricePerSqft: 3800,
        price: 2350000,
        favorite: false
      },
      {
        unitNumber: '75',
        type: 'Penthouse',
        layout: '4 Bedroom',
        size: 15000,
        floorLabel: 'Floor',
        floor: 20,
        pricePerSqft: 5200,
        price: 15600000,
        favorite: false
      },
      {
        unitNumber: '80',
        type: 'Apartment',
        layout: '3 Bedroom',
        size: 11800,
        floorLabel: 'Floor',
        floor: 15,
        pricePerSqft: 4100,
        price: 8200000,
        favorite: false
      },
      {
        unitNumber: '90',
        type: 'Duplex',
        layout: '4 Bedroom',
        size: 13500,
        floorLabel: 'Floors',
        floor: 18,
        pricePerSqft: 4800,
        price: 12000000,
        favorite: false
      }
    ],

    planImages: [
      { type: 'image', src: '/img/map.png', alt: 'Plan View' },
      { type: 'map', lat: 25.1972, lng: 55.2744, zoom: 12 }
    ],
    mapBackground: '/bg/lowanglebg.jpg',
    galleryBackground: '/bg/lowanglebg.jpg',
    amenityBackground: '/bg/bg7.jpg',
    paymentBackground: '/bg/bg3.jpg'
  }
]
