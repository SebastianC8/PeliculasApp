import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarPelicula(value: string) {

    value = value.trim();

    if (!value) {
      return;
    }

    this.router.navigate(['/buscar', value]);

  }

}
