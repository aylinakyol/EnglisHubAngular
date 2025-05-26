import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-levels',
  imports: [],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.css'
})
export class LevelsComponent {
  topic: string | null

  constructor(private router: Router, private route: ActivatedRoute) {
    this.topic = this.route.snapshot.paramMap.get('topic');

    this.route.params.subscribe(params => {
      this.topic = params['topic'];
    });
  }
  
  handle_click(level: string) {
    console.log('Tıklanan topic:', level);
    console.log('Tıklanan konu:', this.topic);
    this.router.navigate(['/tests', this.topic, level]);
  }
}
