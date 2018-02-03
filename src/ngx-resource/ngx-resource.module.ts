import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  declarations: [],
  providers: [HttpClientService],
  exports: []
})
export class NgxResourceModule { }
