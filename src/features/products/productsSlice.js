import { createSlice } from '@reduxjs/toolkit'

const mockProducts = [
  {
    id: 1,
    name: "Ray-Ban Original Wayfarer Classic",
    price: 154,
    originalPrice: 190,
    image: "/api/placeholder/300/200",
    category: "sunglasses",
    brand: "Ray-Ban",
    rating: 4.8,
    reviews: 2847,
  },
  {
    id: 2,
    name: "Oakley Holbrook Metal",
    price: 136,
    originalPrice: 170,
    image: "/api/placeholder/300/200",
    category: "sunglasses",
    brand: "Oakley",
    rating: 4.7,
    reviews: 1923,
  },
  // Add more products here
]

const initialState = {
  allProducts: mockProducts,
  featuredProducts: mockProducts.slice(0, 4),
  selectedCategory: 'all',
  isLoading: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
    setProducts: (state, action) => {
      state.allProducts = action.payload
    },
  },
})

export const { setSelectedCategory, setProducts } = productsSlice.actions
export default productsSlice.reducer
