import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/models/formation';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit {
  formations: Observable<Formation[]>;
  cin=6;

  constructor(private formationService:FormationService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.formations=this.formationService.getFormationsList();
  }

  
  getFormationDetail(idFormation:number){
    this.router.navigate(['detailFormation',idFormation])
  }
}
