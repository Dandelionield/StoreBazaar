import { Injectable } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Cart } from '@models/cart.model';

@Injectable({

	providedIn: 'root'

}) export class PaymentController{

	private readonly fb = new FormBuilder();

	public constructor(){}

	public createPaymentForm(){

		return this.fb.group({

			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			cardNumber: ['', [Validators.required, this.cardValidator()]],
			cvc: ['', [Validators.required, this.cvcValidator()]],
			expiry: ['', [Validators.required, this.expiryValidator()]]

		});/**/

	}

	public generateInvoice(cart: Cart, formData: any){

		return {

			...formData,
			cart,
			date: new Date().toISOString(),
			invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
			paymentMethod: `Tarjeta **** ${formData.cardNumber.slice(-4)}`

		};
	}

	private cardValidator(): ValidatorFn{

		return (control: AbstractControl) => {

			const value = control.value?.replace(/\s/g, '');
			return /^\d{16}$/.test(value) ? null : { invalidCard: true };

		};

	}

	private cvcValidator(): ValidatorFn {

		return (control: AbstractControl) => {

			return /^\d{3}$/.test(control.value) ? null : { invalidCvc: true };

		};

	}

	private expiryValidator(): ValidatorFn {

		return (control: AbstractControl) => {

			const [month, year] = control.value?.split('/') || [];
			
			return (parseInt(month) > 0 && parseInt(month) <= 12 && /^\d{2}$/.test(year) ? null : { invalidExpiry: true });

		};

	}/**/

}
