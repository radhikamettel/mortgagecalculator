import { Injectable } from '@angular/core';
import { Mortgage } from './calculator/mortgage';
@Injectable({
  providedIn: 'root'
})
export class PaymentcalculationService {

  constructor() { }
  //Mortgage calculation Logic
  calculatePayment(mortgage: Mortgage) {
    let period: number = ((mortgage.amortisationPeriodYear * 12) + mortgage.amortisationPeriodMonth) / 12;
    let interestRate = mortgage.interestRate / 100;
    let monthlyPayment: number = (mortgage.mortgageAmt + (mortgage.mortgageAmt * interestRate * period)) / 12;
    return monthlyPayment;
  }
}
