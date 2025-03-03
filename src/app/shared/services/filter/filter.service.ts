import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({

	providedIn: 'root'

}) export class FilterService{

	private sortOrder: boolean = true;
	private selectedCategory = new BehaviorSubject<string>('all');

	public constructor() {}

	public getSortOrder(): boolean{

		return this.sortOrder;

	}

	public getSelectedCategory(): string{

		return this.selectedCategory.value;

	}

	public updateSortOrder(): void{

		this.sortOrder = !this.sortOrder;

	}

	public updateCategory(category: string): void{

		this.selectedCategory.next(category);

	}

}
