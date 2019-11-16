import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCatregoryListComponent} from './Course-Categories/CourseCategoryList/Course-Categories-List.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {academyRoutes} from '../Academy/Course-Categories/academy.route'
import {CourseCategoryServices} from './Course-Categories/Shared/CourseCategory.services';
import {HttpClientModule} from '@angular/common/http';
import {TreeViewModule} from '@progress/kendo-angular-treeview';
import {CourseCatregoryComponent} from './Course-Categories/Course-Category/Course-Category.component';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [CourseCatregoryListComponent,CourseCatregoryComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TreeViewModule,
    RouterModule.forRoot(academyRoutes),
    ButtonsModule,
    DialogsModule,
    FormsModule
  ],
  entryComponents:[CourseCatregoryComponent],
  exports:[CourseCatregoryListComponent,CourseCatregoryComponent],
  providers:[CourseCategoryServices]
})

export class AcademyModule { }
