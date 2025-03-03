import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PaymentPageRoutingModule } from './payment-routing.module';
import { PaymentPage } from './payment.page';
import { RouterModule } from '@angular/router';

@NgModule({

	imports: [

		SharedModule,
		PaymentPageRoutingModule,
		RouterModule.forChild([{ path: '', component: PaymentPage }])

	], declarations: [PaymentPage]

})
export class PaymentPageModule {}
