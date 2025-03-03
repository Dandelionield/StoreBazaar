import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentController } from '@controllers/payment/payment.controller';
import { Cart } from '@models/cart.model';
import { User } from '@models/user.model';
import { Receipt } from '@models/receipt.model';

@Component({

	selector: 'app-payment',
	templateUrl: './payment.page.html',
	styleUrls: ['./payment.page.scss'],
	standalone: false

}) export class PaymentPage implements OnInit {

	public cart: Cart;
	public paymentForm = this.paymentController.createPaymentForm();

	public constructor(private router: Router, private paymentController: PaymentController){

		const navigation = this.router.getCurrentNavigation();
		this.cart = navigation?.extras.state?.['cart'];

	}

	public ngOnInit(): void{}

	public handleSubmit(): void{

		if (this.paymentForm.valid && this.cart){

			this.router.navigate(['/receipt'], {

				state: {

					receipt: {

						cart: this.cart,
						user: {

							...this.paymentForm.value,

							card: {

								digits: this.paymentForm.value.cardNumber,
								cvc: this.paymentForm.value.cvc,
								expire: new Date()

							}

						}

					}

				}

			});

		}

	}

	public getValidationMessage(controlName: string): string{

		const control = this.paymentForm.get(controlName);
		if (!control?.errors) return '';
		
		const errorKey = Object.keys(control.errors)[0];
		return this.getErrorMessages()[errorKey] || '';

	}

	private getErrorMessages(): { [key: string]: string } {

		return {

			required: 'Campo obligatorio',
			invalidCard: 'Tarjeta inválida (16 dígitos)',
			invalidCvc: 'CVC debe tener 3 dígitos',
			invalidExpiry: 'Formato MM/AA'

		};

	}

}
