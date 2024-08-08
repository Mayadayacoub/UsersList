import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserDetailedInformationComponent } from './pages/user-detailed-information/user-detailed-information.component';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: ':users/:id', component: UserDetailedInformationComponent },
  { path: '**', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
