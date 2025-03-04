import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '@services/cart/cart.service';
import { CartItem } from '@models/cart.model';
import { Router } from '@angular/router';
import { instanceCart } from '@models/cart.model';
import { ToastController } from '@ionic/angular';

@Component({

	selector: 'app-cart-detail',
	templateUrl: './cart-detail.page.html',
	styleUrls: ['./cart-detail.page.scss'],
	standalone: false

}) export class CartDetailPage implements OnInit, OnDestroy {

	public constructor(public cart: CartService, private router: Router, private toastCtrl: ToastController){}

	public ngOnInit(): void{

		this.cart.loadCartFromStorage();

	}

	public ngOnDestroy(): void{

		this.cart.loadCartFromStorage();

	}

	public async checkout(): Promise<void>{

		const toast = await this.toastCtrl.create({

			message: '✅ Procesando pago',
			duration: 2000,
			position: 'top',
			color: 'success',
			cssClass: 'custom-toast',
			buttons: [{

				icon: 'close',
				role: 'cancel'

			}]

		});
		
		await toast.present();

		await new Promise(resolve => setTimeout(resolve, 2000));

		this.router.navigate(['/payment'], {

			state: {

				cart: instanceCart(this.cart.getCartItems())

			}

		});

		this.cart.clearCart();

	}

}
