import { Component, OnInit } from '@angular/core';
import { Pilulier } from 'src/app/shared/models/Pilulier';
import { PilulierService } from 'src/app/shared/services/pilulier.service';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { Users } from 'src/app/shared/users';

@Component({
  selector: 'app-pilulier-new',
  templateUrl: './pilulier-new.component.html',
  styleUrls: ['./pilulier-new.component.scss']
})
export class PilulierNewComponent implements OnInit {


  pilulier: Pilulier = new Pilulier();
  users: Users[] = [];

  constructor(private pilulierService: PilulierService, private service: UserServiceService) { }

  ngOnInit(): void {
  }

  showUsers() {
    this.service.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  send(){
    this.pilulierService.post(this.pilulier).subscribe((newPilulierFromServer) => {
      return this.showUsers();
    });
  }
}
