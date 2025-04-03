import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

interface CartItem extends Product {
    quantity: number;
}

interface StoreState {
    cart: CartItem[];
    products: Product[];
    searchQuery: string;
    selectedCategory: string;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    setProducts: (products: Product[]) => void;
    setSearchQuery: (query: string) => void;
    setSelectedCategory: (category: string) => void;
  }

  export const useStore = create<StoreState>()(
    persist(
      (set) => ({
        cart: [],
        products: [],
        searchQuery: '',
        selectedCategory: '',
        addToCart: (product: Product) =>
          set((state: StoreState) => {
            const existingItem = state.cart.find((item) => item.id === product.id);
            if (existingItem) {
              return {
                cart: state.cart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
              };
            }
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }),
        removeFromCart: (productId: number) =>
          set((state: StoreState) => ({
            cart: state.cart.filter((item) => item.id !== productId),
          })),
        updateQuantity: (productId: number, quantity: number) =>
          set((state: StoreState) => ({
            cart: state.cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          })),
        setProducts: (products: Product[]) => set({ products }),
        setSearchQuery: (query: string) => set({ searchQuery: query }),
        setSelectedCategory: (category: string) => set({ selectedCategory: category }),
      }),
      {
        name: 'shop-storage',
      }
    )
  );
  
  export default useStore;