import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StatusFilterComponent } from "./status-filter/status-filter.component";
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [
        StatusFilterComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule
    ],
    exports: [
        StatusFilterComponent,
    ]
  })
  export class ComponentModule { }