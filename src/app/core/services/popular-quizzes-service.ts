import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopularQuizzesService {
  loading = signal<boolean>(true)
  popularQuiz = signal<any[]>([])

  constructor() {
    setTimeout(() => {
      this.popularQuiz.set([
        {
          title: 'Weekly GK Challenge',
          date: '12 Jan 2026',
          duration: '20 Minutes',
          type: 'general knowledge',
          image: 'assets/img/quizzes/quiz-gk.webp'
        },
        {
          title: 'Angular Skill Test',
          date: '18 Jan 2026',
          duration: '30 Minutes',
          type: 'Coding',
          image: 'assets/img/quizzes/quiz-angular.webp'
        },
        {
          title: 'JavaScript Fundamentals Quiz',
          date: '22 Jan 2026',
          duration: '25 Minutes',
          type: 'Programming',
          image: 'assets/img/quizzes/quiz-javascript.webp'
        },
        {
          title: 'Aptitude Test for Placements',
          date: '25 Jan 2026',
          duration: '35 Minutes',
          type: 'Aptitude',
          image: 'assets/img/quizzes/quiz-aptitude.webp'
        },
        {
          title: 'HTML & CSS Basics',
          date: '28 Jan 2026',
          duration: '20 Minutes',
          type: 'Web',
          image: 'assets/img/quizzes/quiz-html-css.webp'
        },
        {
          title: 'React Interview Practice',
          date: '02 Feb 2026',
          duration: '30 Minutes',
          type: 'Coding',
          image: 'assets/img/quizzes/quiz-react.webp'
        },
        {
          title: 'Logical Reasoning Challenge',
          date: '05 Feb 2026',
          duration: '25 Minutes',
          type: 'Reasoning',
          image: 'assets/img/quizzes/quiz-reasoning.webp'
        },
        {
          title: 'Current Affairs - Monthly Quiz',
          date: '08 Feb 2026',
          duration: '20 Minutes',
          type: 'GK',
          image: 'assets/img/quizzes/quiz-current-affairs.webp'
        },
        {
          title: 'Data Structures & Algorithms',
          date: '12 Feb 2026',
          duration: '40 Minutes',
          type: 'Programming',
          image: 'assets/img/quizzes/quiz-dsa.webp'
        },
        {
          title: 'School Level Science Quiz',
          date: '15 Feb 2026',
          duration: '30 Minutes',
          type: 'Academic',
          image: 'assets/img/quizzes/quiz-science.webp'
        }
      ])
      this.loading.set(false);
    }, 3000)
  }

  getAllQuizzes() {
    return this.popularQuiz()
  }

}
