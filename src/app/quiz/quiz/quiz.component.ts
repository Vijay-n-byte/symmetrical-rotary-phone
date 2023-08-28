import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Qns } from 'src/app/interfaces/qns';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { NgForm,FormsModule} from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router ,ActivatedRoute} from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import {Subject, interval,take, takeUntil} from 'rxjs';
import { BaseDetails } from 'src/app/base_details';
import { Testdetails } from 'src/app/interfaces/testdetails';

@Component({
  selector: 'app-miss',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class QuizComponent implements OnInit,OnDestroy{
  totalques:number=0;
  sample:string|null='';
  y:number=0;
  timee=interval(1000).subscribe(n=>{
    this.y--;
    if(this.y===0){
      this.b.setusersanswers(this.users2);
      localStorage.setItem("review","1");
      this.c.navigate(['../review'],{relativeTo:this.route});
    }
  } 
    );

  public users1:Array<Qns>=[];//nnn-it is for questions array
  public users2:Array<number>=[];//nnn-it saves answers
  constructor(private b:DataserviceService,
    private c:Router,private route:ActivatedRoute){
  }
  ngOnInit(){ 
    this.b.getdetails().subscribe(n=>{
      this.totalques=n[0].Totalquestions;
      this.y=n[0].Totaltimings;
    });
    this.sample=localStorage.getItem("name");
    this.b.getsinglequestions(1).subscribe(j=>this.users1=j);
    localStorage.setItem("test","0");//now
  }
  ngOnDestroy(): void {
    this.timee.unsubscribe();
  }

  submitfinal(f:NgForm){
    let aa:number=f.value.r;
    this.users2.push(aa);
    this.b.setusersanswers(this.users2);
    localStorage.setItem("review","1");
    this.c.navigate(['../review'],{relativeTo:this.route});
  }
  changepage(id:number,f:NgForm){
    let aa:number=f.value.r;
    this.users2.push(aa);
    // if(id<=10){
    if(id<=this.totalques){
    this.b.getsinglequestions(id+1).subscribe(j=>this.users1=j);
    }
  }
  submit(){
   
  }
}