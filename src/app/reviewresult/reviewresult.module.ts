import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewresultComponent } from './reviewresult/reviewresult.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ReviewresultComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[ReviewresultComponent],
})
export class ReviewresultModule { }
