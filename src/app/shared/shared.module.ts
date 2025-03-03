import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from '@components/product-card/product-card.component';
import { HeaderComponent } from '@components/header/header.component';

import { ApiService } from '@services/api/api.service';
import { FilterService } from '@services/filter/filter.service';
import { CartService } from '@services/cart/cart.service';

@NgModule({

	declarations: [

		ProductCardComponent,
		HeaderComponent

	], imports: [

		CommonModule,
		IonicModule.forRoot(),
		FormsModule,
		RouterModule,
		HttpClientModule

	], exports: [

		ProductCardComponent,
		HeaderComponent,
		CommonModule,
		IonicModule,
		FormsModule,
		RouterModule,
		HttpClientModule

	], providers: [

		ApiService,
		FilterService,
		CartService

	]

}) export class SharedModule {}
