import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/users';
import { UsersResponse } from './HttpResponse';
interface ApiResponse {
  data: User;
}

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsersPerPage(page: number): Observable<UsersResponse> {
    return this.http
      .get(`https://reqres.in/api/users?page=${page}`, {
        params: new HttpParams().set('page', page.toString()),
      })
      .pipe(map((response) => response as UsersResponse));
  }

  getUserById(userId: number): Observable<User> {
    return this.http
      .get<ApiResponse>(`https://reqres.in/api/users/${userId}`)
      .pipe(map((response) => response.data));
  }
}
