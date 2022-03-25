import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient)
     { }

  formData:PaymentDetail=new PaymentDetail();

  
  readonly siteUrl="http://localhost:62402/api/PaymentDetail";
  list:PaymentDetail[];
  postPaymentDetail(){
    return this.http.post(this.siteUrl,this.formData);
  }
  putPaymentDetail(){
    return this.http.put(`${this.siteUrl}/${this.formData.paymentDetailId}`,this.formData);
  }
deletePaymentDetail(id:number){
  return this.http.delete(`${this.siteUrl}/${id}`);
}

  refreshList(){
    this.http.get(this.siteUrl)
    .toPromise()
    .then(res=>this.list=res as PaymentDetail[]);
  }
}
