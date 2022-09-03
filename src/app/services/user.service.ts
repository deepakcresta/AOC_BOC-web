import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrlEndPoint: string = '/users';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  addNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      this.baseUrl.concat(this.apiUrlEndPoint),
      user
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      this.baseUrl.concat(this.apiUrlEndPoint)
    );
  }

  getUserById(id: number): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl.concat(this.apiUrlEndPoint) + '/id/' + id
    );
  }

  updateUser(user: any): Observable<any> {
    return this.httpClient.put<any>(
      this.baseUrl.concat(this.apiUrlEndPoint),
      user
    );
  }

  deleteUser(id: number) {
    return this.httpClient.delete(
      this.baseUrl.concat(this.apiUrlEndPoint) + '/' + id
    );
  }
}
