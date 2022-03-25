import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
//import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,private toastr:ToastrService) { }

    ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(seletedRecord:PaymentDetail){
    this.service.formData=Object.assign({},seletedRecord);
  }

  onDelete(id:number){
    this.service.deletePaymentDetail(id)
    .subscribe(
      res=>{
         this.service.refreshList();
         this.toastr.error("Deleted Successfully",'Payment Detail Register');
      },
      err=>{
        console.log(err);
      }
    )
  }
}
