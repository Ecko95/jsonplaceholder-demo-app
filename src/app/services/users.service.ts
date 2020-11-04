import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { UserModel } from "../models/user.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class UsersService {
  private usersUrl: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersUrl);
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.usersUrl}/${id}`);
  }

  serveUsers(): Observable<UserModel[]> {
    return this.http.get(this.usersUrl).pipe(
      map((users: any) => {
        return users.map(user => {
          return {
            name: user.name,
            email: user.email,
            value: user.address.street
          };
        });
      })
    );
  }
}
