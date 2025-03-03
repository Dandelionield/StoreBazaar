import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ReceiptPageRoutingModule } from './receipt-routing.module';
import { ReceiptPage } from './receipt.page';
import { RouterModule } from '@angular/router';

@NgModule({

	imports: [

		SharedModule,
		ReceiptPageRoutingModule,
		RouterModule.forChild([{ path: '', component: ReceiptPage }])

	], declarations: [ReceiptPage]

}) export class ReceiptPageModule {}
