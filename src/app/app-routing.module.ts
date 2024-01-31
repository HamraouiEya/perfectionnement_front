import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {path:"login",component:AdminLoginComponent},
  {
    path: 'admin',
    canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import('./modules/admin-module/admin-module.module').then((m) => m.AdminModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
