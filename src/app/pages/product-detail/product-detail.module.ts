import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductDetailPageRoutingModule } from './product-detail-routing.module';
import { ProductDetailPage } from './product-detail.page';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [

		SharedModule,
		ProductDetailPageRoutingModule,
		RouterModule.forChild([{ path: '', component: ProductDetailPage }])

	], declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
