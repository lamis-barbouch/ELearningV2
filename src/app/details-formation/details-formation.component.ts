import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/models/formation';
import { User } from 'src/models/user';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {
  idFormation:number;
  formation:Formation;
  user:User;
  cinUser:number;
  value:null;
  constructor(private route: ActivatedRoute,private router: Router,
    private formationService:FormationService) { }

    ngOnInit(){
      this.formation=new Formation();
  
      this.idFormation=this.route.snapshot.params['idFormation'];
      this.cinUser=6;
      this.formationService.getFormationDetail(this.idFormation).subscribe(data => {
        console.log(data)
        this.formation = data;
      }, error => console.log(error));

     
    }
    getFormationDetail(idFormation:number){
      this.router.navigate(['getFormationDetail',Formation])
    }

    participer(){
      this.gotoSuccessPage();
      this.formationService.participer(this.cinUser,this.idFormation,this.value).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      
      
    }
  gotoSuccessPage() {
    this.router.navigate(['/succesParticipeFormation']);
  }
}
