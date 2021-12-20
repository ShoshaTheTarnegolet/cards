import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

posts = [
  {
    title: 'Neat Tree',
    imageUrl: 'assets/images/tree.jpeg',
    username: 'nature',
    content: 'bebebe'
  },
  {
    title: 'Snowy Mountain',
    imageUrl: 'assets/images/mountain.jpeg',
    username: 'mountainlover',
    content: 'bebebe'
  },
  {
    title: 'Mountain Biking',
    imageUrl: 'assets/images/biking.jpeg',
    username: 'biking',
    content: 'bebebe'
  }
]

}
