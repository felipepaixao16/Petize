import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap, throwError } from 'rxjs';
import { environments } from 'src/environments/environment.development';
import { User_details } from '../core/models/user_details';
import { User } from '../core/models/User';
import { Repositories } from '../core/models/repositories';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userSource = new BehaviorSubject<User_details | undefined>(undefined);
  currentUser = this.userSource.asObservable();

  baseUrl: string = environments.apiUrl;
  user: User | undefined;

  constructor( private httpClient: HttpClient ) { }

   getUser(user: string) {
    return this.httpClient.get<User_details>(this.baseUrl + `${user}`).pipe(
      map((response: User_details) => {
        return response;
      })
    );
  }

  updateUser(user: User_details) {
    this.userSource.next(user);
  }

  getReposFromUrl(repos_url: string) {
    return this.httpClient.get<Repositories[]>(repos_url).pipe(
      map((response: Repositories[]) => {
        return response;
      })
    );
  }


}
