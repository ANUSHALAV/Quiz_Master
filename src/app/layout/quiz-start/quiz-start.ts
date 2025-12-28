import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-start',
  imports: [],
  templateUrl: './quiz-start.html',
  styleUrl: './quiz-start.scss',
})
export class QuizStart {

  onStartQuiz(){
    window.location.href = '/quiz';
  }
}
