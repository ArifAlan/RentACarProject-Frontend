import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44327/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetAll"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getCarsByBrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getCarsByColor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getCarByDetails(Id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getCarsById?Id="+Id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }

   getCarsByColorAndBrand(colorId:number,brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getCarsByColorIdAndBrandId?colorId="+colorId+"&brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   add(car:Car):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
   }
  
}
