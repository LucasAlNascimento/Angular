import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {
  public icon: string = "moon.svg";
  public logo: string = "logo.svg";


  constructor(){}

  ngOnInit(): void {
    
  }
 
  
  public toggle(){
    const theme: boolean = document.body.classList.toggle("light-theme");

    if(theme){
      this.logo = "logo-light.svg";
      return (this.icon = "sun.svg");
    }
      this.logo = "logo.svg";
      return (this.icon = "moon.svg");
    }
  }


