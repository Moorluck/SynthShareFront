import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SynthComponent } from './pages/synth/synth.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignUpComponent},
  {path: "synth", component: SynthComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
