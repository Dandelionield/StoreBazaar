import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({

	providedIn: 'root'

}) export class LoadingService{

	private loadingSubject = new BehaviorSubject<{

		show: boolean; 
		redirectTo?: string; 
		state?: any;

	}>({ show: false });

	public constructor(){}

	public showLoading(config: {

		duration: number; 
		redirectTo: string; 
		state?: any;

	}): void{

		this.loadingSubject.next({

			show: true,
			redirectTo: config.redirectTo,
			state: config.state

		});
		
	}

	public getLoadingConfig(){

		return this.loadingSubject.asObservable();

	}

}
