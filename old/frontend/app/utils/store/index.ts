import { atom, selector } from 'recoil';

export const cartState = atom<CartData[]>({
  key: 'cartState',
  default: [],
});

export const addedState = atom<boolean>({
  key: 'addedState',
  default: false,
});

export const categoryState = atom<string[]>({
  key: 'categoryState',
  default: [],
});

export const userIdState = atom({
  key: 'userIdState',
  default: null
})

export const productState = atom<ProductData[]>({
  key: 'productState',
  default: [],
});

export interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface CartData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
}
