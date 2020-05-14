import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

//Routing configuration
const routes: Routes = [
  { path: 'mortgagecalculator', component: CalculatorComponent },
  { path: '', redirectTo: '/mortgagecalculator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
