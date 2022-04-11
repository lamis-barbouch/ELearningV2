import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
    displayStyle = "none";
  
    openPopup() {
      this.router.navigateByUrl('/addSubject');
    }
    closePopup() {
      this.displayStyle = "none";
    }
  }