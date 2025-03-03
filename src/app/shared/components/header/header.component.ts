import { IonHeader, IonToolbar, IonButton, IonTitle, IonIcon } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '@services/cart/cart.service';
import { Location } from '@angular/common';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({

	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: false

}) export class HeaderComponent implements OnInit {

	@Input() public title: string = '';
	@Input() public showBackButton: boolean = true;
	public cartItemCount = this.cart.getTotalItems();

	public constructor(private location: Location, private cart: CartService) {}

	public ngOnInit(): void {}

	public goBack(): void{

		this.location.back();

	}

}
