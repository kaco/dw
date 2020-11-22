export interface WatchItem {
  id: number;
}

export interface ProductElement {
  type: string;
  value: string;
  name: string;
  language: any
}

export interface ProductDetail {
  childs: any;
  className: string;
  creationDate: number;
  elements: ProductElement[];
  id: number;
  key: string;
  modificationDate: number;
  parentId: number;
  path: string;
  properties: any;
  published: boolean;
  type: string;
  userModification: number;
  userOwner: number;
}

export interface ProductDetailsWrapper {
  data: ProductDetail;
  success: boolean;
}

export interface Product {
  id: number;
  type: string;
  published: boolean;
}

export interface ProductsWrapper {
  data: Product[];
  success: boolean;
  total: number;
}

export interface AssetsImageItem {
  assetsId: number;
  title: string;
  isLarge?: Boolean;
}

export interface MenuItem {
  title: string;
  link: string;
}
