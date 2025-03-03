
import { Product, ElementNotFound } from './product.model';

export const instanceCart = (Cartitems: Array<CartItem>): Cart => {

	return {

		items: Cartitems,
		total: Cartitems.reduce((total, item) => total + (item.product.price * item.quantity), 0)

	}

}

export const CartItemElementNotFound: CartItem = {

	product: ElementNotFound,
	quantity: 0

}

export interface Cart{

	items: Array<CartItem>;
	total: number;

}

export interface CartItem{

	product: Product;
	quantity: number;

}