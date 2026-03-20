import { Routes } from '@angular/router';
import { QuizStart } from './layout/quiz-start/quiz-start';
import { QuestionPlayground } from './layout/question-playground/question-playground';
import { PageNotFound } from './layout/page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./layout/quiz-start/quiz-start').then(m => m.QuizStart) },
    { path: 'quiz', loadComponent: () => import('./layout/question-playground/question-playground').then(m => m.QuestionPlayground) },
    { path: '**', loadComponent: () => import('./layout/page-not-found/page-not-found').then(m => m.PageNotFound) }
];
