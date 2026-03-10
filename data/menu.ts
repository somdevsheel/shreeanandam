export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceHalf?: number;
  priceFull?: number;
  price?: number;
  veg: boolean;
  popular?: boolean;
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "momos",
    label: "Momo Special",
    emoji: "🥟",
    items: [
      {
        id: "mo1",
        name: "Steamed Momos",
        description: "Classic soft steamed dumplings filled with spiced vegetables, served with tangy chutney.",
        priceHalf: 40,
        priceFull: 70,
        veg: true,
        popular: true,
        // Steamed dumplings / dim sum — closest accurate match
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80",
      },
      {
        id: "mo2",
        name: "Fried Momos",
        description: "Crispy golden fried dumplings with a crunchy outer shell and juicy vegetable filling.",
        priceHalf: 50,
        priceFull: 90,
        veg: true,
        popular: true,
        // Fried dumplings / gyoza
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
      },
      {
        id: "mo3",
        name: "Chilli Momos",
        description: "Fiery stir-fried momos tossed in a bold chilli sauce with peppers and onions.",
        priceHalf: 60,
        priceFull: 100,
        veg: true,
        popular: true,
        // Spicy red sauce dumplings
        image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=600&q=80",
      },
      {
        id: "mo4",
        name: "Tandoori Momos",
        description: "Marinated momos grilled in a tandoor for a smoky char and rich flavour.",
        priceHalf: 60,
        priceFull: 100,
        veg: true,
        // Tandoor / grilled food with char marks
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
      },
      {
        id: "mo5",
        name: "Kurkure Momos",
        description: "Extra-crunchy momos coated in a crispy batter layer, served with spicy dip.",
        priceHalf: 70,
        priceFull: 120,
        veg: true,
        // Crispy battered snack
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
      },
    ],
  },
  {
    id: "burgers",
    label: "Burger Corner",
    emoji: "🍔",
    items: [
      {
        id: "bu1",
        name: "Veg Cream Burger",
        description: "Soft bun loaded with crispy veg patty, fresh veggies, and creamy sauce.",
        price: 40,
        veg: true,
        // Simple veg burger
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      },
      {
        id: "bu2",
        name: "Paneer Burger",
        description: "Juicy grilled paneer patty in a toasted bun with mint chutney and fresh onions.",
        price: 50,
        veg: true,
        popular: true,
        // Burger with thick patty
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
      },
      {
        id: "bu3",
        name: "Paneer Burger Special",
        description: "Loaded special version with double paneer, extra toppings, and house special sauce.",
        price: 60,
        veg: true,
        // Loaded stacked burger
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80",
      },
      {
        id: "bu4",
        name: "Cheese Burger",
        description: "Classic burger with a generous slice of melted cheese, crisp lettuce, and tangy ketchup.",
        price: 70,
        veg: true,
        popular: true,
        // Cheese burger with melted cheese visible
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80",
      },
      {
        id: "bu5",
        name: "Spring Roll",
        description: "Crispy golden rolls stuffed with stir-fried vegetables and glass noodles.",
        priceHalf: 40,
        priceFull: 70,
        veg: true,
        // Crispy spring rolls on a plate
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
      },
    ],
  },
  {
    id: "chinese",
    label: "Wok & Desi Chinese",
    emoji: "🍜",
    items: [
      {
        id: "ch1",
        name: "Veg Chowmein",
        description: "Stir-fried noodles with fresh vegetables in a savoury Indo-Chinese sauce.",
        priceHalf: 40,
        priceFull: 70,
        veg: true,
        popular: true,
        // Stir fried noodles with veg
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
      },
      {
        id: "ch2",
        name: "Veg Fried Rice",
        description: "Wok-tossed basmati rice with mixed vegetables, soy sauce, and aromatic spices.",
        priceHalf: 40,
        priceFull: 70,
        veg: true,
        // Fried rice in wok / bowl
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
      },
      {
        id: "ch3",
        name: "Paneer Chowmein",
        description: "Classic chowmein elevated with soft cubes of paneer in a spicy, tangy sauce.",
        priceHalf: 50,
        priceFull: 90,
        veg: true,
        popular: true,
        // Noodles with paneer / white cheese cubes
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
      },
      {
        id: "ch4",
        name: "Hakka Noodles",
        description: "Traditional Hakka-style noodles tossed with crisp veggies and bold Indo-Chinese seasoning.",
        priceHalf: 70,
        priceFull: 120,
        veg: true,
        // Hakka noodles dark soy style
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80",
      },
    ],
  },
  {
    id: "quickbites",
    label: "Traditional Quick Bites",
    emoji: "🫓",
    items: [
      {
        id: "qb1",
        name: "Bread Pakora",
        description: "Thick bread slices dipped in spiced gram flour batter and deep-fried until golden.",
        price: 15,
        veg: true,
        popular: true,
        // Deep fried battered snack / pakora
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
      },
      {
        id: "qb2",
        name: "Chole Bhature",
        description: "Tangy spiced chickpea curry served with fluffy, puffed deep-fried bread.",
        price: 60,
        veg: true,
        popular: true,
        // Chole bhature — chickpea curry with puffed bread
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
      },
      {
        id: "qb3",
        name: "Chole Poori",
        description: "Hearty chickpea curry paired with crispy golden poori bread — a classic combo.",
        price: 60,
        veg: true,
        // Poori bread puffed up
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    emoji: "☕",
    items: [
      {
        id: "bv1",
        name: "Tea / Chai",
        description: "Hot, freshly brewed tea — choose from cutting chai or a full cup.",
        priceHalf: 10,
        priceFull: 15,
        veg: true,
        popular: true,
        // Masala chai in glass / kulhad
        image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&q=80",
      },
      {
        id: "bv2",
        name: "Coffee",
        description: "Rich, aromatic hot coffee brewed fresh to order.",
        price: 30,
        veg: true,
        // Hot coffee cup
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
      },
    ],
  },
];
