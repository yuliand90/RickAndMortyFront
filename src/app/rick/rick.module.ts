import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickRoutingModule } from './rick-routing.module';
import { MortyComponent } from './components/morty/morty.component';


@NgModule({
  declarations: [
    MortyComponent
  ],
  imports: [
    CommonModule,
    RickRoutingModule
  ]
})
export class RickModule { }
