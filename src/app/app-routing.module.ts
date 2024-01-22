// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'studentsdetails', component: StudentTableComponent },
  { path: 'Update Student', component: UpdatestudentComponent },

  { path: '', redirectTo: '/registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

