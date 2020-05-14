import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { Mortgage } from './mortgage';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a number', () => {
    let mortgage = new Mortgage();
    mortgage.mortgageAmt = 1100;
    mortgage.interestRate = 5;
    mortgage.paymentFrequency = 5;
    mortgage.amortisationPeriodMonth = 1;
    mortgage.amortisationPeriodYear = 1;
    mortgage.term = 3;
    component.callPaymentService(mortgage);
    expect(component.calculatedAmt).toEqual(96.63194444444444);
  });
});
