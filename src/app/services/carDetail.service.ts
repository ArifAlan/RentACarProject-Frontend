import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44327/api/Cars/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"GetCarDetailsByCarId?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }
}