import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DespesasComponent } from './despesas/despesas.component';
import {FormsModule} from '@angular/forms';
import {NgbDateAdapter, NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomAdapter} from './support/CustomAdapter';
import {CustomDateParserFormatter} from './support/CustomDateParserFormatter';

@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule
    ],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
