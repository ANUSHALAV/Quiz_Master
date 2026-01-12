import { Component, OnInit } from '@angular/core';
import { QuizQuestionAnswere } from '../../quiz-question-answere';
import { FormsModule } from '@angular/forms';
import { ScoreCard } from '../score-card/score-card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-question-playground',
  imports: [FormsModule,ScoreCard],
  templateUrl: './question-playground.html',
  styleUrl: './question-playground.scss',
})
export class QuestionPlayground implements OnInit{

  lstQuestions:any[]=[];
  lstQuestion:any[]=[];
  totalQuestionNumber: number = 10;
  currentQuestionNumber: number = 1;
  selectedOption:number=0;
  totalMarks:number=0;
  wrongAnswer:number=0;
  notAttendedQuestion:number=0;
  isQuizCompleted:boolean=false;
  randomQuestionNumber:number=0;

  constructor(
    private questionAnswere:QuizQuestionAnswere
  ){
    this.lstQuestions= this.questionAnswere.getQuestionAnswere();
    this.genrateRandomQuestionNumber();
  }

  ngOnInit():void{
    this.lstQuestion = this.lstQuestions.filter(q => q.Id === this.randomQuestionNumber);
  }

  genrateRandomQuestionNumber():void {
    this.randomQuestionNumber = Math.floor(Math.random() * this.lstQuestions.length) + 1;
  }

  onPrevius():void {
    if (this.currentQuestionNumber > 1) {
      this.currentQuestionNumber--;
      this.lstQuestion=this.lstQuestions.filter(q=>q.Id===this.randomQuestionNumber)
    }
  }

  onNext():void {
    this.marksCalculation();
    this.genrateRandomQuestionNumber();
    if (this.currentQuestionNumber < 10) {
      this.currentQuestionNumber++;
      this.lstQuestion=this.lstQuestions.filter(q=>q.Id===this.randomQuestionNumber);
    }
  }

  onSubmit():void {
    this.marksCalculation();
    let isSubmit = confirm('Do you want to submit your answer');
    if (isSubmit) {
      this.isQuizCompleted=true;
    }else{
      this.isQuizCompleted=false;
    }
  }

  marksCalculation(){
    if(this.selectedOption==0){
      this.notAttendedQuestion++;
    }
    else if(this.selectedOption==this.lstQuestion[0].Answere){
      this.totalMarks++;
    }else if(this.selectedOption!=this.lstQuestion[0].Answere){
      this.wrongAnswer++;
    }
    this.selectedOption=0;
  }

}
