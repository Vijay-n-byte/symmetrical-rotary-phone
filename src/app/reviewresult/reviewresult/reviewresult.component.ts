import { Component, OnInit } from '@angular/core';
import { Answers } from 'src/app/interfaces/answers';
import { Finalrepo } from 'src/app/interfaces/finalrepo';
import { Qns } from 'src/app/interfaces/qns';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-reviewresult',
  templateUrl: './reviewresult.component.html',
  styleUrls: ['./reviewresult.component.css']
})
export class ReviewresultComponent implements OnInit{

  public fin:Array<number>=[];
  public hh:number[]=[];
  public cfin:Array<Answers>=[];
  public cfinqns:Array<Qns>=[];
  public pp:string="pp";
  co:Array<number>=[];
  coo:number=0;
  public final:Array<Finalrepo>=[];
  sam="poo";

  constructor(private p:DataserviceService){}
  ngOnInit() {
    this.fin=this.p.getusersanswer();
    this.hh=this.p.getusersanswer();
    this.p.getcorrectanswers().subscribe(u=>this.cfin=u);
    this.p.getquestions().subscribe(y=>this.cfinqns=y);

  }

  
  opp(m:number){
   let b:number=this.fin[m];
    if(this.cfin[m].ans==b){
      return true;
    }
    else{
      return false;
    }
     
  }
}
