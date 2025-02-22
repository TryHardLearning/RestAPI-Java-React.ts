
export interface IUserSignup {
    displayName: string;
    username: string;
    password: string;
}

export interface IUserLogin {
    id?: number;
    username: string;
    password: string;
}

export interface ICategory {
    id?: number;
    name: string;
}

export interface IProduct {
    id?: number;
    name: string;
    description: string;
    price: number;
    category: ICategory;
}
export interface IShoppingBag{
    id?: number;
    items: IItemShoppingBag[];
    user: IUserLogin;
}
export interface IItemShoppingBag{
    product: IProduct;
    quantity: number;
    cost: number;
    shppingBag: IShoppingBag;
}