import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-header-formateur',
  templateUrl: './header-formateur.component.html',
  styleUrls: ['./header-formateur.component.css']
})
export class HeaderFormateurComponent implements OnInit {
notifications:Observable<Notification[]>;
cinUser:number;
i:number;


  constructor(private formationService:FormationService,private router:Router) { }

  ngOnInit(): void {
    this.cinUser=5;
    this.reloadData();
  }
  

  getAllNotSeenNotif(cinUser:number){
    this.cinUser=5;
    this.formationService.getAllNotSeenNotif(this.cinUser);
  }

  reloadData() {
   this.notifications=this.formationService.getAllNotSeenNotif(this.cinUser);
  }

  seen(idNotif:number){
    this.formationService.seenNotif(idNotif).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
