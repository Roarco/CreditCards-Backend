import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {
  private myAppUrl : string = 'http://localhost:5000/';
  private myApiUrl : string = 'api/tarjetas/';

  constructor(private http: HttpClient) {
  }

  // Get all credit cards
  getCreditCards() : Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  // add credit card
  addCreditCard(card: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, card);
  }

  // delete credit card
  deleteCreditCard(id: any): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }


  // update credit card
  updateCreditCard(id:any,card:any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, card);
  }
}
