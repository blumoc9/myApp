//body component
import { Component} from '@angular/core';

@Component({
	
	selector : 'app-body',
	templateUrl : `./body.component.html`

}) 

export class BodyComponent{
	
	mostrar:boolean = true;
	frase:any = {

		autor : 'Ben Parker',
		mensaje : 'Un gran poder requiere una gran responsabilidad'
	};

	comicsHeroes:string[] = ['Spiderman','Cap America' , 'Batman', 'SuperMan'];
}