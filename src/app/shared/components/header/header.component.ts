import { IonHeader, IonToolbar, IonButton, IonTitle, IonIcon } from '@ionic/angular';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CartService } from '@services/cart/cart.service';
import { Location } from '@angular/common';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Subscription } from 'rxjs';

@Component({

	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: false

}) export class HeaderComponent implements OnInit {

	@Input() public title: string = '';
	@Input() public showBackButton: boolean = true;
	public cartItemCount;
	private cartSubscription!: Subscription;

	public constructor(private location: Location, private cart: CartService){

		this.cartItemCount = 0;

	}

	public ngOnInit(): void{

		this.cartSubscription = this.cart.getTotalItems$().subscribe({

            next: (count) =>{

                this.cartItemCount = count;

            }, error: (e) => console.error('Error en el contador:', e)

        });

	}

	public ngOnDestroy(): void{

		if (this.cartSubscription){

            this.cartSubscription.unsubscribe();

        }

	}

	public goBack(): void{

		this.location.back();

	}

}
