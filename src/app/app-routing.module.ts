import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'quotes', component: QuotesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: QuoteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
