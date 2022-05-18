import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/carDetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  //carImages:CarImage[] =[];
  constructor(
    private CarDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        console.log(params['carId']);
        this.getCarDetails(params['carId']);
     
      }
    });
  }

  getCarDetails(carId: Number) {
    this.CarDetailService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
      console.log(response.data);
    });
   
  }

  addToCart(carDetail:CarDetail){
    this.toastrService.success("Kiralandı",carDetail.modelName);

  }


  // getCarImagesByCarId(carId: Number) {
  //   this.carImageService.getCarImages(carId).subscribe((response) => { 
  //     this.carImages = response.data
  //     console.log(this.carImages)
  //   })
  // }
}
