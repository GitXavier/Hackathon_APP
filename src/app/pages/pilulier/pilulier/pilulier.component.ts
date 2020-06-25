import { Component, OnInit } from '@angular/core';
import { Pilulier } from 'src/app/shared/models/Pilulier';
import { PilulierService } from 'src/app/shared/services/pilulier.service';


@Component({
  selector: 'app-pilulier',
  templateUrl: './pilulier.component.html',
  styleUrls: ['./pilulier.component.scss']
})
export class PilulierComponent implements OnInit {

  piluliers: Pilulier[] = [];

  constructor(private service: PilulierService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((piluliers) => {
      this.piluliers = piluliers;

      console.log(piluliers);
    });
  }

}
