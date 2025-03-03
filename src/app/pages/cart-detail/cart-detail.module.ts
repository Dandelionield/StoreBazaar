import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CartDetailPageRoutingModule } from './cart-detail-routing.module';
import { CartDetailPage } from './cart-detail.page';
import { RouterModule } from '@angular/router';

@NgModule({

	imports: [

		SharedModule,
		CartDetailPageRoutingModule,
		RouterModule.forChild([{ path: '', component: CartDetailPage }])

	], declarations: [CartDetailPage]

}) export class CartDetailPageModule {}
