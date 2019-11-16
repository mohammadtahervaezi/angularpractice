import {Component, OnInit} from '@angular/core';
import {CourseCategory} from '../Shared/CourseCategory.model';
import {CourseCategoryServices} from '../Shared/CourseCategory.services';
import {DialogRef} from '@progress/kendo-angular-dialog';
import {OK} from '../../shared/Dialogresults.constant';


@Component({
  selector: 'course-category',
  templateUrl: './Course-Category.component.html'

})

export class CourseCatregoryComponent implements OnInit{
private model:CourseCategory;
public CourseCategories:Array<CourseCategory>;
  constructor(private dialog:DialogRef,private services:CourseCategoryServices) {
   this.model=new CourseCategory()
  }

  ngOnInit(): void {
  }


  close():void {
    debugger;

  }

  save():void {
    debugger;
    this.services.save(this.model).subscribe(a=>{
      this.dialog.close(OK);
    });

  }
}
