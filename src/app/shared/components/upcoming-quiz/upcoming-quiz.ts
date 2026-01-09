import { Component, computed, inject, signal } from '@angular/core';
import { PopularQuizzesService } from '@core/services/popular-quizzes-service';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-upcoming-quiz',
  imports: [ButtonModule, AnimateOnScrollModule, CarouselModule, SkeletonModule],
  templateUrl: './upcoming-quiz.html',
  styleUrl: './upcoming-quiz.css',
})
export class UpcomingQuiz {
  private popularQuizService = inject(PopularQuizzesService)

  quizzes = computed(() => this.popularQuizService.popularQuiz());
  loading = computed(() => this.popularQuizService.loading());

  carouselItems = computed(() => (
    this.loading() ? Array.from({ length: 5 }) : this.quizzes()
  ))

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
