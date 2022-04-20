import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-forum-admin',
  templateUrl: './forum-admin.component.html',
  styleUrls: ['./forum-admin.component.css']
})
export class ForumAdminComponent implements OnInit {

  constructor( private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,) { }

  ngOnInit(): void {
  }

  redirectToDictionnaire () {
    this.router.navigateByUrl('/dictionnaireForum');

  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/login']);
    
 
   }

}
