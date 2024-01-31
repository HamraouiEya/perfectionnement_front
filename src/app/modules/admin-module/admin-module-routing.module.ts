import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListActualiteComponent } from './list-actualite/list-actualite.component';

const routes: Routes = [
  {path:'',component: AdminDashboardComponent,
  children: [
    { path: 'actualites', component: ListActualiteComponent },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
