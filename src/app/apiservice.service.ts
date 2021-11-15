import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() { }

  private result=''
  private tableData=''

  getResult(){
    return this.result;
  }

  async getTableData(){
    await this.getAllLinks();
    return this.tableData;
  }

  async getData(long_url:string){
     await fetch('https://api-ssl.bitly.com/v4/shorten',{
        method:'POST',
        headers: {
            'Accept':'*/*',
            'Access-Control-Allow-Origin':'*',
            'Authorization': environment.apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { "long_url": long_url, 
            "group_guid": environment.groupID
          }),
    }).then(res=>{
      return res.json();
    }).then(data=>{
      this.result=data.link;
    })
  }


  async getAllLinks(){
    await fetch(`https://api-ssl.bitly.com/v4/groups/${environment.groupID}/bitlinks/clicks?unit=month&units=5&size=25`, {
      headers: {
          'Accept':'*/*',
          'Access-Control-Allow-Origin':'*',
          'Authorization': environment.apiKey
      }
    }).then(res=>{
        return res.json();
    }).then(data=>{
      this.tableData=data;
    })
  }
}
