import { Component, OnInit, Input } from '@angular/core';
import { Product, ElementNotFound } from '@models/product.model';

@Component({

	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	standalone: false

})
export class ProductCardComponent implements OnInit {

	@Input() public product: Product = ElementNotFound;

	public constructor() {}

	public ngOnInit(): void {}

}
