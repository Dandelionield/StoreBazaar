import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

	{

		path: 'loading',
		loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)

	},{

		path: '',
		redirectTo: 'loading',
		pathMatch: 'full'

	},{

		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)

	},{

		path: 'product/:id',
		loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)

	},{

		path: 'cart',
		loadChildren: () => import('./pages/cart-detail/cart-detail.module').then( m => m.CartDetailPageModule)

	},{

		path: 'payment',
		loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)

	},{

		path: 'receipt',
		loadChildren: () => import('./pages/receipt/receipt.module').then( m => m.ReceiptPageModule)

	},



];

@NgModule({

	imports: [

		RouterModule.forRoot(routes, {

			preloadingStrategy: PreloadAllModules

		})

	],
	exports: [RouterModule]

}) export class AppRoutingModule {}
