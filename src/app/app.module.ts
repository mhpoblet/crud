import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { InfoComponent } from './components/info/info.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InfoServiceService } from './info-service.service';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
  path: '',
  component: AddComponent
  },
  {
  path: 'add',
  component: AddComponent
  },
  {
  path: 'edit/:id',
  component: EditComponent
  },
  {
  path: 'info',
  component: InfoComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    InfoComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ InfoServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
