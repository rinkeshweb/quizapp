import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TrustedBy } from '@shared/components/trusted-by/trusted-by';
import { PopularQuizzes } from '@shared/components/popular-quizzes/popular-quizzes';
import { QuizCategories } from '@shared/components/quiz-categories/quiz-categories';
import { UpcomingQuiz } from '@shared/components/upcoming-quiz/upcoming-quiz';
import { LatestBlog } from '@shared/components/latest-blog/latest-blog';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, InputTextModule, CardModule, AnimateOnScrollModule, TrustedBy, PopularQuizzes, QuizCategories, UpcomingQuiz, LatestBlog],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {



}
