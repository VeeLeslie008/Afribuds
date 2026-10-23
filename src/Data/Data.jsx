export const services = [
  {
    id: 'private-dining',
    icon: 'fa-solid fa-utensils',
    title: 'Private Dining',
    text: 'Multi-course tasting menus served in your home, plated and styled to feel like a restaurant.',
    priceFrom: '$95',
    priceUnit: 'per guest',
    image: 'https://babucho.co.uk/wp-content/uploads/2025/02/babucho_quayside_suite16-1510x1536.jpg',
    theme: 'dark',
  },
  {
    id: 'event-catering',
    icon: 'fa-solid fa-cake-candles',
    title: 'Event Catering',
    text: 'Showers, birthdays, anniversaries — bespoke menus catered for groups of 12 to 80 guests.',
    priceFrom: '$1,800',
    priceUnit: 'starting',
    image: 'https://www.detorahfoods.com.ng/wp-content/uploads/2026/07/052DF7D5-FEBB-4ACC-804D-4BD6262A3EC8.png',
    theme: 'light',
  },
  {
    id: 'weekly-meal-prep',
    icon: 'fa-solid fa-leaf',
    title: 'Weekly Meal Prep',
    text: "Five chef-cooked dinners delivered weekly, tailored to your household's tastes and goals.",
    priceFrom: '$280',
    priceUnit: 'per week',
    image: 'https://kikifoodies.com/wp-content/uploads/2025/11/ET5B7924-6-1536x1536.jpeg',
    theme: 'light',
  },
  {
    id: 'custom-menus',
    icon: 'fa-solid fa-feather-pointed',
    title: 'Custom Menus',
    text: 'Themed dinners, dietary-specific menus, and special occasion creations built around your story.',
    priceFrom: '$120',
    priceUnit: 'consultation',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    theme: 'dark',
  },
];


export const dishes = [
  {
    id: 'jollof-royale',
    name: 'Smoky Jollof Royale',
    category: 'mains',
    tag: 'Signature',
    description:
      'Slow-cooked long-grain rice in a rich tomato-pepper base, finished with smoked paprika butter and grilled chicken.',
    price: '$28',
    rating: 4.9,
    reviews: 214,
    image:
      'https://yellowplate.ng/wp-content/uploads/2022/08/SMOKY-JOLLOF-RICE-WITH-STEWED-BEEF.jpg',
  },
  {
    id: 'suya-skewers',
    name: 'Charred Suya Skewers',
    category: 'starters',
    tag: 'Spicy',
    description:
      'Spicy grilled meat coated in traditional yaji seasoning, served hot with fresh onions and tomatoes, and loved as a Nigerian street food favourite.',
    price: '$16',
    rating: 4.8,
    reviews: 187,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiQrQUWDQi7Oj3SNKLT5oQaATMLwFfGclCJ6a2WEryG0k2qt9SaqihTM&s=10',
  },
  {
    id: 'egusi-bowl',
    name: 'Egusi & Pounded Yam',
    category: 'mains',
    tag: 'Classic',
    description:
      'A rich Nigerian soup made from ground melon seeds, leafy vegetables, assorted meats, and flavorful spices, best enjoyed with pounded yam or fufu.',
    price: '$24',
    rating: 4.9,
    reviews: 156,
    image:
      'https://migranx.com/_next/image?url=%2Fimages%2Ftaste-of-home-i.webp&w=828&q=75',
  },
  {
    id: 'Nkwobi',
    name: 'Nkwobi',
    category: 'starters',
    tag: 'Spicy',
    description:
      'A delicious Igbo delicacy made from tender cow foot mixed with spicy palm oil sauce, utazi leaves, and aromatic traditional spices.',
    price: '$12',
    rating: 4.7,
    reviews: 302,
    image:
      'https://www.mydiasporakitchen.com/wp-content/uploads/2017/11/img_1798.jpg',
  },
  {
    id: 'Savory blended beans',
    name: 'Moi-Moi',
    category: 'Snacks',
    tag: 'Popular',
    description:
      'A soft, savoury Nigerian delicacy made from blended beans, peppers, onions, and spices, steamed to perfection for a delicious and nutritious meal.',
    price: '$14',
    rating: 4.9,
    reviews: 98,
    image:
      'https://www.surulerefoods.com/cdn/shop/files/moi_4.png?v=1771343665&width=1445',
  },
  {
    id: 'puff-puff-donuts',
    name: 'Small Chops',
    category: 'Snacks',
    tag: 'Sweet',
    description:
      'A tasty assortment of Nigerian snacks, including puff-puff, samosas, spring rolls, and spicy meat pies, perfect for parties and special occasions.',
    price: '$10',
    rating: 4.8,
    reviews: 241,
    image:
      'https://getbumpa.com/cdn-cgi/image/format=auto,w_800/https%3A%2F%2Fdodptt9f4zk9h.cloudfront.net%2Fstores%2F139851%2Fproducts%2Fb5bd56b1f08b3e243ee692b13bc3721a25e189f3.jpeg',
  },
];

