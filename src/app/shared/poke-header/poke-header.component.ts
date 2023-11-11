import { Component, OnInit } from '@angular/core';
import { ETheme } from 'src/app/enums/ETheme.enum';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {

  public icon: string = ETheme.ICON_MOON;
  public logo: string = ETheme.LOGO;

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {

    this.updateTheme();
    
  } 
  
  public toggle(){
    this.themeService.toggleTheme();
    this.updateTheme();
  }

  private updateTheme() {
    const isLightTheme = this.themeService.getIsLightTheme();
    document.body.classList.toggle("light-theme", isLightTheme);

    this.logo = isLightTheme ? ETheme.LOGO_LIGHT : ETheme.LOGO;
    this.icon = isLightTheme ? ETheme.ICON_SUN : ETheme.ICON_MOON;
  }
}

