import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dictionaire-forum',
  templateUrl: './dictionaire-forum.component.html',
  styleUrls: ['./dictionaire-forum.component.css']
})
export class DictionaireForumComponent implements OnInit {

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/login']);
    
 
   }
}
