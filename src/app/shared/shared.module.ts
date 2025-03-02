import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from '@components/product-card/product-card.component';
import { HeaderComponent } from '@components/header/header.component';

import { ApiService } from '@shared/services/api.service';

@NgModule({

	declarations: [

		ProductCardComponent,
		HeaderComponent

	], imports: [

		CommonModule,
		IonicModule.forRoot(),
		FormsModule,
		HttpClientModule

	], exports: [

		ProductCardComponent,
		HeaderComponent,
		CommonModule,
		IonicModule,
		FormsModule,
		HttpClientModule

	], providers: [

		ApiService

	]

}) export class SharedModule {}
