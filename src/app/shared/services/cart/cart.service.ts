import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { CartItem } from '@models/cart.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({

	providedIn: 'root'

}) export class CartService{

	private readonly STORAGE_KEY = 'cartItems';
	private items: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>([]);

	public constructor(){

		this.loadCartFromStorage();

	}

	public loadCartFromStorage(): void{

		const storedItems = localStorage.getItem(this.STORAGE_KEY);
		this.items.next(storedItems ? JSON.parse(storedItems) : []);

	}

	private saveCartToStorage(): void{

		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items.value));

	}

	public addToCart(product: Product): void{

		const currentItems = [...this.items.value];
		const existingItem = currentItems.find(item => item.product.id === product.id);
		
		if (existingItem){

			existingItem.quantity++;

		}else{

			currentItems.push({

				product: product,
				quantity: 1

			});

			this.items.next(currentItems);

		}

		
		this.saveCartToStorage();

	}

	public removeFromCart(id: number): void{

		const currentItems = [...this.items.value];
		this.items.next(currentItems.filter(item => item.product.id !== id));

		if (currentItems.length!==0){

			this.saveCartToStorage();

		}else{

			this.clearCart();

		}

	}

	public updateQuantity(id: number, newQuantity: number): void{

		const currentItems = [...this.items.value];
		const item = currentItems.find(item => item.product.id === id);

		if (item){

			item.quantity = newQuantity > 0 ? newQuantity : 1;
			this.items.next(currentItems);
			this.saveCartToStorage();

		}

	}

	public clearCart(): void{

		localStorage.removeItem(this.STORAGE_KEY);
		this.loadCartFromStorage();

	}

	public getCartItems(): Array<CartItem>{

		return [...this.items.value];

	}

	public getTotalItems(): number{

		return this.items.value.reduce((acc, item) => acc + item.quantity, 0);

	}

	public getTotalItems$(): Observable<number>{

		return this.items.pipe(

			map(items => items.reduce((acc, item) => acc + item.quantity, 0))

		);

	}

	public getTotalPrice(): number{

		return this.items.value.reduce((total, item) => total + (item.product.price * item.quantity), 0);

	}

}
