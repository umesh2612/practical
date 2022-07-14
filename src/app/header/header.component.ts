import { Component, OnInit,HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scrolled: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 20;
      this.status = false;
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;  
      this.scrolled= true;     
  }
}
