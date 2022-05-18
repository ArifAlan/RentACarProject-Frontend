import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';

import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  arabalar: Car[];
  colors: Color[] = [];
  brands: Brand[] = [];
  branddFilter: number;
  colorrFilter: number;
  dataLoaded = false;
  filterText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId'] && params['brandId']) {
        console.log('ngOnitiniçerisi');
        this.getAbc(params['colorId'], params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
        console.log('color');
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
        console.log('brand');
      } else {
        console.log('elsinamk');
        this.getBrands();
        this.getColors();
        this.getCars();
      }
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  addToCart(car: Car) {
    this.toastrService.success('Kiralandı', car.modelName);
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      console.log(response.data);
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      console.log(response.data);
    });
  }
  
  getAbc(colorId:number,brandId:number){
   this.carService.getCarsByColorAndBrand(colorId,brandId).subscribe(a=>{
     this.cars=a.data;
     console.log("1",this.cars)
   })
   console.log("2")
  }
 
}
