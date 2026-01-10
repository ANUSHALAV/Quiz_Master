import { Component, Input, input } from '@angular/core';

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
  
  onRestartQuiz(){
    window.location.href = '/';
  }
}
