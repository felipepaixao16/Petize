import { Component, OnInit } from '@angular/core';
import { Repositories } from 'src/app/core/models/repositories';
import { User_details } from 'src/app/core/models/user_details';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: User_details | undefined;
  userRepo: Repositories[] | undefined;
  username: string = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.currentUser.subscribe(user => {
      this.user = user;
      if (user) {
        this.apiService.getReposFromUrl(user.repos_url).subscribe(repos => {
          this.userRepo = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        });
      }
    });
  }

  getTwitterUrl(username: string | undefined) {
    if (username) {
        return `https://x.com/${username}`;
    }
    return '';
  }

  getSiteUrl(username: string | undefined) {
    if (username) {
        return this.user?.blog;
    }
    return '';
  }

  getDaysSinceUpdated(updated_at: string): string {
    const updatedAtDate = new Date(updated_at);
    const currentDate = new Date();
    const diffInTime = currentDate.getTime() - updatedAtDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    return `Atualizado há ${diffInDays} dias`;
  }

}
