import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User_details } from 'src/app/core/models/user_details';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: User_details | undefined;
  username: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toast: ToastrService
  ) { }

  getGitUser() {
    this.apiService.getUser(this.username).subscribe((response: User_details) => {
      this.user = response;
      this.apiService.updateUser(this.user);
      this.router.navigate(['/profile']);
    },
    (error) => {
      this.toast.error("Usuário não encontrado.");
    });
  }
}
