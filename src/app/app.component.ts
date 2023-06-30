import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isRecipe = true;

  onNavigate(type: string) {
    this.isRecipe = type === 'recipe' ? true : false;
  }
}
