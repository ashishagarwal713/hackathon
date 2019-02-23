import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  public searchText: string='';

  jira:boolean=true;

  public resultset:any[]=[];
  // public confluenceResultset:any[]=[];

//  private resultset: Array<object> = [{
//       "source":1,
//       "issue_type":"Sub-task",
//       "issue_key":'PR06425-332',
//       "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
//       "assignee" : 'NDH00065',
//       "Reportee" : 'NDH00075',
//       "status" : 'Done',
//       "Created" : 'Date',
//       "Updated" : 'Date',
//       "project_key": 'PR06425',
//       "project_name" : 'R&D Resource Management System Ph1'
//     },{
//       "source":1,
//       "issue_type":"Sub-task",
//       "issue_key":'PR06425-332',
//       "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
//       "assignee" : '',
//       "Reportee" : 'NDH00075',
//       "status" : 'In Progress',
//       "Created" : 'Date',
//       "Updated" : 'Date',
//       "project_key": 'PR06425',
//       "project_name" : 'R&D Resource Management System Ph1'
//       },{
//         "source":1,
//         "issue_type":"Sub-task",
//         "issue_key":'PR06425-332',
//         "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
//         "assignee" : 'N189935',
//         "Reportee" : 'NDH00075',
//         "status" : 'To Do',
//         "Created" : 'Date',
//         "Updated" : 'Date',
//         "project_key": 'PR06425',
//         "project_name" : 'R&D Resource Management System Ph1'
//       }
//     ];

    private confluenceResultset: Array<object> = [{
      "source":1,
      "issue_type":"Sub",
      "issue_key":'PR06425-332',
      "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
      "assignee" : 'NDH00065',
      "Reportee" : 'NDH00075',
      "status" : 'Done',
      "Created" : 'Date',
      "Updated" : 'Date',
      "project_key": 'PR06425',
      "project_name" : 'R&D Resource Management System Ph1'
    },{
      "source":1,
      "issue_type":"Sub-task",
      "issue_key":'PR06425-332',
      "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
      "assignee" : '',
      "Reportee" : 'NDH00075',
      "status" : 'In Progress',
      "Created" : 'Date',
      "Updated" : 'Date',
      "project_key": 'PR06425',
      "project_name" : 'R&D Resource Management System Ph1'
      },{
        "source":1,
        "issue_type":"Sub-task",
        "issue_key":'PR06425-332',
        "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
        "assignee" : 'N189935',
        "Reportee" : 'NDH00075',
        "status" : 'To Do',
        "Created" : 'Date',
        "Updated" : 'Date',
        "project_key": 'PR06425',
        "project_name" : 'R&D Resource Management System Ph1'
      }
    ];
  constructor(private http:Http) { }

  setResultSet(value){
    this.resultset=value;
  }

  getResultset(){
    return this.resultset;
  }

  setConfluenceResultSet(value){
    this.confluenceResultset=value;
  }

  getConfluenceResultset(){
    return this.confluenceResultset;
  }

  setSearchText(value:string){
    this.searchText = value;
  }

  getSearchText(){
    return this.searchText;
  }

  refreshResults(value:string){
    // const url='';
    const url=environment.baseServiceUrl + 'searchJira/' + value;
    return this.http.get(url,value)
    .map((response)=>{
      const data=response.json();
      this.resultset = data;
      return data;
      // console.log(response);
      // return this.getResultset();
    })
  }

  getConfluenceResults(value:string){
    // const url='';
    const url=environment.baseServiceUrl + 'searchConfluence/' + value;
    return this.http.get(url,value)
    .map((response)=>{
      const data=response.json();
      this.resultset = data;
      return data;
      // console.log(response);
      // return this.getConfluenceResultset();
    })
  }
  postQuestion(question:any){
    const url='';
    return this.http.post(url,question);
  }

}
