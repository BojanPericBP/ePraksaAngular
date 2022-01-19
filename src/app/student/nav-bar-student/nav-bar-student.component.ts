import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-student',
  templateUrl: './nav-bar-student.component.html',
  styleUrls: ['./nav-bar-student.component.scss']
})
export class NavBarStudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public profilDropdown() {

    var x = document.getElementById("dropdown-content-klasa-ID");
    var btn = document.getElementById("dropbtn-ID");

    if (x?.style.display === "block") {
      x.style.display = "none"

      if (btn !== null)
        btn.style.borderRadius = "30px";
    }

    else {
      if (x !== null) {
        x.style.display = "block";
        if (btn !== null)
          btn.style.borderRadius = "20px 20px 0 0";
      }
    }
  }

  public myFunction() // za otvaranje nav-menija na 3 crtice
  {
    var x = document.getElementById("myTopnav");
    if (x?.className === "topnav") {
      x.className += " responsive";
    } else {
      if (x !== null)
        x.className = "topnav";
    }
  }
  public logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['welcome']);
  }

  
  @HostListener('window:mouseup', ['$event'])
  mouseUp(event:any) { 
    let dugme = document.getElementById("dropbtn-ID");
    let x = document.getElementById("dropdown-content-klasa-ID");
    if (!dugme?.contains(event.target)) {
      if(x!==null)
      {
        x.style.display = 'none';
        if(dugme !==null)
          dugme.style.borderRadius="25px";
      }
    }
  }
}
