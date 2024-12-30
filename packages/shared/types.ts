export interface Restaurant {
    id: string;
    name: string;
    category: string;
    rating: number;
  }
  
  export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  
  export interface CartItem extends MenuItem {
    quantity: number;
  }
  
  