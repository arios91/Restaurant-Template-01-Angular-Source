import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProducts: Product[];
  products: Product[];
  pages: string[] = [];
  productsPerPage = 4;
  currentPage = 0;
  renderPages: boolean = false;
  productPages: Product[][] = [];
  atBeginning:boolean = true;
  atEnd:boolean = false;


  selectedCategory:string = 'category1';

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.allProducts = this.productService.getArrangements();
    console.log(this.products);
    this.filterCategory('category1');
  }

  filterCategory(category:string){
    this.products = [];
    this.currentPage = 0;
    for(let product of this.allProducts){
      if(category  === product.category){
        this.products.push(product);
      }
    }
    this.buildProductPages();
  }

  buildProductPages(){
    var counter = 0;
    var arrX = 0;
    this.pages = [];
    this.productPages = [];
    console.log(this.productPages);
    for(let arrangement of this.products){
      if(counter == 0){
        this.productPages[arrX] = [];
        this.pages.push(this.pages.length.toString(10));
      }


      this.productPages[arrX][counter] = arrangement;
      if(counter == this.productsPerPage-1){
        counter = 0;
        arrX++;
      }else{
        counter++;
      }
    }
    this.setPageBooleans();
  }

  setPageBooleans(){
    if(this.productPages.length > 1){
      this.renderPages = true;
      if(this.currentPage == 0){
        this.atBeginning = true;
        this.atEnd = false;
      }
      if(this.currentPage == this.pages.length-1){
        this.atEnd = true;
        this.atBeginning = false;
      }
      if(this.currentPage > 0 && this.currentPage < this.pages.length-1){
        this.atBeginning = false;
        this.atEnd = false;
      }
    }else{
      this.renderPages = false;
    }
  }

  goToPrevious(){
    if(this.currentPage != 0){
      this.currentPage--;
    }
    this.setPageBooleans();
  }
  goToNext(){
    if(this.currentPage < this.pages.length-1){
      this.currentPage++;
    }
    this.setPageBooleans();
  }
  goToPage(pageIndex){
    this.currentPage = pageIndex;
    this.setPageBooleans();
  }

}
