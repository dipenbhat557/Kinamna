export const mockData = {
  brands: [
    { id: 1, name: "Nike", logoUrl: "/brands/nike.png" },
    { id: 2, name: "Adidas", logoUrl: "/brands/adidas.png" },
    { id: 3, name: "Puma", logoUrl: "/brands/puma.png" },
  ],

  categories: [
    { id: 1, name: "Shoes", imageUrl: "/categories/shoes.png" },
    { id: 2, name: "Clothing", imageUrl: "/categories/clothing.png" },
    { id: 3, name: "Accessories", imageUrl: "/categories/accessories.png" },
  ],

  stores: [
    { id: 1, name: "Main Store", contact: "123-456-7890" },
    { id: 2, name: "Downtown Branch", contact: "098-765-4321" },
    { id: 3, name: "Mall Outlet", contact: "555-555-5555" },
  ],

  productOptionGroups: [
    {
      id: 1,
      name: "Size",
      options: [
        { id: 1, name: "Small" },
        { id: 2, name: "Medium" },
        { id: 3, name: "Large" },
      ],
    },
    {
      id: 2,
      name: "Color",
      options: [
        { id: 4, name: "Red" },
        { id: 5, name: "Blue" },
        { id: 6, name: "Black" },
      ],
    },
  ],
};

export const mockProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    image:
      "https://imgs.search.brave.com/AZIzdfT3HLsdsxJi5LRUo-pd7W2vYaWymrpUk5EDC_k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9idXNh/bi1zb3V0aC1rb3Jl/YS1jaXJjYS1tYXkt/Y2xvc2UtdXAtc2hv/dC1uaWtlLXNpZ24t/bmlrZS0xMDkwNjAz/MzAuanBn",
    sku: "NK-AM270-001",
    category: "Shoes",
    brand: "Nike",
    price: 149.99,
    stock: 45,
    variants: 3,
    status: "In Stock",
  },

  {
    id: 2,
    name: "Nike Air Max 270",
    image:
      "https://imgs.search.brave.com/AZIzdfT3HLsdsxJi5LRUo-pd7W2vYaWymrpUk5EDC_k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9idXNh/bi1zb3V0aC1rb3Jl/YS1jaXJjYS1tYXkt/Y2xvc2UtdXAtc2hv/dC1uaWtlLXNpZ24t/bmlrZS0xMDkwNjAz/MzAuanBn",
    sku: "NK-AM270-001",
    category: "Shoes",
    brand: "Nike",
    price: 149.99,
    stock: 45,
    variants: 3,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    image:
      "https://imgs.search.brave.com/AZIzdfT3HLsdsxJi5LRUo-pd7W2vYaWymrpUk5EDC_k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9idXNh/bi1zb3V0aC1rb3Jl/YS1jaXJjYS1tYXkt/Y2xvc2UtdXAtc2hv/dC1uaWtlLXNpZ24t/bmlrZS0xMDkwNjAz/MzAuanBn",
    sku: "NK-AM270-001",
    category: "Shoes",
    brand: "Nike",
    price: 149.99,
    stock: 45,
    variants: 3,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Nike Air Max 270",
    image:
      "https://imgs.search.brave.com/AZIzdfT3HLsdsxJi5LRUo-pd7W2vYaWymrpUk5EDC_k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9idXNh/bi1zb3V0aC1rb3Jl/YS1jaXJjYS1tYXkt/Y2xvc2UtdXAtc2hv/dC1uaWtlLXNpZ24t/bmlrZS0xMDkwNjAz/MzAuanBn",
    sku: "NK-AM270-001",
    category: "Shoes",
    brand: "Nike",
    price: 149.99,
    stock: 45,
    variants: 3,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Nike Air Max 270",
    image:
      "https://imgs.search.brave.com/AZIzdfT3HLsdsxJi5LRUo-pd7W2vYaWymrpUk5EDC_k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9idXNh/bi1zb3V0aC1rb3Jl/YS1jaXJjYS1tYXkt/Y2xvc2UtdXAtc2hv/dC1uaWtlLXNpZ24t/bmlrZS0xMDkwNjAz/MzAuanBn",
    sku: "NK-AM270-001",
    category: "Shoes",
    brand: "Nike",
    price: 149.99,
    stock: 45,
    variants: 3,
    status: "In Stock",
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    image:
      "https://imgs.search.brave.com/AZIzdfT3HLsdsxJi5LRUo-pd7W2vYaWymrpUk5EDC_k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9idXNh/bi1zb3V0aC1rb3Jl/YS1jaXJjYS1tYXkt/Y2xvc2UtdXAtc2hv/dC1uaWtlLXNpZ24t/bmlrZS0xMDkwNjAz/MzAuanBn",
    sku: "NK-AM270-001",
    category: "Shoes",
    brand: "Nike",
    price: 149.99,
    stock: 45,
    variants: 3,
    status: "In Stock",
  },

  // Add more mock products...
];
