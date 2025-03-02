import { IonHeader, IonToolbar, IonButton, IonTitle, IonIcon } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({

	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: false

}) export class HeaderComponent implements OnInit {

	@Input() title: string = '';
	@Input() showBackButton: boolean = true;

	constructor(private location: Location) {}

	ngOnInit() {}

	public goBack(){

		this.location.back();

	}

}