export const categories = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'Snacks', label: 'Snacks' },
];

// Homepage folder/AboutUs component

export const storyFeatures = [
  { id: 'seasonal', text: 'Seasonal ingredient sourcing' },
  { id: 'private', text: 'Private & event dining' },
  { id: 'local', text: 'Locally grown produce' },
  { id: 'chefs', text: 'Award-winning chefs' },
];

export const storyStats = [
  {
    id: 'years',
    icon: 'fa-solid fa-star',
    end: 17,
    decimals: 0,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    id: 'events',
    icon: 'fa-solid fa-calendar-days',
    end: 730,
    decimals: 0,
    suffix: '+',
    label: 'Events Hosted',
  },
  {
    id: 'chefs',
    icon: 'fa-solid fa-utensils',
    end: 37,
    decimals: 0,
    suffix: '',
    label: 'Chefs on Team',
  },
  {
    id: 'rating',
    icon: 'fa-solid fa-face-smile',
    end: 98.3,
    decimals: 1,
    suffix: '%',
    label: 'Happy Clients',
  },
];

export const processSteps = [
  {
    id: 'consultation',
    number: '01',
    icon: 'fa-solid fa-comments',
    title: 'Consultation & Tasting',
    text: 'We start with a conversation — your tastes, dietary needs, and the story you want the table to tell.',
    side: 'left',
    highlighted: true,
  },
  {
    id: 'blueprint',
    number: '02',
    icon: 'fa-solid fa-pen-ruler',
    title: 'Menu Blueprint',
    text: 'A seasonal menu designed around your guests, occasion, and budget — signed off before we cook.',
    side: 'right',
  },
  {
    id: 'sourcing',
    number: '03',
    icon: 'fa-solid fa-basket-shopping',
    title: 'Sourcing & Prep',
    text: 'Fresh produce from local markets, prepped in your kitchen with the same care as ours.',
    side: 'left',
  },
  {
    id: 'service',
    number: '04',
    icon: 'fa-solid fa-utensils',
    title: 'Cook & Serve',
    text: 'Full-service plating and hospitality — we handle the kitchen, you enjoy the table.',
    side: 'right',
  },
  {
    id: 'care',
    number: '05',
    icon: 'fa-solid fa-seedling',
    title: 'Ongoing Care',
    text: 'Weekly meal plans, seasonal rotations, and continuous refinement based on your feedback.',
    side: 'left',
  },
];

export const galleryItems = [
  {
    id: 'signature-plate',
    title: 'Signature Plating',
    category: 'Plating',
    size: 'big',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNqQZdNg7Acz-3u0CzRl_nRFf7dOQOe9lH53UFIKXxw&s=10',
  },
  {
    id: 'dining-room',
    title: 'The Dining Room',
    category: 'Atmosphere',
    size: 'wide',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'fresh-herbs',
    title: 'Garden Herbs',
    category: 'Ingredients',
    size: 'small',
    image:
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'spice-rack',
    title: 'Spice Rack',
    category: 'Ingredients',
    size: 'small',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'chef-at-work',
    title: 'In the Kitchen',
    category: 'Chefs',
    size: 'tall',
    image:
      'https://i.insider.com/6463b3c27224930019f3195c?width=1000&format=jpeg&auto=webp',
  },
  {
    id: 'pastry-detail',
    title: 'Pastry Detail',
    category: 'Desserts',
    size: 'tall',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'table-setting',
    title: 'Table Setting',
    category: 'Atmosphere',
    size: 'wide',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'grilled-dish',
    title: 'From the Grill',
    category: 'Mains',
    size: 'wide',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiQrQUWDQi7Oj3SNKLT5oQaATMLwFfGclCJ6a2WEryG0k2qt9SaqihTM&s=10',
  },
];

export const testimonials = [
  {
    id: 't1',
    rating: 5,
    quote:
      "The dinner they crafted for our anniversary was unlike anything we've had. Every course told a story, and the plating felt like art on the table.",
    name: 'Tyla Dhillon',
    role: 'Private Client',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't2',
    rating: 5,
    quote:
      'AfriBuds handled our 60-guest wedding flawlessly. From tasting to cleanup, everything was calm and considered. Guests are still talking about the jollof.',
    name: 'Marvin McKinney',
    role: 'Wedding Host',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't3',
    rating: 5,
    quote:
      'The weekly meal prep changed how our family eats. Fresh, seasonal, and always on time. It feels like having a private chef without the fuss.',
    name: 'Courtney Henry',
    role: 'Weekly Client',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't4',
    rating: 5,
    quote:
      'We booked them for a corporate retreat and it was the highlight of the weekend. Professional, warm, and the menu was tailored perfectly to our group.',
    name: 'Max Harrison',
    role: 'Event Planner',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't5',
    rating: 5,
    quote:
      'I have dietary restrictions and they still made me feel like the meal was built just for me. Thoughtful, kind, and genuinely delicious.',
    name: 'Kathryn Murphy',
    role: 'Private Client',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't6',
    rating: 5,
    quote:
      'Consistent quality, week after week. The seasonal rotations keep things interesting, and the team always checks in on what we loved most.',
    name: 'Annette Black',
    role: 'Household Client',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
  },
];

