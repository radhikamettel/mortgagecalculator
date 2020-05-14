import { Component, OnInit } from '@angular/core';
import { Mortgage } from './mortgage';
import * as shared from '../shared';
import { PaymentcalculationService } from '../paymentcalculation.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  mortgage = new Mortgage();
  amortisationPeriodYear1 = 1;
  calculatedAmt: number = 0;
  submitted = false;
  availableYears: shared.IOptions[] = shared.availableYears;
  availableMonths: shared.IOptions[] = shared.availableMonths;
  constructor(private paymentcalculationservice: PaymentcalculationService) {
    this.mortgage.amortisationPeriodYear = 1;
    this.mortgage.amortisationPeriodMonth = 1;
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.callPaymentService(this.mortgage);
  }

  //call service for mortgage calculation
  callPaymentService(mortgage: Mortgage) {    
    this.calculatedAmt = this.paymentcalculationservice.calculatePayment(mortgage);
  }
}