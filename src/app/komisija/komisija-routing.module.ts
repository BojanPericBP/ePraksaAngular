import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljanPregledPrakseComponent } from '../shared/detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { DnevnikRadaComponent } from '../shared/dnevnik-rada/dnevnik-rada.component';
import { MenotrReportComponent } from '../shared/menotr-report/menotr-report.component';
import { SutdentProfilComponent } from '../student/sutdent-profil/sutdent-profil.component';
import { AuthGuard } from '../_guards/auth.guard';
import { KomisijaGuard } from '../_guards/komisija.guard';
import { InternshipsComponent } from './components/internships/internships.component';
import { KomisijaWrapperComponent } from './components/komisija-wrapper/komisija-wrapper.component';
import { PregledPraktikanataComponent } from './components/pregled-praktikanata/pregled-praktikanata.component';
import { PregledStudentaComponent } from './components/pregled-studenta/pregled-studenta.component';
import { ZahtjeviZaPrakseComponent } from './components/zahtjevi-za-prakse/zahtjevi-za-prakse.component';

const routes: Routes = [
  {
    path: '', component: KomisijaWrapperComponent,
    canActivate: [AuthGuard, KomisijaGuard],
    children: [
      {
        path: '', redirectTo: 'internships', pathMatch: 'full',
      },
      {
        path: 'internships', component: ZahtjeviZaPrakseComponent,
      },
      {
        path: 'internships/:id/details',
        component: DetaljanPregledPrakseComponent
      },
      {
        path: 'internships/:internshipId/students', component: PregledPraktikanataComponent,
      },
      {
        path: ':id/profile', component: SutdentProfilComponent
      },
      {
        path: 'internships/:internshipId/students/:studentId/work-diary', component: DnevnikRadaComponent,
      },
      {
        path: 'internships/:internshipId/students/:studentId/mentor-report', component: MenotrReportComponent
      },
      {
        path: 'internships_view', component: InternshipsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KomisijaRoutingModule { }
