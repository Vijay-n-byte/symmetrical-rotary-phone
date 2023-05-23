import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from './quiz/quiz.module';
import { DataserviceService } from './services/dataservice.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ReviewresultModule } from './reviewresult/reviewresult.module';
import { HomepageComponent } from './homepage/homepage.component';






@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    QuizModule,
    CommonModule,
    HttpClientModule,
    ReviewresultModule,
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
