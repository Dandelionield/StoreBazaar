import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({

	providedIn: 'root'

}) export class FilterService{

	public sortBy: boolean = true;
	public selectedCategory = new BehaviorSubject<string>('all');

	public constructor() {}

	public updateSortOrder(): void {

		this.sortBy = !this.sortBy;

	}

	public updateCategory(category: string): void {

		this.selectedCategory.next(category);

	}

}
