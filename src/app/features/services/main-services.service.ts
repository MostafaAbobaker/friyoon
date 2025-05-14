import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/icategory';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {

  constructor(private _http:HttpClient) { }

  getMainServices():Observable<any>{
    return this._http.get('Category/GetAllCategories');

  }
  getMainServicesById(id:number):Observable<any>{
    return this._http.get(`Category/GetCategoryById/${id}`);

  }

   AddCategory(category:ICategory) : Observable<any> {

    const formData = new FormData();
            // Append the id
    formData.append('nameAr', category.nameAr);
    formData.append('descriptionAr', category.descriptionAr);
    formData.append('imagefile', category.imagefile); // File can be null
    formData.append('iconfile', category.iconfile); // File can be null
    return this._http.post(`Category/AddCategory`, formData);

  }



   updateCategory(category:ICategory  ) : Observable<any> {
    const formData = new FormData();

    formData.append('id', category.id.toString());
    formData.append('nameAr', category.nameAr);
    formData.append('descriptionAr', category.descriptionAr);
    formData.append('imagefile', category.imagefile); // File can be null
    formData.append('iconfile', category.iconfile); // File can be null
    return this._http.put(`Category/UpdateCategory`, formData);
    }

  deleteCategory(id:number):Observable<any> {
    return this._http.delete(`Category/DeleteCategory/${id}`);
  }
}
