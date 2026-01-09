import { Routes } from '@angular/router';
import { QuizStart } from './layout/quiz-start/quiz-start';
import { QuestionPlayground } from './layout/question-playground/question-playground';
import { PageNotFound } from './layout/page-not-found/page-not-found';
import { ScoreCard } from './layout/score-card/score-card';

export const routes: Routes = [
    { path: '', component: QuizStart },
    { path: 'quiz', component: QuestionPlayground },
    { path: '**', component: PageNotFound }
];
