
import { Product, ElementNotFound } from './product.model';

export const CartItemElementNotFound: CartItem = {

	product: ElementNotFound,
	quantity: 0

}

export interface CartItem{

	product: Product;
	quantity: number;

}