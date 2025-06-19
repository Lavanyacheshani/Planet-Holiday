import { TourPackage, BlogPost } from '../context/AppContext';

export const initialPackages: TourPackage[] = [
  {
    id: '1',
    title: 'Cultural Triangle Explorer',
    description: 'Discover ancient kingdoms, sacred temples, and rich heritage sites in Sri Lanka\'s Cultural Triangle.',
    price: 450,
    duration: '5 Days / 4 Nights',
    activities: ['Sigiriya Rock Fortress', 'Polonnaruwa Ancient City', 'Dambulla Cave Temple', 'Minneriya Safari'],
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    featured: true,
  },
  {
    id: '2',
    title: 'Hill Country Adventure',
    description: 'Experience the cool climate, tea plantations, and stunning landscapes of Sri Lanka\'s hill country.',
    price: 380,
    duration: '4 Days / 3 Nights',
    activities: ['Ella Rock Hiking', 'Tea Factory Visit', 'Nine Arch Bridge', 'Little Adam\'s Peak'],
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    featured: true,
  },
  {
    id: '3',
    title: 'Southern Coast Paradise',
    description: 'Relax on pristine beaches, watch whales, and explore colonial architecture along the southern coast.',
    price: 320,
    duration: '3 Days / 2 Nights',
    activities: ['Whale Watching', 'Galle Fort Tour', 'Beach Activities', 'Turtle Hatchery'],
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    featured: false,
  },
  {
    id: '4',
    title: 'Wildlife Safari Package',
    description: 'Encounter leopards, elephants, and diverse wildlife in Sri Lanka\'s pristine national parks.',
    price: 520,
    duration: '6 Days / 5 Nights',
    activities: ['Yala Safari', 'Udawalawe Safari', 'Elephant Orphanage', 'Bird Watching'],
    image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',
    featured: true,
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Must-Visit Destinations in Sri Lanka',
    excerpt: 'Discover the most breathtaking locations that should be on every traveler\'s Sri Lankan itinerary.',
    content: `Sri Lanka, the pearl of the Indian Ocean, offers an incredible diversity of experiences within its compact island borders. From ancient ruins to pristine beaches, misty mountains to wildlife-rich national parks, this tropical paradise has something for every type of traveler.

    **1. Sigiriya Rock Fortress**
    Known as the eighth wonder of the world, this ancient rock fortress rises dramatically from the central plains. The 5th-century palace ruins atop the 200-meter rock offer spectacular views and fascinating history.

    **2. Kandy**
    The cultural capital of Sri Lanka, home to the sacred Temple of the Tooth Relic. The city's colonial architecture and beautiful lake make it a must-visit destination.

    **3. Ella**
    A charming hill station famous for its scenic train rides, hiking trails, and tea plantations. Don't miss the Nine Arch Bridge and Little Adam's Peak.

    **4. Galle**
    This UNESCO World Heritage site features a well-preserved Dutch colonial fort with cobblestone streets, boutique shops, and stunning ocean views.

    **5. Yala National Park**
    Home to the highest concentration of leopards in the world, along with elephants, sloth bears, and over 200 bird species.

    Each destination offers unique experiences that showcase Sri Lanka's rich cultural heritage and natural beauty.`,
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    author: 'Sarah Williams',
    date: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Sri Lankan Cuisine: A Food Lover\'s Paradise',
    excerpt: 'Explore the rich flavors, aromatic spices, and diverse culinary traditions of Sri Lankan cuisine.',
    content: `Sri Lankan cuisine is a delightful fusion of flavors influenced by the island's history and geography. With influences from Indian, Dutch, Portuguese, and British cuisines, Sri Lankan food offers a unique culinary experience.

    **Essential Dishes to Try:**

    **Rice and Curry**
    The staple meal consisting of rice served with various curries including fish, chicken, or vegetable options, accompanied by sambols and pickles.

    **Hoppers (Appa)**
    Bowl-shaped pancakes made from fermented rice flour and coconut milk, often served with egg or honey.

    **Kottu Roti**
    A popular street food made from chopped roti bread stir-fried with vegetables, meat, and spices.

    **String Hoppers**
    Delicate rice noodle pancakes served with curry and coconut sambol.

    **Spices and Flavors:**
    Sri Lankan cuisine is renowned for its use of fresh spices including cinnamon, cardamom, cloves, and curry leaves. The balance of sweet, sour, and spicy flavors creates memorable dining experiences.

    Don't miss trying fresh tropical fruits like king coconut, rambutan, and mangosteen during your visit!`,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    author: 'Michael Chen',
    date: '2024-01-10',
    featured: false,
  },
];

