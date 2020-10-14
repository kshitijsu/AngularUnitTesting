import { Component, OnInit } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, map, tap } from "rxjs/operators";
import { User } from "../model/user";
import { UserdetailsService } from "../services/userdetails.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  data: any = [];
  allUser: any;

  constructor(private userService: UserdetailsService) {}

  ngOnInit() {
    this.loadAllUser();

    var userDetails = this.userService.getAllUsers().pipe(
      tap((data) => {
        this.data = data;
        console.log("Users List Tap: " + data);
      }),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      }),
      finalize(() => {
        console.log("Component Task Completed");
      })
    );

    userDetails.subscribe();
  }

  loadAllUser() {
    this.allUser = this.userService.getAllUsers();
    console.log("All users: " + this.allUser);
  }
}
