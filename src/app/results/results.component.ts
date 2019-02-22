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

  constructor(private resultsService: ResultsService) {}

  ngOnInit() {
    this.resultset = this.resultsService.getResultset();
  }

  findResults(){
    this.resultsService.setSearchText(this.searchText.nativeElement.value);
    this.resultsService.refreshResults(this.resultsService.getSearchText()).subscribe((data)=>{
      this.resultset=data;
      this.resultsService.setResultSet(this.resultset);
    })
  }

}
