export interface ProductProps {
  id: number;
  title: string;
  price: number;
  desc?: string;
  Img: string;
  hoverImg: string;
  smallImgs: string[];
  category: string;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


export type CartItem = ProductProps & {
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};