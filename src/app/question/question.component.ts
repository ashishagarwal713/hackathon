import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ResultsService } from '../services/results/results.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('QuestionType') QuestionType:ElementRef;
  @ViewChild('description') description:ElementRef;
  @ViewChild('email') email:ElementRef;


  question:any={
    "type":1,
    "description":"",
    "email":""
  }
  resultsService:ResultsService;
  questionPosted:boolean=false;

  constructor(resultService:ResultsService,private router:Router) {
    this.resultsService=resultService;
   }

  ngOnInit() {
  }

  OnSubmit(){
    this.question.type=this.QuestionType.nativeElement.value;
    this.question.description=this.description.nativeElement.value;
    this.question.email=this.email.nativeElement.value;
    // this.resultsService.postQuestion(this.question).subscribe(()=>{
      this.questionPosted=true;
      setTimeout(()=>{    this.router.navigate(['home']);
    }, 3000);     
    // });


  }

}
