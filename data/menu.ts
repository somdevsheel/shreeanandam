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
        image: "/images/menu/steamed momos.jpg",
      },
      {
        id: "mo2",
        name: "Fried Momos",
        description: "Crispy golden fried dumplings with a crunchy outer shell and juicy vegetable filling.",
        priceHalf: 50,
        priceFull: 90,
        veg: true,
        popular: true,
        image: "/images/menu/fried momos.jpg",
      },
      {
        id: "mo3",
        name: "Chilli Momos",
        description: "Fiery stir-fried momos tossed in a bold chilli sauce with peppers and onions.",
        priceHalf: 60,
        priceFull: 100,
        veg: true,
        popular: true,
        image: "/images/menu/chilli momos.jpg",
      },
      {
        id: "mo4",
        name: "Tandoori Momos",
        description: "Marinated momos grilled in a tandoor for a smoky char and rich flavour.",
        priceHalf: 60,
        priceFull: 100,
        veg: true,
        image: "/images/menu/Tandoori Momos.jpg",
      },
      {
        id: "mo5",
        name: "Kurkure Momos",
        description: "Extra-crunchy momos coated in a crispy batter layer, served with spicy dip.",
        priceHalf: 70,
        priceFull: 120,
        veg: true,
        image: "/images/menu/kurkure momos.jpg",
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
        image: "/images/menu/Veg Cream Burger.jpg",
      },
      {
        id: "bu2",
        name: "Paneer Burger",
        description: "Juicy grilled paneer patty in a toasted bun with mint chutney and fresh onions.",
        price: 50,
        veg: true,
        popular: true,
        image: "/images/menu/paneer burger.jpg",
      },
      {
        id: "bu3",
        name: "Paneer Burger Special",
        description: "Loaded special version with double paneer, extra toppings, and house special sauce.",
        price: 60,
        veg: true,
        image: "/images/menu/paneer burger.jpg",
      },
      {
        id: "bu4",
        name: "Cheese Burger",
        description: "Classic burger with a generous slice of melted cheese, crisp lettuce, and tangy ketchup.",
        price: 70,
        veg: true,
        popular: true,
        image: "/images/menu/Cheese Burger.jpg",
      },
      {
        id: "bu5",
        name: "Spring Roll",
        description: "Crispy golden rolls stuffed with stir-fried vegetables and glass noodles.",
        priceHalf: 40,
        priceFull: 70,
        veg: true,
        image: "/images/menu/Spring Roll.jpg",
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
        image: "/images/menu/Veg Chowmein.jpg",
      },
      {
        id: "ch2",
        name: "Veg Fried Rice",
        description: "Wok-tossed basmati rice with mixed vegetables, soy sauce, and aromatic spices.",
        priceHalf: 40,
        priceFull: 70,
        veg: true,
        image: "/images/menu/Fried Rice.jpg",
      },
      {
        id: "ch3",
        name: "Paneer Chowmein",
        description: "Classic chowmein elevated with soft cubes of paneer in a spicy, tangy sauce.",
        priceHalf: 50,
        priceFull: 90,
        veg: true,
        popular: true,
        image: "/images/menu/Paneer Chowmein.jpg",
      },
      {
        id: "ch4",
        name: "Hakka Noodles",
        description: "Traditional Hakka-style noodles tossed with crisp veggies and bold Indo-Chinese seasoning.",
        priceHalf: 70,
        priceFull: 120,
        veg: true,
        image: "/images/menu/Hakka Noodles.jpg",
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
        image: "/images/menu/Bread Pakora.jpg",
      },
      {
        id: "qb2",
        name: "Chole Bhature",
        description: "Tangy spiced chickpea curry served with fluffy, puffed deep-fried bread.",
        price: 60,
        veg: true,
        popular: true,
        image: "/images/menu/Chhole Bhature.jpg",
      },
      {
        id: "qb3",
        name: "Chole Poori",
        description: "Hearty chickpea curry paired with crispy golden poori bread — a classic combo.",
        price: 60,
        veg: true,
        image: "/images/menu/Chole Puri.jpg",
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
        image: "/images/menu/Chai.jpg",
      },
      {
        id: "bv2",
        name: "Coffee",
        description: "Rich, aromatic hot coffee brewed fresh to order.",
        price: 30,
        veg: true,
        image: "/images/menu/Coffee.jpg",
      },
    ],
  },
];
