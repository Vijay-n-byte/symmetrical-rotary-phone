import { Component, OnInit } from '@angular/core';
import { Answers } from 'src/app/interfaces/answers';
import { Qns } from 'src/app/interfaces/qns';
import { DataserviceService } from 'src/app/services/dataservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reviewresult',
  templateUrl: './reviewresult.component.html',
  styleUrls: ['./reviewresult.component.css']
})
export class ReviewresultComponent implements OnInit{

  public fin:Array<number>=[];
  public cfin:Array<Answers>=[];
  public cfinqns:Array<Qns>=[];
  coo:number=0;


  constructor(private p:DataserviceService,private d1:Router){}
  ngOnInit() {
    this.fin=this.p.getusersanswer();
    this.p.getcorrectanswers().subscribe(u=>this.cfin=u);
    this.p.getquestions().subscribe(y=>this.cfinqns=y);
    localStorage.clear();
  }

  
  opp(m:number){
   let b:number=this.fin[m];
    if(this.cfin[m].ans==b){
      this.coo++;
      return true;
    }
    else{
      return false;
    }
  }
  removecred(){
    
   // localStorage.clear();
    this.d1.navigate(['home']);
  }
}
