import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-card',
  imports: [],
  templateUrl: './score-card.html',
  styleUrl: './score-card.scss',
})
export class ScoreCard {
  @Input() totalQuestionNumber: number = 0;
  @Input() totalMarks: number = 0;
  @Input() wrongAnswer: number = 0;
  @Input() notAttendedQuestion: number = 0;

  constructor(
    private _router: Router
  ) { }

  onRestartQuiz() {
    this._router.navigate(['/']);
  }
}
