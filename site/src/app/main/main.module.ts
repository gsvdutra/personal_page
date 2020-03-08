import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { AcademicComponent } from './academic/academic.component';
import { ProfissionalComponent } from './profissional/profissional.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        MainPageComponent,
        AcademicComponent,
        ProfissionalComponent
    ]
})

export class MainModule { }
