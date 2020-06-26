import { Component, OnInit } from '@angular/core';
import { Pilulier } from 'src/app/shared/models/Pilulier';
import { PilulierService } from 'src/app/shared/services/pilulier.service';
import { PrescriptionService } from 'src/app/shared/services/prescription.service';
import { Prescription } from 'src/app/shared/models/Prescription';
import { Drug } from 'src/app/shared/models/Drug';


@Component({
  selector: 'app-pilulier',
  templateUrl: './pilulier.component.html',
  styleUrls: ['./pilulier.component.scss']
})
export class PilulierComponent implements OnInit {



  piluliers: Pilulier[] = [];

  prescriptions: Prescription[] = [];

  drugs : Drug[] = [
    {   "id":1,
        "title": "PARACETAMOL BIOGARAN 500 mg",
        "laboratory": "BIOGARAN",
        "quantity": 15,
        "type": "Comprimé",
        "img_url": "https://zupimages.net/up/20/26/s581.jpeg"
    },
    {
        "id": 2,
        "title": "METFORMINE (CHLORHYDRATE DE) 1000 mg - GLUCOPHAGE 1000 mg, comprimé pelliculé sécable",
        "laboratory": "MYLAN SAS",
        "quantity": 60,
        "type": "Comprimé",
        "img_url": "https://zupimages.net/up/20/26/1539.jpeg"
    },
    {
        "id": 3,
        "title": "RAMIPRIL KRKA 5 mg, comprimé",
        "laboratory": "ROCHE REGISTRATION LTD",
        "quantity": 15,
        "type": "Comprimé",
        "img_url": "https://zupimages.net/up/20/26/x93n.jpeg"
    },
    {
        "id": 4,
        "title": "ATENOLOL ZYDUS 50 mg, comprimé pelliculé sécable",
        "laboratory": "BIOGARAN",
        "quantity": 30,
        "type": "Comprimé",
        "img_url": "https://zupimages.net/up/20/26/ddij.jpg"
    },
    {
        "id": 5,
        "title": "ATORVASTATINE ALMUS 10 mg",
        "laboratory": "BIOGARAN",
        "quantity": 30,
        "type": "comprimé pelliculé",
        "img_url": "https://zupimages.net/up/20/26/dmcf.jpeg"
    }
]

  constructor(private service: PilulierService, private prescriptionService : PrescriptionService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((piluliers) => {
      this.piluliers = piluliers;

      console.log(piluliers);
    });
    this.prescriptionService.getAll().subscribe((prescription)=>{
      this.prescriptions = prescription;
      console.log(this.prescriptions)
    })
  }


}
