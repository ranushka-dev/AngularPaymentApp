import { PaymentDetail } from './../../shared/payment-detail.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.paymentDetailId==0)
      this.insertRecord(form);
    
    else
      this.updateRecord(form);
    
  }
    resetForm(form:NgForm){
      form.form.reset();
      this.service.formData=new PaymentDetail();
    
  }

  insertRecord(form:NgForm)
{
  this.service.postPaymentDetail().subscribe(
    res=>{
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.success('submitted Successfully','Payment Detail Register')
    },
    err=>{
       console.log(err);
    }
  )
}
updateRecord(form:NgForm){
  this.service.putPaymentDetail().subscribe(
    res=>{
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.info('Updated Successfully','Payment Detail Register')
    },
    err=>{
       console.log(err);
    }
  )
}
}
