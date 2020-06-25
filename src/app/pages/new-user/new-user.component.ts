import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/users';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  model : Users = new Users();

  constructor(private service: UserServiceService) { }



  ngOnInit():void {
  }
  onSubmit(){
    this.service.post(this.model).subscribe((newUserFromServer)=>{
      console.log(newUserFromServer);
    });
  }

}
