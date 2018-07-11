import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showSummer: boolean;
  showWinter: boolean;
  showFall: boolean;
  showLogo: boolean;
    constructor() {
        this.showSummer = false;
        this.showWinter = false;
        this.showFall = false;
        this.showLogo = true;
    }
    ShowSummerButton() {
        this.showSummer = true;
        this.showWinter = false;
        this.showFall = false;
        this.showLogo = false;
    }
    ShowWinterButton() {
      this.showWinter = true;
      this.showSummer = false;
        this.showFall = false;
        this.showLogo = false;
  }
  ShowFallButton() {
    this.showFall = true;
    this.showWinter = false;
        this.showSummer = false;
        this.showLogo = false;
}
    RefreshButton() {
      this.showSummer = false;
      this.showWinter = false;
      this.showFall = false;
      this.showLogo = true;
    }
     on() {
      document.getElementById("overlay").style.display = "block";
  }
  
  off() {
      document.getElementById("overlay").style.display = "none";
  }
}
