// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    StudentTableComponent,
    UpdatestudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

