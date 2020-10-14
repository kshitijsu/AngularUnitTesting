import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, map, tap } from "rxjs/operators";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class UserdetailsService {
  // url = "http://localhost:57113/api/UserDetails";
  url = "https://a548cef0-ab23-42c7-85d8-d6dc299117fd.mock.pstmn.io/userslist";

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<any>(this.url).pipe(
      map((data) => data.data),
      // tap((data) => {
      //   return data;
      // }),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      }),
      finalize(() => {
        console.log("Services Task Completed");
      })
    );
  }
}
