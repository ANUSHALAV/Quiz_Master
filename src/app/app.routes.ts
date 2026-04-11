import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./layout/quiz-start/quiz-start').then(m => m.QuizStart) },
    { path: 'quiz', loadComponent: () => import('./layout/question-playground/question-playground').then(m => m.QuestionPlayground) },
    { path: '**', loadComponent: () => import('./layout/page-not-found/page-not-found').then(m => m.PageNotFound) }
];
