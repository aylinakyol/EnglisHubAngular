import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  handle_click(topic: string) {
  console.log('Tıklanan konu:', topic);
  this.router.navigate(['/levels', topic]);
  }

}
