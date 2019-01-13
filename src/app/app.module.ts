import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewArchivedComponent } from './new-archived/new-archived.component';
import { NewCreateNewComponent } from './new-create-new/new-create-new.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    NewDetailComponent,
    NewArchivedComponent,
    NewCreateNewComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
