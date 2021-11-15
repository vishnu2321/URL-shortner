import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service:ApiserviceService) {
    setTimeout(async ()=>{
      this.tableData=await this.service.getTableData();
      this.loading=false;
      this.seperateData();
    },1500);
  }

  tableData:any;
  links:any;
  sorted_links:any;
  loading=true;
  
  ngOnInit(): void {}

  seperateData(){
    this.links=this.tableData['links'];
    this.sorted_links=this.tableData['sorted_links'];
  }

  getClicks(link:string){
    let clicks=0;
    this.sorted_links.map((item:any)=>{
      if(item.id==link){
        clicks=item.clicks;
      }
    })
    return clicks;
  }
}
