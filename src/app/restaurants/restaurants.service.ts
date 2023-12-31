import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";

import { Injectable } from "@angular/core";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";


@Injectable()
export class RestaurantsService {



  constructor(private http: Http) {

  }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(res => res.json())
    .catch(ErrorHandler.handleError)

  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(res => res.json())
    .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string) : Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(res => res.json())
    .catch(ErrorHandler.handleError)

  }
}
