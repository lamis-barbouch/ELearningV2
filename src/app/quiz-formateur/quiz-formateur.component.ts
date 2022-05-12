import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { Quiz } from 'src/models/quiz';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-quiz-formateur',
  templateUrl: './quiz-formateur.component.html',
  styleUrls: ['./quiz-formateur.component.css']
})
export class QuizFormateurComponent implements OnInit {

  quizes:Observable<Quiz[]>;
  categories:Observable<Category[]>;

  submitted = false;
  showMsg: boolean = false;
  quiz:Quiz=new Quiz();

  constructor(private quizService:QuizService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
 }
 newCategory():void{
  this.submitted=false;
  this.quiz=new Quiz();
}

save() {
  this.quizService.createQuiz(this.quiz).subscribe(data => {
    console.log(data)
    this.showMsg= true;
    this.quiz = new Quiz();
  }, 
  error => console.log(error));
}
onSubmit() {
  this.submitted = true;
  this.save();    
}

reloadData(){
 
}


}
