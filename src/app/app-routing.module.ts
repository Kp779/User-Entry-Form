import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { UserListComponent } from './MyComponents/user-list/user-list.component';
import { UserFormComponent } from './MyComponents/user-form/user-form.component';

const routes: Routes = [
{
  path: "user-list",
  component : UserListComponent
},
{
  path: "addNewUser/:id",
  component: UserFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
