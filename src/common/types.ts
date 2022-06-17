export interface ItemCart {
  id: number;
  itemPropertyId: string;
  count: number;
  imageUrl: string;
  title: string;
  price: number;
  size: number;
}

export interface IDataCart {
  dataCart: Array<ItemCart>;
  totalPizzas: number;
  totalPrice: number;
}

export interface Ipizza {
  id: number;
  imageUrl: string;
  title: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
}

export interface IPizzaState {
  data: Array<Ipizza>;
  activeCategory: number;
  sort: ISort;
  loading: boolean;
}

export interface ISort {
  name: string;
  sortProperty: string;
}
