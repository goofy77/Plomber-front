import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "app/login/login.component";
import {RegistrationComponent} from "../user/registration/registration.component";
import {MenuComponent} from "../menu/menu.component";
import {AuthGuard} from "../security/auth.guard";
import {DrawingUploadComponent} from "../upload/upload.component";
import {AccountComponent} from "../account/account.component";
import {ProjectCreatorComponent} from "../project-creator/project-creator.component";
import {ProjectListComponent} from "../project/list/project-list.component";
import {ProjectComponent} from "../project/project.component";
import {DrawingComponent} from "../project/drawing/drawing.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: 'drawing/:id', component: DrawingComponent},
  // {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  {
    path: 'menu', component: MenuComponent, canActivate: [AuthGuard],
    children: [
      {path: 'upload', component: DrawingUploadComponent},
      {path: 'account' ,component: AccountComponent},
      {path: 'create', component: ProjectCreatorComponent, canActivate: [AuthGuard]},
      {
        path: 'projects', component: ProjectListComponent, children: [
        {path: ':id', component: ProjectComponent, canActivate: [AuthGuard]}
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
