import { Component } from '@angular/core';
import { LoadingService } from '@services/loading/loading.service';

@Component({

	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	standalone: false

}) export class AppComponent{

	public constructor(private load: LoadingService){

		/*if (!localStorage.getItem('appInitialized')){

			localStorage.setItem('appInitialized', 'true');

			this.load.showLoading({

				duration: 3000,
				redirectTo: '/home'

			});

		}*/

	}

}
