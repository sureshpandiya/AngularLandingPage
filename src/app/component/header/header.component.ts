import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // isSidebarCollapsed = true;

  // message:boolean=true;
  // constructor(private appService:AppService){
  //   this.appService.getMessage.subscribe(msg => this.message = msg);
  // }

  // toggleSidebar(){
  //   this.isSidebarCollapsed = !this.isSidebarCollapsed;
  //   this.appService.setMessage(this.isSidebarCollapsed);
  //   console.log('toggleSidebar---', this.message);
  // }

  message: boolean = true;
  @Output() isSidebarToggle = new EventEmitter<boolean>();

  toggleBtn(){
    console.log(this.isSidebarToggle);
    this.isSidebarToggle.emit(this.message);
    this.message = !this.message;
  }

  ngOnInit(): void {
    let sidebar:any = document.querySelector(".sidebar");
    let sidebarBtn:any = document.querySelector(".sidebarBtn");
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    });
  }
}
