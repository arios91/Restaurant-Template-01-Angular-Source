import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Injectable()
export class ProductService{
    products: Product[] =[
        {name: 'product 1', description: 'short product description', category: 'category1', price: 9.70},
        {name: 'product 2', description: 'short product description', category: 'category1', price: 10.78},
        {name: 'product 3', description: 'short product description', category: 'category1', price: 11.36},
        {name: 'product 13', description: 'short product description', category: 'category1', price: 9.70},
        {name: 'product 14', description: 'short product description', category: 'category1', price: 10.78},
        {name: 'product 15', description: 'short product description', category: 'category1', price: 11.36},
        {name: 'product 16', description: 'short product description', category: 'category1', price: 14.76},
        {name: 'product 17', description: 'short product description', category: 'category1', price: 14.76},
        {name: 'product 4', description: 'short product description', category: 'category2', price: 15.60},
        {name: 'product 5', description: 'short product description', category: 'category2', price: 13.17},
        {name: 'product 6', description: 'short prodcut description', category: 'category2', price: 17.99},
        {name: 'product 18', description: 'short product description', category: 'category2', price: 15.60},
        {name: 'product 19', description: 'short product description', category: 'category2', price: 13.17},
        {name: 'product 20', description: 'short prodcut description', category: 'category2', price: 15.59},
        {name: 'product 21', description: 'short prodcut description', category: 'category2', price: 17.99},
        {name: 'product 22', description: 'short prodcut description', category: 'category2', price: 13.71},
        {name: 'product 7', description: 'short sides description', category: 'sides', price: 4.00},
        {name: 'product 8', description: 'short sides description', category: 'sides', price: 3.25},
        {name: 'product 9', description: 'short sides description', category: 'sides', price: 5.50},
        {name: 'product 10', description: 'short drink description', category: 'drinks', price: 6.99},
        {name: 'product 11', description: 'short drink description', category: 'drinks', price: 4.45},
        {name: 'product 12', description: 'short drink description', category: 'drinks', price: 3.99},
    ];


  constructor() {
  }

  getArrangements(){
    //get addons first and create map
    return this.products;
  }
}
