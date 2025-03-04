import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductCardComponent } from '@components/product-card/product-card.component';
import { HeaderComponent } from '@components/header/header.component';
import { ItemComponent } from '@components/item/item.component';

import { ApiService } from '@services/api/api.service';
import { FilterService } from '@services/filter/filter.service';
import { CartService } from '@services/cart/cart.service';
import { LoadingService } from '@services/loading/loading.service';

import { PaymentController } from '@controllers/payment/payment.controller';

@NgModule({

	declarations: [

		ProductCardComponent,
		HeaderComponent,
		ItemComponent

	], imports: [

		CommonModule,
		IonicModule.forRoot(),
		FormsModule,
		RouterModule,
		HttpClientModule,
		ReactiveFormsModule

	], exports: [

		ProductCardComponent,
		HeaderComponent,
		ItemComponent,
		CommonModule,
		IonicModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
		ReactiveFormsModule

	], providers: [

		ApiService,
		FilterService,
		CartService,
		LoadingService,
		PaymentController

	]

}) export class SharedModule {}
