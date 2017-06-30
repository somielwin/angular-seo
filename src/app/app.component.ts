import { Component, ElementRef } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'First Project';
	
	toggleTitle(){
		$('.input-wrap').toggleClass('sample'); //
	}


	hero: Hero = {
		id: 1,
		name: 'Windstorm',
		location : ''
	};

	heroes = HEROES;
	selectedHero: Hero;


	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

}

export class Hero {
	id: number;
	name: string;
	location: string;
	
}


const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice', location : 'loc1' },
	{ id: 12, name: 'Narco', location : 'loc2' },
	{ id: 13, name: 'Bombasto', location : 'loc3' },
	{ id: 14, name: 'Celeritas', location : 'loc4' },
	{ id: 15, name: 'Magneta', location : 'loc5' },
	{ id: 16, name: 'RubberMan', location : 'loc6' },
	{ id: 17, name: 'Dynama', location : 'loc7' },
	{ id: 18, name: 'Dr IQ', location : 'loc8' },
	{ id: 19, name: 'Magma', location : 'loc9' },
	{ id: 20, name: 'Tornado', location : 'loc10' }
];





