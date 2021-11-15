import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-urlshortnerform',
  templateUrl: './urlshortnerform.component.html',
  styleUrls: ['./urlshortnerform.component.css']
})
export class UrlshortnerformComponent implements OnInit {

  constructor(private service:ApiserviceService,private route:Router) { }

  ngOnInit(): void {}

  URL_to_be_shorted:string = '';
  run:boolean=false;
  result='';

  updateURL(event:Event){
    this.URL_to_be_shorted=(event.target as HTMLInputElement).value;
  }

  async shortURL(){
    if (this.URL_to_be_shorted===''){
      return;
    }
    await this.service.getData(this.URL_to_be_shorted);
    this.result=this.service.getResult();
    this.run=true;
  }

  clearURL(){
    this.run=false;
    this.URL_to_be_shorted='';
  }

  toHistoryPage(){
    this.route.navigate(['history']);
  }
}
