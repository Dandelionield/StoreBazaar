import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

	{

		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)

	},{

		path: '',
		redirectTo: 'home',
		pathMatch: 'full'

	},{

		path: 'product/:id',
		loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)

	},{

		path: 'cart',
		loadChildren: () => import('./pages/cart-detail/cart-detail.module').then( m => m.CartDetailPageModule)

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
