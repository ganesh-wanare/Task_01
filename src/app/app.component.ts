import { Component } from '@angular/core';
import { GithubService } from './service/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users = [];

  constructor(private git: GithubService) {}

  getUsers() {
    this.git.getData().subscribe((data) => {
      console.log(data);
      this.users = data;
    })  
  }
}
