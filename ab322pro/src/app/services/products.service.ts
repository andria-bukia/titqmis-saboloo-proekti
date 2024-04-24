import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  apiUrl = "https://restaurant.stepprojects.ge/api/"
  
  constructor(private http: HttpClient) { }

  getProducts() {
      return this.http.get(this.apiUrl + `Products/GetFiltered`)
      
  }
  getBasket(){
    return this.http.get(this.apiUrl + "Baskets/GetAll")
  }
  addToBasket(id: any){
    let postReq ={
      "quantity": 1,
      "price": 0,
      "productId": id
    }
    return this.http.post(this.apiUrl + "Baskets/AddToBasket", postReq).subscribe()
  }
  deleteBasket(id: any){
    return this.http.delete(this.apiUrl + `Baskets/DeleteProduct/${id}`).subscribe()
  }
  getCategoriesFunc(id: any){
    return this.http.get(this.apiUrl + `Categories/GetCategory/${id}`).subscribe((data) => {
      console.log(data)
    })
  }
  UpdateBasket(quantity: any, id: any) {
    let putReq = {
      "quantity": quantity,
      "price": 0,
      "productId": id
    }
    return this.http.put(this.apiUrl + `Baskets/UpdateBasket`, putReq).subscribe((data) => {
      console.log(data)
    })
  }
  getFiltered(id1: any,id2: any,id3: any){
    return this.http.get(this.apiUrl + `Products/GetFiltered?vegeterian=${id1}&nuts=${id2}&spiciness=${id3}`).subscribe((data) => {
      console.log(data)
    })
  }

  getAllCategories() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }
  
  getCategoryById(id: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  getAllProducts() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }
}
