import { Component } from '@angular/core';

@Component({
  selector: 'app-score-card',
  imports: [],
  templateUrl: './score-card.html',
  styleUrl: './score-card.scss',
})
export class ScoreCard {

  score: number = 8;
  totalQuestions: number = 10;
  
  onRestartQuiz(){
    window.location.href = '/';
  }
}
