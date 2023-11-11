import { Component, OnInit } from '@angular/core';
import { ETheme } from 'src/app/enums/ETheme.enum';

@Component({
  selector: 'poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public logo: string = "logo.svg";


  constructor(){}

  ngOnInit(): void {
    
  } 
  
  public toggle(){
    const theme = document.body.classList.toggle("light-theme");

    if(theme){
      this.logo = ETheme.LOGO_LIGHT;
      return (this.icon = ETheme.ICON_SUN);
    }
      this.logo = ETheme.LOGO;
      return (this.icon = ETheme.ICON_MOON);
    }
  }


