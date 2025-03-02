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

	public constructor(private api: ApiService, public filter: FilterService) {}

	public async ngOnInit(): Promise<void>{

		this.loadCategories();
		this.loadProducts(this.filter.selectedCategory.value);

	}

	private async loadProducts(category: string): Promise<void>{

		this.api.sortBy = this.filter.sortBy;

		if (category!='all'){

			this.loadFilteredProducts(category);

		}else{

			this.loadNonFilteredProducts();

		}

	}

	private async loadFilteredProducts(category: string): Promise<void>{

		await this.api.getProductsByCategory(category).subscribe({

			next: (products) => {

				this.products = products;
				console.log(this.products);

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

		this.filter.updateSortOrder();
		this.loadProducts(this.filter.selectedCategory.value);

	}

	public onCategoryChange(event: Event): void {

		const select = event.target as HTMLSelectElement;
		this.filter.updateCategory(select.value);

		console.log(this.filter.selectedCategory.value);
		this.loadProducts(this.filter.selectedCategory.value);

	}

}
