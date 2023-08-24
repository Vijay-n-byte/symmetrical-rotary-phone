import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewresultComponent } from './reviewresult/reviewresult.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  {path:'',component:StartComponent},
    {path:'quiz',component:QuizComponent},
    {path:'review',component:ReviewresultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }