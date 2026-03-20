import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-start',
  imports: [],
  templateUrl: './quiz-start.html',
  styleUrl: './quiz-start.scss',
})
export class QuizStart {
  
  constructor(private _router: Router) { }

  onStartQuiz() {
    this._router.navigate(['/quiz']);
  }
}
