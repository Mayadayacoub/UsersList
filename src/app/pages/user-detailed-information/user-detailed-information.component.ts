import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detailed-information',
  templateUrl: './user-detailed-information.component.html',
  styleUrls: ['./user-detailed-information.component.css'],
})
export class UserDetailedInformationComponent implements OnInit {
  user$?: Observable<User>;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.getUserById(id);
    });
  }

  getUserById(userId: number) {
    this.user$ = this.userService.getUserById(userId);
  }
}
