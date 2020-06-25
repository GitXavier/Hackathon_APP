import { Component, OnInit } from '@angular/core';
import { Pilulier } from 'src/app/shared/models/Pilulier';
import { PilulierService } from 'src/app/shared/services/pilulier.service';

@Component({
  selector: 'app-pilulier-new',
  templateUrl: './pilulier-new.component.html',
  styleUrls: ['./pilulier-new.component.scss']
})
export class PilulierNewComponent implements OnInit {


  pilulier: Pilulier = new Pilulier();

  constructor(private pilulierService: PilulierService) { }

  ngOnInit(): void {
  }

  send(){
    this.pilulierService.post(this.pilulier).subscribe((newPilulierFromServer) => {
      console.log(newPilulierFromServer);
    });
  }
}
