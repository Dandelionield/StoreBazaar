import { Component, OnInit, Input } from '@angular/core';
import { CartItem, CartItemElementNotFound } from '@models/cart.model';
import { CartService } from '@services/cart/cart.service';
import { ToastController } from '@ionic/angular';

@Component({

	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
	standalone: false

})
export class ItemComponent	implements OnInit {

	@Input() public item: CartItem = CartItemElementNotFound;

	public constructor(public cart: CartService, private toastCtrl: ToastController) {}

	public ngOnInit(): void {}

	public updateQuantity(id: number, event: any): void{

		const quantity = Number(event.detail.value);
		this.cart.updateQuantity(id, quantity);

	}

	public async removeItem(id: number): Promise<void>{

		this.cart.removeFromCart(id);

		const toast = await this.toastCtrl.create({

			message: '✅ Producto removido',
			duration: 1500,
			position: 'top',
			color: 'success',
			cssClass: 'custom-toast',
			buttons: [{

				icon: 'close',
				role: 'cancel'

			}]

		});
		
		await toast.present();

	}

}
