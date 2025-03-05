import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

	selector: 'app-loading',
	templateUrl: './loading.page.html',
	styleUrls: ['./loading.page.scss'],
	standalone: false

})
export class LoadingPage implements OnInit {//, OnDestroy {

	private config: {

		duration: number;
		redirectTo: string;
		data?: any;

	};

	public constructor(private router: Router) {

		const navigation = this.router.getCurrentNavigation();
		this.config = navigation?.extras.state as any;

	}

	public async ngOnInit(): Promise<void>{

		const defaultConfig = {

			duration: 3000,
			redirectTo: '/home',
			data: {}

		};

		const finalConfig = this.config || defaultConfig;

		await new Promise(resolve => setTimeout(resolve, finalConfig.duration));

		this.router.navigate([finalConfig.redirectTo], {

			state: finalConfig.data

		});

	}

}
