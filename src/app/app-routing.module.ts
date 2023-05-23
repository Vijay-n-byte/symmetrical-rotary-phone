import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewresultComponent } from './reviewresult/reviewresult/reviewresult.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizComponent } from './quiz/quiz/quiz.component';

const routes: Routes = [
  { path:'',component:HomepageComponent},
  { path:'review', component: ReviewresultComponent},
  { path:'quiz', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
