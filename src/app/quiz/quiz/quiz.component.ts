import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Qns } from 'src/app/interfaces/qns';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { NgForm,FormsModule} from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router ,ActivatedRoute} from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';

@Component({
  selector: 'app-miss',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class QuizComponent implements OnInit {
  sample:string|null='';
  public users1:Array<Qns>=[];//nnn-it is for questions array
  public users2:Array<number>=[];//nnn-it saves answers
  constructor(private b:DataserviceService,
    private c:Router,private route:ActivatedRoute){
  }
  ngOnInit(){ 
    this.sample=localStorage.getItem("name");
    this.b.getsinglequestions(1).subscribe(j=>this.users1=j);
  }
  // changepage(id:number){
  //   if(id<=10){
  //   this.b.getsinglequestions(id+1).subscribe(j=>this.users1=j);
  //   }
  // }
  // submit(f:NgForm){
  //   let aa:number=f.value.r;
  //   this.users2.push(aa);
  // }
  // submitfinal(){
  //   this.b.setusersanswers(this.users2);
  //   localStorage.setItem("test","0");
  //   localStorage.setItem("review","1");
  //   this.c.navigate(['../review'],{relativeTo:this.route});
  // }

  submitfinal(f:NgForm){
    let aa:number=f.value.r;
    this.users2.push(aa);
    this.b.setusersanswers(this.users2);
    localStorage.setItem("test","0");
    localStorage.setItem("review","1");
    this.c.navigate(['../review'],{relativeTo:this.route});
  }
  changepage(id:number,f:NgForm){
    console.log(f);
    let aa:number=f.value.r;
    this.users2.push(aa);
    if(id<=10){
    this.b.getsinglequestions(id+1).subscribe(j=>this.users1=j);
    }
  }
  submit(){
   
  }
}