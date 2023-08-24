import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewresultComponent } from './reviewresult/reviewresult.component';
import { StartComponent } from './start/start.component';
import { testguardGuard } from '../guards/testguard.guard';
import { reviewguardGuard } from '../guards/reviewguard.guard';


const routes: Routes = [
  {path:'',component:StartComponent},
    {path:'quiz',component:QuizComponent,canActivate:[testguardGuard]},
    {path:'review',component:ReviewresultComponent,canActivate:[reviewguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }