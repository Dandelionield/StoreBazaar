import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { CartItem } from '@models/cart.model';

@Injectable({

	providedIn: 'root'

}) export class CartService{

	private readonly STORAGE_KEY = 'cartItems';
	private items: Array<CartItem> = [];

	public constructor(){

		this.loadCartFromStorage();

	}

	public loadCartFromStorage(): void{

		const storedItems = localStorage.getItem(this.STORAGE_KEY);
		this.items = storedItems ? JSON.parse(storedItems) : [];

	}

	private saveCartToStorage(): void{

		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));

	}

	public addToCart(product: Product): void{

		const existingItem = this.items.find(item => item.product.id === product.id);
		
		if (existingItem){

			existingItem.quantity++;

		}else{

			this.items.push({

				product: product,
				quantity: 1

			});

		}
		
		this.saveCartToStorage();

	}

	public removeFromCart(id: number): void{

		this.items = this.items.filter(item => item.product.id !== id);

		this.saveCartToStorage();

	}

	public updateQuantity(id: number, newQuantity: number): void{

		const item = this.items.find(item => item.product.id === id);

		if (item){

			item.quantity = newQuantity > 0 ? newQuantity : 1;
			this.saveCartToStorage();

		}

	}

	public clearCart(): void{

		localStorage.removeItem(this.STORAGE_KEY);
		this.loadCartFromStorage();

	}

	public getCartItems(): Array<CartItem>{

		return [...this.items];

	}

	public getTotalItems(): number{

		return this.items.reduce((acc, item) => acc + item.quantity, 0);

	}

	public getTotalPrice(): number{

		return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

	}

}
