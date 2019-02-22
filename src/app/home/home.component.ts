import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from '../services/results/results.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('searchText') searchText:ElementRef;

  resultset:any=[];
  resultsService:ResultsService;

  constructor(private router: Router,  resultsService:ResultsService) { 
    this.resultsService=resultsService;
  }

  ngOnInit() {
  }

  findResults(){
    console.log(this.searchText);
    this.resultsService.setSearchText(this.searchText.nativeElement.value);
    this.resultsService.refreshResults(this.resultsService.getSearchText()).subscribe((data)=>{
      this.resultset=data;
      this.resultsService.setResultSet(this.resultset);
      this.router.navigate(['results'])
    })
    // this.router.navigate(['results'])
  }

}
