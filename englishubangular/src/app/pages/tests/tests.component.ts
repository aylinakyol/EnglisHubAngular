import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tests',
  imports: [CommonModule],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  topic: string | null
  level: string | null

  constructor(private route: ActivatedRoute) {
    this.topic = this.route.snapshot.paramMap.get('topic');
    this.level = this.route.snapshot.paramMap.get('level');
  }

  currentQuestionIndex = 0;
 

  // Örnek sorular - gerçek uygulamada bir servisten alınabilir
  questions = [
    {
      text: 'Angular hangi dilde yazılmıştır?',
      options: [
        { text: 'Java', correct: false },
        { text: 'Python', correct: false },
        { text: 'TypeScript', correct: true },
        { text: 'C#', correct: false }
      ]
    },
    {
      text: 'Angular bileşenlerini tanımlamak için hangi dekoratör kullanılır?',
      options: [
        { text: '@Component', correct: true },
        { text: '@Directive', correct: false },
        { text: '@Injectable', correct: false },
        { text: '@Pipe', correct: false }
      ]
    }
    // Diğer sorular...
  ];

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(index: number) {
    console.log('Seçilen şık:', this.currentQuestion.options[index].text);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      console.log('Test bitti!');
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {  // 0'dan büyükse (ilk soruda değilsek)
      this.currentQuestionIndex--;
    } else {
      console.log('Zaten ilk sorudasınız!');
    }
  }

  // Soruyu yüklemek için yardımcı fonksiyon
}
