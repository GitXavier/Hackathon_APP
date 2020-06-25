import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  navbarIcon = 'menu';

  constructor() { }

  ngOnInit(): void {

    window.onscroll = () => { scrollFunction(); };

    function scrollFunction() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').style.backgroundColor = 'white';
      } else {
        document.getElementById('navbar').style.backgroundColor = 'rgba(117, 190, 218, 0.0)';
      }
    }
  }

  clicBurger() {

    const links = document.getElementById("links");
    if (links.style.display === "block") {
      links.style.display = "none";
      this.navbarIcon = 'menu';
    } else {
      document.getElementById('navbar').style.backgroundColor = 'white';
      links.style.display = "block";
      this.navbarIcon = 'menu_open';

    }
  }

}
