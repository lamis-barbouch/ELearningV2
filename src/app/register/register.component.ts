import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
    submitted = false;
  showMsg: boolean = false;
  constructor(private userService:UserService,private router:Router) { }
  
  ngOnInit(): void {
  }
  newUser():void{
    this.submitted=false;
    this.user=new User();
  }
  save() {
    this.userService
    .register(this.user).subscribe(data => {
      console.log(data)
      this.showMsg= true;
      this.user = new User();
      this.gotoSuccessPage();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
    this.router.navigate(['/emailConfirmation']);
  }

  gotoSuccessPage() {
    this.router.navigate(['/emailConfirmation']);
  }
}
