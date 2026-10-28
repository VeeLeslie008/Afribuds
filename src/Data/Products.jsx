export const menuCategories = [
  { id: 'all', label: 'All Dishes' },
  { id: 'soups', label: 'Soups' },
  { id: 'native', label: 'Native & Swallow' },
  { id: 'starters', label: 'Starters' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'pastries', label: 'Pastries' },
];

export const menuDishes = [
  // --- SOUPS (12) ---
  { 
    id: 's1', 
    name: 'Egusi Soup', 
    category: 'soups', 
    tag: 'Classic', 
    description: 'Rich melon seed soup cooked with spinach and assorted meats.', 
    price: '₦3,000', 
    rating: 4.9, 
    reviews: 120, 
    image: 'https://migranx.com/_next/image?url=%2Fimages%2Ftaste-of-home-i.webp&w=828&q=75' 
  },
  { 
    id: 's2', 
    name: 'Ogbono Soup', 
    category: 'soups', 
    tag: 'Popular', 
    description: 'Draw soup made from wild mango seeds, served with assorted meats.', 
    price: '₦3,000', 
    rating: 4.8, 
    reviews: 95, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwhWw7ETMZ4HbFclNiLRy1qzBj3f9R0JgoSC_9lr2jA&s=10' 
  },
  { 
    id: 's3', 
    name: 'Efo Riro', 
    category: 'soups', 
    tag: 'Spicy', 
    description: 'Rich Yoruba spinach stew with locust beans, peppers, and assorted meat.', 
    price: '₦3,500', 
    rating: 4.9, 
    reviews: 210, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrw431yBbGyu9ZQMzQ9jGpQo95IiVk40ZtI0RM_-cK-kTMTGGnwoSrtz_S&s=10' 
  },
  { 
    id: 's4', 
    name: 'Okra Soup', 
    category: 'soups', 
    tag: 'Healthy', 
    description: 'Fresh okra chopped and cooked with palm oil and seafood.', 
    price: '₦2,500', 
    rating: 4.6, 
    reviews: 88, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYiIifN35uQ-7scRBb_qU2SUaxlXfg7M_yREdCUlVUg&s=10' 
  },
  { 
    id: 's5', 
    name: 'Afang Soup', 
    category: 'soups', 
    tag: 'Native', 
    description: 'A rich Efik delicacy made with Afang leaves and waterleaf.', 
    price: '₦4,000', 
    rating: 4.9, 
    reviews: 145, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Z9_kFy3l4KZsjkIKtR9LB9VH6fl81V6ExEngQEqj1Q&s=10' 
  },
  { 
    id: 's6', 
    name: 'Edikang Ikong', 
    category: 'soups', 
    tag: 'Premium', 
    description: 'Nutritious soup made from pumpkin leaves and waterleaf with assorted meats.', 
    price: '₦4,000', 
    rating: 4.8, 
    reviews: 132, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFU8iVNhHPH_cqup-2EBhKU6MclybyjQtgr7WYW457g&s=10' 
  },
  { 
    id: 's7', 
    name: 'Banga Soup', 
    category: 'soups', 
    tag: 'Delta', 
    description: 'Palm nut soup spiced with traditional herbs and served with starch.', 
    price: '₦3,500', 
    rating: 4.7, 
    reviews: 110, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI3aT7kYE1pcTVUP9c__OolljDGH8IKkbS1d2Z84o1w&s=10' 
  },
  { 
    id: 's8', 
    name: 'Oha Soup', 
    category: 'soups', 
    tag: 'Igbo', 
    description: 'Traditional soup made with Oha leaves and cocoyam thickener.', 
    price: '₦3,000', 
    rating: 4.8, 
    reviews: 75, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGgEa6LGBQV6SpIWClPABSfqkvQ72tACzE7eSIAiJwQ&s=10' 
  },
  { 
    id: 's9', 
    name: 'Ofe Nsala (White Soup)', 
    category: 'soups', 
    tag: 'Spicy', 
    description: 'Light soup made with fresh catfish, utazi leaves, and yam thickener.', 
    price: '₦3,500', 
    rating: 4.9, 
    reviews: 165, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVk3OJOXKyBT1Z3gLxJ8bG5ng2Uv6xDG_5ImzTBtTPA&s=10' 
  },
  { 
    id: 's10', 
    name: 'Groundnut Soup', 
    category: 'soups', 
    tag: 'Rich', 
    description: 'Creamy peanut-based soup with chicken and traditional spices.', 
    price: '₦3,000', 
    rating: 4.6, 
    reviews: 60, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhPDeOwd64SEYlHWSx6uXPxlNVAW_bzQ0Ra3agLztiQ&s=10' 
  },
  { 
    id: 's11', 
    name: 'Bitterleaf Soup', 
    category: 'soups', 
    tag: 'Healthy', 
    description: 'Nutritious soup made with washed bitter leaves and assorted meat.', 
    price: '₦2,500', 
    rating: 4.5, 
    reviews: 50, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHMBPIiFBclB3ebD1NauSez6MfWEu13YhHMIx9r5Wgw&s=10' 
  },
  { 
    id: 's12', 
    name: 'Miyan Kuka', 
    category: 'soups', 
    tag: 'Northern', 
    description: 'Baobab leaf soup popular in Northern Nigeria, cooked with beef.', 
    price: '₦2,500', 
    rating: 4.7, 
    reviews: 80, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT-mub4-RIuUwtykQoAFXxA5dZr0q7BQ_ylRxkg0dzg&s=10' 
  },

  // --- NATIVE & SWALLOW (10) ---
  { 
    id: 'n1', 
    name: 'Nkwobi', 
    category: 'native', 
    tag: 'Spicy', 
    description: 'Spicy cow foot delicacy cooked in palm oil, utazi leaves, and potash.', 
    price: '₦4,000', 
    rating: 4.9, 
    reviews: 302, 
    image: 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/11/img_1798.jpg' 
  },
  { 
    id: 'n2', 
    name: 'Isi Ewu', 
    category: 'native', 
    tag: 'Delicacy', 
    description: 'Spicy goat head dish prepared with palm oil, spices, and onions.', 
    price: '₦4,000', 
    rating: 4.9, 
    reviews: 250, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD036pCx3CTvBu4Aq85ZPgUQ4byiFOV17Q3KnITS-uTw&s=10' 
  },
  { 
    id: 'n3', 
    name: 'Ofada Rice & Ayamase', 
    category: 'native', 
    tag: 'Classic', 
    description: 'Local unpolished rice served with spicy red pepper stew.', 
    price: '₦3,500', 
    rating: 4.8, 
    reviews: 190, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsXRSf_l2P2hFTjTNO95PRNMbk-n7zEy97YC9ZQ6FiQ&s=10h' 
  },
  { 
    id: 'n4', 
    name: 'Iwuk Edesi', 
    category: 'native', 
    tag: 'Native', 
    description: 'Native palm oil jollof rice cooked with local spices and dried fish.', 
    price: '₦3,000', 
    rating: 4.7, 
    reviews: 115, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVZhzqlv_OMT-6dkZqK9K9S5K5ak4Tsj8i6tD_G5zMA&s=10' 
  },
  { 
    id: 'n5', 
    name: 'Abula (Amala, Ewedu & Gbegiri)', 
    category: 'native', 
    tag: 'Yoruba', 
    description: 'A trio of yam flour swallow, jute leaf soup, and bean soup.', 
    price: '₦3,000', 
    rating: 4.9, 
    reviews: 320, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWY79p3zFX9wVt6wDbiV-6jzhvzT8itQuIutrQlieYA&s=10' 
  },
  { 
    id: 'n6', 
    name: 'Tuwo Shinkafa & Miyan Taushe', 
    category: 'native', 
    tag: 'Northern', 
    description: 'Rice swallow served with rich pumpkin seed soup.', 
    price: '₦2,500', 
    rating: 4.6, 
    reviews: 85, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNXP1AYiRjxDe7xwDHxURnvss_QSsXScMp72_yAJvBQ&s=10' 
  },
  { 
    id: 'n7', 
    name: 'Pounded Yam & Egusi', 
    category: 'native', 
    tag: 'Classic', 
    description: 'Smooth pounded yam served with rich Egusi soup.', 
    price: '₦3,000', 
    rating: 4.9, 
    reviews: 210, 
    image: 'https://migranx.com/_next/image?url=%2Fimages%2Ftaste-of-home-i.webp&w=828&q=75' 
  },

  // --- STARTERS (8) ---
  { 
    id: 'st1', 
    name: 'Beef Suya', 
    category: 'starters', 
    tag: 'Spicy', 
    description: 'Spicy grilled beef skewers coated in traditional yaji seasoning.', 
    price: '₦2,500', 
    rating: 4.9, 
    reviews: 450, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiQrQUWDQi7Oj3SNKLT5oQaATMLwFfGclCJ6a2WEryG0k2qt9SaqihTM&s=10' 
  },
  { 
    id: 'st2', 
    name: 'Asun (Peppered Goat)', 
    category: 'starters', 
    tag: 'Spicy', 
    description: 'Smoked goat meat chopped and tossed in spicy peppers and onions.', 
    price: '₦3,500', 
    rating: 4.8, 
    reviews: 220, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4GINVWBlVnqFbcZ50b4uzSRpKAmjZQdyKDP7uG6GA&s=10' 
  },
  { 
    id: 'st3', 
    name: 'Gizdodo', 
    category: 'starters', 
    tag: 'Popular', 
    description: 'A delicious mix of fried plantain and peppered gizzard.', 
    price: '₦2,500', 
    rating: 4.9, 
    reviews: 310, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNksyv5w3eH7n2nv4bxcUo7d-gH1QGPFtRkOGjbPn9PA&s=10' 
  },
  { 
    id: 'st4', 
    name: 'Peppered Gizzard', 
    category: 'starters', 
    tag: 'Spicy', 
    description: 'Gizzard cooked in a rich, spicy tomato and pepper sauce.', 
    price: '₦2,000', 
    rating: 4.7, 
    reviews: 150, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vf72Jf-YDeUYqUdTUo_xcW1gMmpEBYHC0jRyJi5QwQ&s=10' 
  },
  { 
    id: 'st5', 
    name: 'Peppered Snail', 
    category: 'starters', 
    tag: 'Delicacy', 
    description: 'Giant snails cooked in a spicy, rich pepper sauce.', 
    price: '₦4,000', 
    rating: 4.8, 
    reviews: 110, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9DOwD5OiLpGakCsTf6jW2_hFaYO-G5C4xA-yrBIzRQ&s=10' 
  },
  { 
    id: 'st6', 
    name: 'Moi Moi', 
    category: 'starters', 
    tag: 'Healthy', 
    description: 'Steamed bean pudding made from blended beans, peppers, and spices.', 
    price: '₦1,500', 
    rating: 4.9, 
    reviews: 280, 
    image: 'https://www.surulerefoods.com/cdn/shop/files/moi_4.png?v=1771343665&width=1445' 
  },
  { 
    id: 'st7', 
    name: 'Akara (Bean Cakes)', 
    category: 'starters', 
    tag: 'Breakfast', 
    description: 'Deep-fried bean cakes, crispy on the outside and soft inside.', 
    price: '₦1,000', 
    rating: 4.7, 
    reviews: 190, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8L4-CPvDgazgl5EC95wCuqn6XYhobcegcopzybQii7A&s=10' 
  },
  { 
    id: 'st8', 
    name: 'Small Chops Platter', 
    category: 'starters', 
    tag: 'Party', 
    description: 'Assorted samosas, spring rolls, and puff puff.', 
    price: '₦3,000', 
    rating: 4.8, 
    reviews: 340, 
    image: 'https://getbumpa.com/cdn-cgi/image/format=auto,w_800/https%3A%2F%2Fdodptt9f4zk9h.cloudfront.net%2Fstores%2F139851%2Fproducts%2Fb5bd56b1f08b3e243ee692b13bc3721a25e189f3.jpeg' 
  },

  // --- SNACKS (8) ---
  { 
    id: 'sn1', 
    name: 'Puff Puff', 
    category: 'snacks', 
    tag: 'Sweet', 
    description: 'Golden fried dough balls, soft and sweet.', 
    price: '₦1,000', 
    rating: 4.9, 
    reviews: 500, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYd0LTiPpAPvDBL6QJdHLX5YLnRQbnOe65ZRJ9uc6OA&s=10' 
  },
  { 
    id: 'sn2', 
    name: 'Chin Chin', 
    category: 'snacks', 
    tag: 'Crunchy', 
    description: 'Crunchy, sweet fried dough cubes, perfect for snacking.', 
    price: '₦1,500', 
    rating: 4.8, 
    reviews: 420, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFenSZlaVmRagy-9VRCGej71v_KAIyyMj6_Ydfm-uEHw&s=10' 
  },
  { 
    id: 'sn3', 
    name: 'Boli (Roasted Plantain)', 
    category: 'snacks', 
    tag: 'Street Food', 
    description: 'Roasted plantain served with spicy groundnut pepper sauce.', 
    price: '₦1,000', 
    rating: 4.7, 
    reviews: 230, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2W8k5wsBrAWr47g9nk6Q8K3n44-pG_ROEozKjQ0gyGQ&s=10' 
  },
  { 
    id: 'sn4', 
    name: 'Kokoro', 
    category: 'snacks', 
    tag: 'Crunchy', 
    description: 'Twisted, crunchy corn snack, lightly salted.', 
    price: '₦500', 
    rating: 4.5, 
    reviews: 120, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZvcaJVpt3QBJVo-9_3AGo2tvDH9J-gcq1fYUIgbCnA&s=10' 
  },
  { 
    id: 'sn5', 
    name: 'Kuli Kuli', 
    category: 'snacks', 
    tag: 'Savory', 
    description: 'Deep-fried groundnut snack, crispy and flavorful.', 
    price: '₦500', 
    rating: 4.6, 
    reviews: 110, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhMOTkfVHoDql9n0TbYwWgplSfIrMWvhqjOeklPDjhA&s=10' 
  },
  { 
    id: 'sn6', 
    name: 'Plantain Chips', 
    category: 'snacks', 
    tag: 'Crispy', 
    description: 'Thinly sliced, fried unripe plantain chips.', 
    price: '₦1,000', 
    rating: 4.8, 
    reviews: 380, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSfCR2y7c2olb3-_AbG6n-Eq4_2k-FsIqNYSLYEE5Yw&s=10' 
  },
  { 
    id: 'sn7', 
    name: 'Buns (Fried Dough)', 
    category: 'snacks', 
    tag: 'Sweet', 
    description: 'Dense, sweet fried dough balls, similar to puff puff but crunchier.', 
    price: '₦500', 
    rating: 4.6, 
    reviews: 90, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwN0GSCGIvGEfl7CiM4wXHyxT5uE-jb3v_GNuqv57oWA&s=10' 
  },

  // --- PASTRIES (8) ---
  { 
    id: 'p1', 
    name: 'Meat Pie', 
    category: 'pastries', 
    tag: 'Classic', 
    description: 'Flaky pastry filled with seasoned minced meat, potatoes, and carrots.', 
    price: '₦1,200', 
    rating: 4.9, 
    reviews: 410, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNpjig-XkOAijdYPvlwqzJV4PH_Mt09w6NsmGlayOsQ&s=10' 
  },
  { 
    id: 'p2', 
    name: 'Sausage Roll', 
    category: 'pastries', 
    tag: 'Popular', 
    description: 'Soft pastry wrapped around a seasoned sausage.', 
    price: '₦700', 
    rating: 4.8, 
    reviews: 350, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7H43O1VuyBSAEoSHZpgT3sRHoQ5muXfo1Al0Ri0-yQ&s=10' 
  },
  { 
    id: 'p3', 
    name: 'Egg Roll', 
    category: 'pastries', 
    tag: 'Classic', 
    description: 'Golden fried dough wrapped around a whole boiled egg.', 
    price: '₦750', 
    rating: 4.7, 
    reviews: 200, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-rQFROq3i2bA7gBFGxhUOOvRcnhIm1rnxg1zhCxNEg&s=10' 
  },
  { 
    id: 'p4', 
    name: 'Fish Pie', 
    category: 'pastries', 
    tag: 'Savory', 
    description: 'Flaky pastry filled with seasoned fish and potatoes.', 
    price: '₦800', 
    rating: 4.8, 
    reviews: 180, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTNVvIgQqOw5bqb5ubQJNtRzzsROmiVwRMS5TIZ2hwg&s=10' 
  },
  { 
    id: 'p5', 
    name: 'Chicken Pie', 
    category: 'pastries', 
    tag: 'Savory', 
    description: 'Similar to meat pie but filled with shredded chicken.', 
    price: '₦1,000', 
    rating: 4.7, 
    reviews: 160, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPxyfdVFupgiMaVlDxxBa_5eJmYnwSvR_x27IAnnAZA&s=10' 
  },
  { 
    id: 'p6', 
    name: 'Nigerian Doughnut', 
    category: 'pastries', 
    tag: 'Sweet', 
    description: 'Soft, fried sweet dough, often coated in sugar.', 
    price: '₦800', 
    rating: 4.6, 
    reviews: 220, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcmCvTB5fruopAqD1pqy6tvuEsOFh1_EeGGFpIZMCTg&s=10ttps://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80h' 
  },
  { 
    id: 'p7', 
    name: 'Coconut Candy', 
    category: 'pastries', 
    tag: 'Sweet', 
    description: 'Chewy candy made from shredded coconut and sugar.', 
    price: '₦500', 
    rating: 4.5, 
    reviews: 100, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTYgyNNdkAfAXg6JqfvTb1KHLqk7EP1LjIQSItZxdvg&s=10' 
  },
  { 
    id: 'p8', 
    name: 'Puff Puff (Jumbo)', 
    category: 'pastries', 
    tag: 'Sweet', 
    description: 'Extra-large, fluffy puff puff balls.', 
    price: '₦1,500', 
    rating: 4.8, 
    reviews: 190, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsgX-u7ZEIfFvg56nujYvgJs0ZRDlLsQLuxXc_WwStQ&s=10' 
  },
];