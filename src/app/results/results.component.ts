import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResultsService } from '../services/results/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @ViewChild('searchText') searchText:ElementRef;
  resultset: any = [];
  resultsService:ResultsService

  jira:boolean=false;

  constructor(resultsService: ResultsService) {
    this.resultsService=resultsService;
  }

  ngOnInit() {
    this.resultset = this.resultsService.getResultset();
    this.jira=true;
  }

  findResults(){
    this.resultsService.setSearchText(this.searchText.nativeElement.value);
    this.resultsService.refreshResults(this.resultsService.getSearchText()).subscribe((data)=>{
      this.resultset=data;
      this.resultsService.setResultSet(this.resultset);
    })
  }

  toggleOptions(value:string){
    console.log(value);
    if(value=='jira' )
      this.jira=true;
    else
      this.jira=false;   
  }
}
