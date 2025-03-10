import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Product, ElementNotFound } from '@models/product.model';
import { environment } from '@environments/environment';
import { FilterService } from '@services/filter/filter.service';

@Injectable({

	providedIn: 'root'

}) export class ApiService{

	public sortBy: boolean = true;

	public constructor(private http: HttpClient, public filter: FilterService) {}

	public getAllProducts(): Observable<Array<Product>>{

		return this.http.get<Array<Product>>(`${environment.baseUrl}${environment.endpoints.products}`, {

			params: {

				sort: this.filter.getSortOrder() ? "asc" : "desc"

			}

		}).pipe(

			catchError(() => of([ElementNotFound]))

		);

	}

	public getProductByID(id: number): Observable<Product>{

		return this.http.get<Product>(`${environment.baseUrl}${environment.endpoints.products}/${id}`).pipe(

			catchError(() => of(ElementNotFound))

		);

	}

	public getCategories(): Observable<Array<string>>{

		return this.http.get<Array<string>>(`${environment.baseUrl}${environment.endpoints.categories}`).pipe(

			catchError(() => of([]))

		);

	}

	public getProductsByCategory(category: string = this.filter.getSelectedCategory()): Observable<Array<Product>>{

		return this.http.get<Array<Product>>(`${environment.baseUrl}${environment.endpoints.category}/${category}`, {

			params: {

				sort: this.filter.getSortOrder() ? "asc" : "desc"

			}

		}).pipe(

			catchError(() => of([ElementNotFound]))

		);

	}

}
