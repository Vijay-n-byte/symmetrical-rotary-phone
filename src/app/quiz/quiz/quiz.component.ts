import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Qns } from 'src/app/interfaces/qns';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { NgForm,FormsModule} from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miss',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class QuizComponent implements OnInit {

  
  public users1:Array<Qns>=[];
  public users2:Array<number>=[];
  public users4:Array<string>=[];
  public user3:number[]=[];

 
  constructor(private b:DataserviceService,
    private c:Router){
  }

  ngOnInit(){ 
    // this.b.getquestions().subscribe(u=>this.users=u);
    this.b.getsinglequestions(1).subscribe(j=>this.users1=j);
   // console.log(this.users1);
  }

  changepage(id:number){
    if(id<=10){
    this.b.getsinglequestions(id+1).subscribe(j=>this.users1=j);
    }
    else{
      
    }
  }

  submit(f:NgForm){
    let aa:number=f.value.r;
  //  let aaa:string;
    this.users2.push(aa);
  }

  submitfinal(){
    this.b.setusersanswers(this.users2);
    this.c.navigate(['review']);
  }
}