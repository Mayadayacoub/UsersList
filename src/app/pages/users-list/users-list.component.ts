import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users!: User[];
  totalPages!: number;
  pageNumbers!: number[];
  currentPage!: number;
  filteredUsersList: User[] = [];
  searchText!: number;

  constructor(private userService: UserService) {
    this.filteredUsersList = this.users;
  }

  ngOnInit() {
    this.getUsersPerPage();
  }

  filterUsers(event:Event ) {
    const target = event.target as HTMLInputElement
    const searchText = target?.value;
    if (!searchText) {
      this.filteredUsersList = [];
      return;
    }

    this.filteredUsersList = this.users.filter((user) =>
      user.id.toString().includes(searchText)
    );
  }

  getUsersPerPage(pageNumber = 1) {
    this.userService.getUsersPerPage(pageNumber).subscribe({
      next: (response) => {
        this.users = response.data;
        this.totalPages = response.total_pages;
        this.currentPage = pageNumber;

        this.pageNumbers = Array.from(
          { length: this.totalPages },
          (_, index) => index + 1
        );
      },
      error: (error) => {
        console.error('Error', error);
      },
    });
  }
}
