import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receipt } from '@models/receipt.model';

@Component({

	selector: 'app-receipt',
	templateUrl: './receipt.page.html',
	styleUrls: ['./receipt.page.scss'],
	standalone: false

}) export class ReceiptPage implements OnInit {

	public receipt: Receipt;

	public constructor(private router: Router){

		const navigation = this.router.getCurrentNavigation();
		this.receipt = navigation?.extras.state?.['receipt'];

	}

	public ngOnInit(): void{}

	public get maskedCard(): string{

		return `**** ${this.receipt.user.card.digits.slice(-4)}`;

	}

	public get formattedDate(): string{

		return new Date().toLocaleDateString('es-CO', {

			day: '2-digit',
			month: 'long',
			year: 'numeric'

		});

	}

	public printReceipt(): void{

		window.print();

	}

}
