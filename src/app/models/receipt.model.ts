
import { User } from './user.model';
import { Cart } from './cart.model';

export interface Receipt{

	cart: Cart;
	user: User;

}