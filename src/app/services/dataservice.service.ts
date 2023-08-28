import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Qns } from '../interfaces/qns';
import { Answers } from '../interfaces/answers';
import { BaseDetails } from '../base_details';
import { Testdetails } from '../interfaces/testdetails';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

 // http://localhost:3000/Questions/?Qno=2
  private url:string=BaseDetails.url;
  private detailsurl:string=this.url+"Details";
  private root:string=this.url+"Questions";
  private root1:string=this.url+"Questions/?Qno";
  private root2:string=this.url+"Answers";
  public useranswers:Array<number>=[];


  constructor(private http:HttpClient) { }
  getdetails():Observable<Testdetails[]>{
    return this.http.get<Testdetails[]>(this.detailsurl);
  }
  
  getquestions():Observable<Qns[]>{
  return this.http.get<Qns[]>(this.root);
   } 

  getsinglequestions(d:number):Observable<Qns[]>{
    let a:string=`${this.root1}=${d}`;
    return this.http.get<Qns[]>(a);
  }

  setusersanswers(u:Array<number>){
    this.useranswers=u;
  }

  getusersanswer(){
    return this.useranswers;
  }

  getcorrectanswers():Observable<Answers[]>{
    return this.http.get<Array<Answers>>(this.root2);
  }
}
