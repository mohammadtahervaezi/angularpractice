import {CourseCategory} from './CourseCategory.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CourseCategoryServices {
  public url="http://localhost:5050/weatherforecast";
   constructor(private http:HttpClient){

   }
   public  getall():Observable<Array<CourseCategory>>{

    var myarray= this.http.get<Array<CourseCategory>>(this.url);
     debugger;
     return myarray;
   }
   public  delete(id:number):Observable<any>{
     var myurl=this.url+"/"+id;
     return this.http.delete(myurl);
   }
   public  save(model:CourseCategory):Observable<any>{
     debugger;
   return this.http.post(this.url,model);
   }
 }
