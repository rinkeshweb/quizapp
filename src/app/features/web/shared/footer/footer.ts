import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [ButtonModule, DialogModule, CardModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false
  }


}
