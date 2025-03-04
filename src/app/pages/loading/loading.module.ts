import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LoadingPageRoutingModule } from './loading-routing.module';
import { LoadingPage } from './loading.page';
import { RouterModule } from '@angular/router';

@NgModule({

	imports: [

		SharedModule,
		LoadingPageRoutingModule,
		RouterModule.forChild([{ path: '', component: LoadingPage }])

	], declarations: [LoadingPage]

}) export class LoadingPageModule {}
