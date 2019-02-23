import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResultsService } from '../services/results/results.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @ViewChild('searchText') searchText:ElementRef;
  resultset: any[] = [];
  confluenceResultset:any[]=[];
  questionResultSet:any[]=[];

  resultsService:ResultsService;

  relatedQuestion:boolean=false;

  starhide:boolean=false;

  jira:boolean=true;
  stars:any[]=[0,0,0,0,0];

  constructor(resultsService: ResultsService,private router:Router) {
    this.resultsService=resultsService;
  }

  ngOnInit() {
    this.resultset = this.resultsService.getResultset();
    this.jira=this.resultsService.jira;
  }

  findResults(){
    this.resultsService.setSearchText(this.searchText.nativeElement.value);

    if(this.jira){
    this.resultsService.refreshResults(this.resultsService.getSearchText()).subscribe((data)=>{
      this.resultset=data;
      this.resultset = this.resultset.filter((records) => records.assignee != '');
      this.resultsService.setResultSet(this.resultset);
    })
  }
  else{
    this.resultsService.getConfluenceResults(this.resultsService.getSearchText()).subscribe((data)=>{
      this.confluenceResultset=data;
      this.confluenceResultset = this.confluenceResultset.filter((records) => records.assignee != '');
      this.resultsService.setConfluenceResultSet(this.confluenceResultset); 
  })
  }
}

  toggleOptions(value:string){
    this.relatedQuestion=false;
    this.stars=[0,0,0,0,0];
    console.log(value);
    if(value=='jira' )
      this.jira=true;
    else
      this.jira=false;
    this.findResults(); 
  }

  addStars(i:number,j:number){
    this.stars[i]=j;
  }

  gotoRelatedQuestions(){
    // this.relatedQuestion=true;
    this.router.navigate(['question'])
  }
}
