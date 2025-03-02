import { Component, OnInit } from '@angular/core';
import { Product, ElementNotFound } from '@models/product.model';
import { ApiService } from '@shared/services/api.service';

@Component({

	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: false,

}) export class HomePage implements OnInit{

	public products: Array<Product> = [];

	constructor(private api: ApiService) {}

	ngOnInit(): void{

		this.loadProducts();

	}

	private async loadProducts(){

		await this.api.getAllProducts().subscribe({

			next: (products) => {

				this.products = products;

			}, error: (e) => {

				console.error('Error loading products', e);

				this.products = [ElementNotFound];

			}

		});

	}

}