// Faq section

export const faqs = [
  {
    id: 'booking',
    question: 'How far in advance should I book?',
    answer:
      'For private dinners we recommend 1–2 weeks notice. For events with 20+ guests, 3–4 weeks gives us enough time to source ingredients and finalise the menu with you.',
  },
  {
    id: 'dietary',
    question: 'Can you accommodate dietary restrictions?',
    answer:
      'Absolutely. Vegan, gluten-free, nut-free, halal — just tell us when you book. Every menu is designed around your household, so restrictions are built in, not bolted on.',
  },
  {
    id: 'kitchen',
    question: 'Do you need a full kitchen to cook?',
    answer:
      'Not at all. A standard home kitchen with an oven, stovetop, and some counter space is plenty. For events in venues without kitchens, we bring our own portable setup.',
  },
  {
    id: 'pricing',
    question: 'How is pricing structured?',
    answer:
      'Private dinners start from $95 per guest and scale with menu complexity. Events and weekly meal prep are quoted per booking — you will get a full breakdown before you commit.',
  },
  {
    id: 'cleanup',
    question: 'Do you clean up after service?',
    answer:
      'Yes. Every booking includes full kitchen cleanup, dishwashing, and packaging any leftovers for you. You finish the evening with a clean kitchen and tomorrow’s lunch ready.',
  },
  {
    id: 'coverage',
    question: 'What areas do you serve?',
    answer:
      'We currently serve the greater metro area and surrounding suburbs within a 40km radius. Travel beyond that is possible with a small surcharge — just ask.',
  },
];

export const contactInfo = [
  {
    id: 'phone',
    icon: 'fa-solid fa-phone',
    label: 'Phone',
    value: '+234 (0) 8082 2999 61',
    href: 'tel:+2348082299961',
  },
  {
    id: 'email',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: 'afribuds@gmail.com',
    href: 'mailto:veeleslie008@gmail.com',
  },
  {
    id: 'instagram',
    icon: 'fa-brands fa-instagram',
    label: 'Instagram',
    value: 'Afribuds Kitchen',
    href: 'https://instagram.com/afribuds',
  },
  {
    id: 'facebook',
    icon: 'fa-brands fa-facebook-f',
    label: 'Facebook',
    value: 'AfriBuds Kitchen',
    href: 'https://facebook.com/afribuds',
  },
  {
    id: 'linkedin',
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    value: 'AfriBuds',
    href: 'https://linkedin.com/company/afribuds',
  },
  {
    id: 'twitter',
    icon: 'fa-brands fa-x-twitter',
    label: 'X / Twitter',
    value: 'Afribuds Kitchen',
    href: 'https://x.com/afribuds',
  },
];


export const footerColumns = [
  {
    id: 'company',
    title: 'Company',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Chefs', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Terms & Conditions', href: '/terms' }, // Added here
    ],
  },
  {
    id: 'services',
    title: 'Services',
    links: [
      { label: 'Private Dining', href: '/services' },
      { label: 'Event Catering', href: '/services' },
      { label: 'Weekly Meal Prep', href: '/services' },
      { label: 'Custom Menus', href: '/services' },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Booking Terms', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cancellation', href: '/cancellation' },
    ],
  },
];

export const footerSocials = [
  {
    id: 'instagram',
    icon: 'fa-brands fa-instagram',
    href: 'https://instagram.com/afribuds',
    label: 'Instagram',
  },
  {
    id: 'facebook',
    icon: 'fa-brands fa-facebook-f',
    href: 'https://facebook.com/afribuds',
    label: 'Facebook',
  },
  {
    id: 'twitter',
    icon: 'fa-brands fa-x-twitter',
    href: 'https://x.com/afribuds',
    label: 'X',
  },
  {
    id: 'youtube',
    icon: 'fa-brands fa-youtube',
    href: 'https://youtube.com/@afribuds',
    label: 'YouTube',
  },
];

export const footerBrand = {
  name: 'AfriBuds',
  tagline: 'Private chef & catering',
  address: '12 Oron Road, Uyo, Akwa Ibom',
  phone: '+234 (0) 8082 2999 61',
  email: 'hello@afribuds.com',
};