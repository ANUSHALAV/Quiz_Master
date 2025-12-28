import { Component, OnInit } from '@angular/core';
import { QuizQuestionAnswere } from '../../quiz-question-answere';

@Component({
  selector: 'app-question-playground',
  imports: [],
  templateUrl: './question-playground.html',
  styleUrl: './question-playground.scss',
})
export class QuestionPlayground implements OnInit{

  lstQuestions:any[]=[];
  lstQuestion:any[]=[];
  totalQuestionNumber: number = 10;
  currentQuestionNumber: number = 1;

  constructor(
    private questionAnswere:QuizQuestionAnswere
  ){
    this.lstQuestions= this.questionAnswere.getQuestionAnswere();
    this.lstQuestion = this.lstQuestions.filter(q => q.Id === this.currentQuestionNumber);
  }

  ngOnInit():void{
  }

  onPrevius():void {
    if (this.currentQuestionNumber > 1) {
      this.currentQuestionNumber--;
      this.lstQuestion=this.lstQuestions.filter(q=>q.Id===this.currentQuestionNumber)
    }
  }

  onNext():void {
    if (this.currentQuestionNumber < 10) {
      this.currentQuestionNumber++;
      this.lstQuestion=this.lstQuestions.filter(q=>q.Id===this.currentQuestionNumber);
    }
  }

  onSubmit():void {
    let isSubmit = confirm('Do you want to submit your answer');
    if (isSubmit) {
      window.location.href = '/scoreCard';
    }
  }
}
