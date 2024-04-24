import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  categories: any = []
  products: any = []
  nuts: boolean = false
  spiciness: any = "Not Chosen"
  spicinessValue: any = 0

  constructor(public apiService: ProductsService) {
    this.getAllProducts()
  }

  ngOnInit(){
    this.apiService.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })


  }

  categoryFilter(id: any) {
    this.apiService.getCategoryById(id).subscribe((data: any) => {
      this.products = data.products
    })
  }

  getAllProducts() {
    this.apiService.getAllProducts().subscribe((data: any) => {
      this.products = data
    })
  }

  spicinessChange(){
    if(this.spicinessValue == 0){
      this.spiciness = "Not Chosen"
    }else {
      this.spiciness = this.spicinessValue - 1
    }
  }

  reset() {
    this.spiciness = "Not Chosen"
    this.spicinessValue = 0
  }

  filter() {

  }
}
