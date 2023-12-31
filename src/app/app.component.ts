import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AppService } from 'src/app/app.service';/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // message:boolean = false;
  // currentUrlStatus:boolean = false;
  // constructor(private router: Router, private appService:AppService) { }
  
  // ngOnInit(): void {
  //   this.appService.getMessage.subscribe(msg => this.message = msg);
  // }

  message: boolean = true;
  isSidebarToggle: boolean = false;
  currentUrlStatus: boolean = false;

  constructor(private router:Router){}

  getData(message:boolean){
    this.isSidebarToggle = message;
    console.log("getData -------", message);
    this.message = !this.message;
  }

  isNotLoginPageOrRegisterPage(): boolean {
    const currentUrl = this.router.url;
    if(currentUrl !== '/' && currentUrl !== '/register') {
      this.currentUrlStatus = true;
    } else {
      this.currentUrlStatus = false;
    }
    return this.currentUrlStatus;
  }
}
