import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  constructor(private formationService:FormationService,private router:Router) { }

  ngOnInit(): void {
  }

 

}
