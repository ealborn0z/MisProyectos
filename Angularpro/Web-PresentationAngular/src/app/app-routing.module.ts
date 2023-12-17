import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPresentationComponent } from './web-presentation/web-presentation.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', component: WebPresentationComponent },
  { path: 'presentation', component: WebPresentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{useClass: HashLocationStrategy, provide: LocationStrategy }]
})
export class AppRoutingModule { }
