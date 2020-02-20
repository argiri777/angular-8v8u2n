import { Component } from '@angular/core';
import { RedirectService } from './redirect.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor( public redser: RedirectService){}

  name = 'Angular 8';

  
 redirect(){
    let param = {sid:"S2018844",code:"002998475676"};
    this.redser.post(param,"http://www.news24.com");
  }

}