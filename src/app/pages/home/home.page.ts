import { Component, OnInit } from '@angular/core';
import { Product, ElementNotFound } from '@models/product.model';
import { ApiService } from '@services/api/api.service';
import { FilterService } from '@services/filter/filter.service';

@Component({

	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: false,

}) export class HomePage implements OnInit{

	public products: Array<Product> = [];
	public categories: Array<string> = [];

	public constructor(private api: ApiService) {}

	public getFilter(): FilterService{

		return this.api.filter;

	}

	public async ngOnInit(): Promise<void>{

		this.loadCategories();
		this.loadProducts();

	}

	private async loadProducts(): Promise<void>{

		if (this.api.filter.getSelectedCategory()!='all'){

			this.loadFilteredProducts();

		}else{

			this.loadNonFilteredProducts();

		}

	}

	private async loadFilteredProducts(): Promise<void>{

		await this.api.getProductsByCategory().subscribe({

			next: (products) => {

				this.products = products;

			}, error: (e) => {

				console.error('Error loading products', e);

				this.products = [ElementNotFound];

			}

		});

	}

	private async loadNonFilteredProducts(): Promise<void>{

		await this.api.getAllProducts().subscribe({

			next: (products) => {

				this.products = products;

			}, error: (e) => {

				console.error('Error loading products', e);

				this.products = [ElementNotFound];

			}

		});

	}

	private async loadCategories(): Promise<void>{

		await this.api.getCategories().subscribe({

			next: (categories) => {

				this.categories = categories;
	
			}, error: (e) => console.error('Error loading categories', e)

		});

	}

	public toggleSort(): void {

		this.api.filter.updateSortOrder();
		this.loadProducts();

	}

	public onCategoryChange(event: Event): void {

		const select = event.target as HTMLSelectElement;
		this.api.filter.updateCategory(select.value);

		this.loadProducts();

	}

}