export const destinations = [
  {
    id: 'colombo',
    name: 'Colombo',
    description: 'The vibrant capital city blending modern urban life with colonial heritage.',
    image: 'https://images.pexels.com/photos/5219513/pexels-photo-5219513.jpeg',
    activities: ['City Tours', 'Shopping', 'Museums', 'Religious Sites'],
    highlights: ['Gangaramaya Temple', 'Independence Square', 'Pettah Market', 'Galle Face Green'],
  },
  {
    id: 'kandy',
    name: 'Kandy',
    description: 'The cultural capital surrounded by hills and home to the sacred Temple of the Tooth.',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    activities: ['Temple Visits', 'Cultural Shows', 'Botanical Gardens', 'Lake Tours'],
    highlights: ['Temple of the Tooth', 'Royal Botanical Gardens', 'Kandy Lake', 'Cultural Dance Shows'],
  },
  {
    id: 'ella',
    name: 'Ella',
    description: 'A picturesque hill station famous for tea plantations and scenic train rides.',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    activities: ['Hiking', 'Train Rides', 'Tea Factory Tours', 'Photography'],
    highlights: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Ella Rock', 'Tea Plantations'],
  },
  {
    id: 'galle',
    name: 'Galle',
    description: 'A UNESCO World Heritage site with Dutch colonial architecture and coastal charm.',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    activities: ['Fort Exploration', 'Beach Activities', 'Shopping', 'Dining'],
    highlights: ['Galle Fort', 'Lighthouse', 'Dutch Reformed Church', 'Rampart Walls'],
  },
];

export const activities = [
  {
    id: 'wildlife-safari',
    name: 'Wildlife Safari',
    description: 'Encounter elephants, leopards, and diverse wildlife in pristine national parks.',
    image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',
    locations: ['Yala National Park', 'Udawalawe National Park', 'Minneriya National Park'],
  },
  {
    id: 'whale-watching',
    name: 'Whale Watching',
    description: 'Witness blue whales and dolphins in their natural habitat off the southern coast.',
    image: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg',
    locations: ['Mirissa', 'Trincomalee', 'Kalpitiya'],
  },
  {
    id: 'hiking',
    name: 'Hiking & Trekking',
    description: 'Explore scenic trails through mountains, forests, and tea plantations.',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    locations: ['Adam\'s Peak', 'Ella Rock', 'Knuckles Range', 'Horton Plains'],
  },
  {
    id: 'cultural-tours',
    name: 'Cultural Tours',
    description: 'Discover ancient temples, ruins, and traditional Sri Lankan culture.',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    locations: ['Sigiriya', 'Polonnaruwa', 'Anuradhapura', 'Dambulla'],
  },
];

export const reviews = [
  {
    id: '1',
    name: 'Emma Thompson',
    country: 'United Kingdom',
    rating: 5,
    comment: 'Planet Holiday made our Sri Lankan adventure unforgettable! The cultural triangle tour was perfectly organized with knowledgeable guides.',
    date: '2024-01-20',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: '2',
    name: 'David Miller',
    country: 'Australia',
    rating: 5,
    comment: 'Excellent service from start to finish. The wildlife safari exceeded our expectations - we saw leopards and elephants up close!',
    date: '2024-01-15',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: '3',
    name: 'Sophie Martin',
    country: 'France',
    rating: 5,
    comment: 'The hill country package was magical. Tea plantations, train rides, and beautiful hiking trails. Highly recommended!',
    date: '2024-01-10',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
  },
];

export const faqs = [
  {
    id: '1',
    question: 'Do I need a visa to visit Sri Lanka?',
    answer: 'Most visitors need an Electronic Travel Authorization (ETA) or visa to enter Sri Lanka. Check with the Sri Lankan embassy or consulate in your country for specific requirements.',
  },
  {
    id: '2',
    question: 'What is the best time to visit Sri Lanka?',
    answer: 'Sri Lanka can be visited year-round due to its two monsoon seasons affecting different regions. December to March is ideal for the west and south coasts, while April to September is better for the east coast.',
  },
  {
    id: '3',
    question: 'What currency is used in Sri Lanka?',
    answer: 'The Sri Lankan Rupee (LKR) is the official currency. US dollars are widely accepted at hotels and tourist establishments, but local currency is needed for small purchases.',
  },
  {
    id: '4',
    question: 'Is Sri Lanka safe for tourists?',
    answer: 'Yes, Sri Lanka is generally safe for tourists. However, it\'s always wise to take standard travel precautions and stay informed about current conditions.',
  },
  {
    id: '5',
    question: 'What languages are spoken in Sri Lanka?',
    answer: 'Sinhala and Tamil are the official languages, while English is widely spoken in tourist areas, hotels, and restaurants.',
  },
];