import { IItemShoppingBag, IProduct, IShoppingBag, IUserLogin } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const ShoppingBag_Url = "/shoppingbag";

const SHOPPING_BAG_KEY = "shoppingBag";

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(ShoppingBag_Url);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${ShoppingBag_Url}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const save = async (shoppingBag: IShoppingBag): Promise<any> => {
  let response;
  try {
    response = await api.post(ShoppingBag_Url, shoppingBag);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${ShoppingBag_Url}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

function addToShoppingBag(product: IProduct, quantity: number, user: IUserLogin): void {
    // Pegar shoppingBag do localStorage
    let shoppingBag: IShoppingBag = JSON.parse(localStorage.getItem(SHOPPING_BAG_KEY) || "null");

    // Se não existir, cria uma nova sacola
    if (!shoppingBag) {
        shoppingBag = {
            id: new Date().getTime(), // Simulando um ID único
            items: [],
            user: user
        };
    }

    // Verificar se o item já está no carrinho
    const existingItem = shoppingBag.items.find(item => item.product.id === product.id);

    if (existingItem) {
        // Se já existe, apenas aumentar a quantidade e o custo
        existingItem.quantity += quantity;
        existingItem.cost = existingItem.quantity * product.price;
    } else {
        // Se não existir, adicionar como um novo item
        const newItem: IItemShoppingBag = {
            product: product,
            quantity: quantity,
            cost: product.price * quantity,
            shppingBag: shoppingBag
        };
        shoppingBag.items.push(newItem);
    }

    // Atualizar o localStorage
    localStorage.setItem(SHOPPING_BAG_KEY, JSON.stringify(shoppingBag));

    console.log("Produto adicionado ao carrinho!", shoppingBag);
}

function getShoppingBag(): IShoppingBag | null {
    return JSON.parse(localStorage.getItem(SHOPPING_BAG_KEY) || "null");
}

const ShoppingBagService = {
  findAll,
  remove,
  save,
  findById,
  addToShoppingBag
};

export default ShoppingBagService;