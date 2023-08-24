import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Qns } from '../interfaces/qns';
import { Answers } from '../interfaces/answers';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

 // http://localhost:3000/Questions/?Qno=2

  private root:string="http://localhost:3000/Questions";
  private root1:string="http://localhost:3000/Questions/?Qno";
  private root2:string="http://localhost:3000/Answers";
  public useranswers:Array<number>=[];


  constructor(private http:HttpClient) { }
  
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
   
    console.log(this.getusersanswer);
    return this.useranswers;
  }

  getcorrectanswers():Observable<Answers[]>{
    return this.http.get<Array<Answers>>(this.root2);
  }
}
