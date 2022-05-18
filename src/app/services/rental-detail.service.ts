import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  apiUrl="https://localhost:44327/api/Rentals/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+"GetRentalDetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
   }
}
