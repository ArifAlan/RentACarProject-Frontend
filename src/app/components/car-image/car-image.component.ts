import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
carImages:CarImage[]=[];
currentCarImage:CarImage;
baseUrl="https://localhost:44327/Uploads/Images/"
  constructor(private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        console.log(params['carId']);
       this.getCarImagesByCarId(params['carId'])
      }
    
    });
  }

  setCurrentBrand(carImage:CarImage){
    this.currentCarImage=carImage;
  }
 

  getCarImagesByCarId(carId: Number) {
    this.carImageService.getCarImages(carId).subscribe((response) => { 
      this.carImages = response.data
      console.log(this.carImages)
    })
  }

  getActiveImageClass(carImage:CarImage){
    if (carImage===this.carImages[0]) {
      return "active"
    } else {
      return ""
    }
  }
}
