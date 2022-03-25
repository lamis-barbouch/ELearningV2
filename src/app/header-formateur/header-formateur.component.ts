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

  constructor(private formationService:FormationService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData
  }

  getAllNotSeenNotif(cinUser:number){
    this.formationService.getAllNotSeenNotif();
  }

  reloadData() {
   this.notifications=this.formationService.getAllNotSeenNotif();
  }
}
