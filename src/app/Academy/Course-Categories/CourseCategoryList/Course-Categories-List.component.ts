import {Component, OnInit} from '@angular/core';
import {CourseCategory} from '../Shared/CourseCategory.model';
import {CourseCategoryServices} from '../Shared/CourseCategory.services';
import {DialogRef, DialogService} from '@progress/kendo-angular-dialog';
import {CourseCatregoryComponent} from '../Course-Category/Course-Category.component';
import {OK} from '../../shared/Dialogresults.constant';


@Component({
  selector: 'course-category-list',
  templateUrl: './Course-Category-List.component.html'

})

export class CourseCatregoryListComponent implements OnInit {

  public CourseCategories: Array<CourseCategory>;

  constructor(private services: CourseCategoryServices, private dialogService: DialogService) {

  }

  ngOnInit(): void {
    this.loadtree();
  }

  public loadtree(): Array<CourseCategory> {
    this.services.getall().subscribe(a => {
      this.CourseCategories = a;
    });
    return this.CourseCategories;
  }

  deleting(dataItem): void {
    this.services.delete(dataItem.id).subscribe(a => {
      alert("آیتم پاک شد");
      this.loadtree();
    })
  }

  editing(dataItem): void {
    alert(`editing ${dataItem.id}`);
  }

  addroot(): void {
    const dialogRef = this.dialogService.open({
      title: 'Please confirm',
      content: CourseCatregoryComponent

    });
    dialogRef.result.subscribe(a=>{
if (a==OK){
this.loadtree();
}
    })
  }
}
