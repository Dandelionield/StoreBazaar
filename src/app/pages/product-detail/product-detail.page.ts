import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ElementNotFound } from '@models/product.model';
import { ApiService } from '@services/api/api.service';
import { CartService } from '@services/cart/cart.service';
import { ToastController } from '@ionic/angular';

@Component({

	selector: 'app-product-detail',
	templateUrl: './product-detail.page.html',
	styleUrls: ['./product-detail.page.scss'],
	standalone: false

}) export class ProductDetailPage implements OnInit {

	public product: Product = ElementNotFound;
	public relatedProducts: Array<Product> = [];

	public constructor(

		private route: ActivatedRoute,
		private api: ApiService,
		private cart: CartService,
		private toastCtrl: ToastController

	){}

	public ngOnInit(): void{

		this.loadProduct();

	}

	private async loadProduct(): Promise<void>{

		const id = this.route.snapshot.paramMap.get('id');

		if (id){

			await this.api.getProductByID(+id).subscribe({

				next: (product) => {

					this.product = product;
					this.loadRelatedProducts(product.category, product.id);

				}, error: (e) => {

					console.error('Error loading products', e);

					this.product = ElementNotFound;

				}

			});

		}

	}

	private async loadRelatedProducts(category: string, id: number): Promise<void>{

		await this.api.getProductsByCategory(category).subscribe({

			next: (products) => {

				this.relatedProducts = products.filter(p => p.id !== id);

			}, error: () => this.relatedProducts = []

		});

	}

	async addToCart(): Promise<void>{

		this.cart.addToCart(this.product);
		
		const toast = await this.toastCtrl.create({

			message: '✅ Producto agregado al carrito',
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
