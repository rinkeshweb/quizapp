import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, InputTextModule, CardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {



}
