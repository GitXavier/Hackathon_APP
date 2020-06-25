import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { Users } from 'src/app/shared/users';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  users: Users[] = [];

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((users) => {
      this.users = users;

      console.log(users);
    });
  }
}
