import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { LoginFormComponent } from './compontents/login-form/login-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomUserComponent } from './compontents/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './compontents/nav/nav.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { KabanTasksComponent } from './compontents/kaban-tasks/kaban-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent } from './compontents/task/task.component';
import { LifeCycleDirective } from './directives/life-cycle.directive';
import { MouseOverDirective } from './directives/mouse-over.directive';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginFormComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsDetailPageComponent,
    ContactsPageComponent,
    NombreCompletoPipe,
    RandomContactPageComponent,
    RandomUserComponent,
    AppComponent,
    DashboardComponent,
    NavComponent,
    TasksPageComponent,
    KabanTasksComponent,
    TaskComponent,
    LifeCycleDirective,
    MouseOverDirective,
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    //Formularios reactivos:
    ReactiveFormsModule,
    //Modulo personalizado de angular material
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
