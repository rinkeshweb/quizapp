import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-popular-quizzes',
  imports: [AnimateOnScrollModule, ButtonModule, BadgeModule],
  templateUrl: './popular-quizzes.html',
  styleUrl: './popular-quizzes.css',
})
export class PopularQuizzes {

}
