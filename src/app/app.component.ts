import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,

})
export class AppComponent {

  public toggle(){
    document.body.classList.toggle('light-theme')
  }

}
