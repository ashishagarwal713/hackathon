import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  public searchText: string='';

  public resultset:any[]=[];

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
//       "type":"Sub-task",
//       "key":'PR06425-332',
//       "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
//       "Assignee" : 'N189935',
//       "Reportee" : 'NDH00075',
//       "status" : 'In Progress',
//       "Created" : 'Date',
//       "Updated" : 'Date',
//       "project_key": 'PR06425',
//       "project_name" : 'R&D Resource Management System Ph1'
//       },{
//         "source":1,
//         "type":"Sub-task",
//         "key":'PR06425-332',
//         "summary": 'Backend Dev: Create an API to get all data from Workforce fact table based on department',
//         "Assignee" : 'N189935',
//         "Reportee" : 'NDH00075',
//         "status" : 'To Do',
//         "Created" : 'Date',
//         "Updated" : 'Date',
//         "project_key": 'PR06425',
//         "project_name" : 'R&D Resource Management System Ph1'
//       }
//     ];

  constructor(private http:Http) { }

  setResultSet(value){
    this.resultset=value;
  }

  getResultset(){
    return this.resultset;
  }

  setSearchText(value:string){
    this.searchText = value;
  }

  getSearchText(){
    return this.searchText;
  }

  refreshResults(value:string){
    // const url='';
    const url=environment.baseServiceUrl + value;
    return this.http.get(url,value)
    .map((response)=>{
      const data=response.json();
      this.resultset = data;
      return data;
      // console.log(response);
      // return this.getResultset();
    })
  }
}
