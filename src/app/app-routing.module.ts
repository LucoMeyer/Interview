import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { PageComponent } from './page/page.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  { path: '', redirectTo: '/help', pathMatch: 'full' }, // Redirect empty path to 'help'
  { path: 'help', component: HelpComponent },
  { path: 'page', component: PageComponent },
  { path: 'tech', component: TechComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
