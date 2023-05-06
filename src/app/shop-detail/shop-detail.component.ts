import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  constructor() { }
 
  isJqueryWorking: any;
  slides = [
    {id: 1,title:"test", img: "../../images/product-1.jpg",rate:499,oldrate:599},
    {id: 2,title:"test", img: "../../images/product-1.jpg",rate:499,oldrate:599},
    {id: 3,title:"test", img: "../../images/product-1.jpg",rate:499,oldrate:599},
    {id: 4,title:"test", img: "../../images/product-1.jpg",rate:499,oldrate:599},
    {id: 5,title:"test", img: "../../images/product-1.jpg",rate:499,oldrate:599}
  ];
  
  customOptions: OwlOptions = {
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
  }
  ngOnInit(): void {
  
  }

}
