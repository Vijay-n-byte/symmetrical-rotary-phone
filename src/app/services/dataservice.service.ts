import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Qns } from '../interfaces/qns';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Answers } from '../interfaces/answers';
import { Finalrepo } from '../interfaces/finalrepo';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

 // http://localhost:3000/Questions/?Qno=2

  private root:string="http://localhost:3000/Questions";
  private root1:string="http://localhost:3000/Questions/?Qno";
  private root2:string="http://localhost:3000/Answers";
  public useranswers:Array<number>=[];
  public finalreport:Array<Finalrepo>=[];
  public users1:Array<{Qno:number,
    question:string,
    option1:string,
    option2:string,
    option3:string,
    option4:string}>=[];
   users2!: Qns[];
   user3:any;
   public users12:Array<Qns>=[];

  constructor(private http:HttpClient) { }

  getquestions():Observable<Qns[]>{
 
  // this.http.get<Array<Qns>>(this.root).subscribe(u=>this.v=Array<Qns>(u));

  return this.http.get<Qns[]>(this.root);
   }

   getquestions1():void{
 
    // this.http.get<Array<Qns>>(this.root).subscribe(u=>this.v=Array<Qns>(u));
     this.http.get<Array<Qns>>(this.root).subscribe(u=>this.users12=u);
     }
 

  getsinglequestions(d:number):Observable<Qns[]>{
    let a:string=`${this.root1}=${d}`;
    return this.http.get<Qns[]>(a);
  }

  setusersanswers(u:Array<number>){
    this.useranswers=u;
  }

  getusersanswer(){
   
    console.log(this.getusersanswer);
    return this.useranswers;
  }

  getcorrectanswers():Observable<Answers[]>{
    return this.http.get<Array<Answers>>(this.root2);
  }
}
