import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '@services/loading/loading.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({

	selector: 'app-loading',
	templateUrl: './loading.page.html',
	styleUrls: ['./loading.page.scss'],
	standalone: false

})
export class LoadingPage implements OnInit, OnDestroy {

	private subscription!: Subscription;

	public constructor(private load: LoadingService, private router: Router) {}

	public async ngOnInit(): Promise<void>{

		this.load.showLoading({

			duration: 3000,
			redirectTo: '/home'

		});

		await new Promise(resolve => setTimeout(resolve, 3000));

		this.subscription = this.load.getLoadingConfig().subscribe(config => {

			if (config.show && config.redirectTo){

				this.router.navigate([config.redirectTo],{

					state: config.state || {}

				});

			}

		});

	}

	public ngOnDestroy(): void{

		if (this.subscription){

			this.subscription.unsubscribe();

		}

	}

}
