import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewListComponent} from './new-list/new-list.component';
import {NewDetailComponent} from './new-detail/new-detail.component';
import {NewArchivedComponent} from './new-archived/new-archived.component';
import {NewCreateNewComponent} from './new-create-new/new-create-new.component';

//Definimos rutas
const routes: Routes = [
  { path: 'news', component: NewListComponent }, 
  { path: 'new/:id', component: NewDetailComponent },
  { path: 'news-archived', component: NewArchivedComponent },
  { path: 'news-create-new', component: NewCreateNewComponent },
  { path: '', redirectTo: '/news', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
