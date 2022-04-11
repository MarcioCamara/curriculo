import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateResumeComponent } from './pages/generate-resume/generate-resume.component';

const routes: Routes = [
  {
    path: 'generate-resume',
    component: GenerateResumeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'generate-resume',
  },
  {
    path: '**',
    redirectTo: 'generate-resume',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
