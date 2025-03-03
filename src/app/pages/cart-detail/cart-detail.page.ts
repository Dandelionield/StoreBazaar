import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '@services/cart/cart.service';
import { CartItem } from '@models/cart.model';

@Component({

	selector: 'app-cart-detail',
	templateUrl: './cart-detail.page.html',
	styleUrls: ['./cart-detail.page.scss'],
	standalone: false

}) export class CartDetailPage implements OnInit, OnDestroy {

	public constructor(public cart: CartService){}

	public ngOnInit(): void{

		this.cart.loadCartFromStorage();

	}

	public ngOnDestroy(): void{

		this.cart.loadCartFromStorage();

	}

	public updateQuantity(id: number, event: any): void{

		const quantity = Number(event.detail.value);
		this.cart.updateQuantity(id, quantity);

	}

	public removeItem(id: number): void{

		this.cart.removeFromCart(id);

	}

	public checkout(): void{

		this.cart.clearCart();

	}

}
