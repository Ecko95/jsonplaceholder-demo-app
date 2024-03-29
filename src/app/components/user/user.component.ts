import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

// Model
import { UserModel } from '../../models/user.model';

// Service
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserModel[];
  filterString = '';
  apiNameList: UserModel[];
  filteredUsers: UserModel[];
  subscription: Subscription;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor(private usersService: UsersService) {}

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }

  ngOnInit() {
    // this.getUsers();
    this.serveUsers();
    this.usersService.getUsers().subscribe((users: any[]) => {
      this.users = users.filter(
        user => user.status && user.name === 'Leanne Graham'
      );
      console.log('Got the users as: ', this.users);
    });
  }

  serveUsers() {
    this.subscription = this.usersService
      .serveUsers()
      .subscribe(users => (this.apiNameList = users));
  }

  getFilteredUsers() {
    this.filteredUsers = this.apiNameList.filter(
      user =>
        user.name.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1 //0 for surname -1 for firstname
        );
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
