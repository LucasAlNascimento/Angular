import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isLightTheme: boolean = false;

  constructor() { }

  toggleTheme(){
    this.isLightTheme = !this.isLightTheme;
  }

  getIsLightTheme(){
    return this.isLightTheme;
  }
}
