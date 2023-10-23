import { toast } from "react-toastify";

export const setCart = (cart: any) => {
  localStorage.setItem("Cart", JSON.stringify(cart));
};
export const removeCart = () => {
  localStorage.removeItem("Cart");
};
export const getCart = () => {
  const storageCart = localStorage.getItem("Cart");
  if (storageCart) return JSON.parse(storageCart);
  return null;
};
export const addToCart = (product: any) => {
  const cart = getCart();
  if (cart) {
    const existingItem = cart.find((x: any) => x.product.id == product.id);
    if (!existingItem) {
      cart.push({
        product,
        quantity: 1,
      });
    } else {
      existingItem.quantity = existingItem.quantity + 1;
    }
    setCart(cart);
  } else {
    const newCart = [
      {
        product,
        quantity: 1,
      },
    ];
    setCart(newCart);
  }
  toast.success(`Thêm thành công ${product.name} vào giỏ hàng`);
};

export const decreaseCart = (product: any) => {
  const cart = getCart();
  const existingItem = cart.find((x: any) => x.product.id == product.id);
  if (!existingItem) return;
  existingItem.quantity = existingItem.quantity - 1;

  setCart(cart);
  if (existingItem.quantity == 0) {
    removeCartItem(product);
  }
};

export const removeCartItem = (product: any) => {
  const cart = getCart();
  const newCart = cart.filter((x: any) => x.product.id != product.id);
  setCart(newCart);
};
