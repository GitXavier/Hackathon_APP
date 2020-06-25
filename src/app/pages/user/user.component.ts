import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/users';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  panelOpenState = true;
  users: Users[] = [];

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe();

    location.reload();
  }

}
