import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PrikazprakseComponent } from './prikazprakse/prikazprakse.component';
import { DetaljanPregledPrakseComponent } from './detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DnevnikRadaComponent } from './dnevnik-rada/dnevnik-rada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OdbijanjeComponent } from './odbijanje/odbijanje.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PraksaItemComponent } from '../mentor/praksa-item/praksa-item.component';
import { InternshipViewComponent } from './internship-view/internship-view.component';


@NgModule({
  declarations: [
    FooterComponent,
    PrikazprakseComponent,
    DetaljanPregledPrakseComponent,
    DnevnikRadaComponent,
    OdbijanjeComponent,
    PraksaItemComponent,
    InternshipViewComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[FooterComponent,PrikazprakseComponent,DetaljanPregledPrakseComponent, DnevnikRadaComponent,InternshipViewComponent]
})
export class SharedModule { }