import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickAndCollectComponent } from './pages/click-and-collect/click-and-collect.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutFormsComponent } from './pages/checkout/checkout-forms/checkout-forms.component';
import { CheckoutPaymentComponent } from './pages/checkout/checkout-payment/checkout-payment.component';
import { CheckoutDeliveryComponent } from './pages/checkout/checkout-delivery/checkout-delivery.component';
import { CheckoutPageGuard } from './services/checkout-page-guard.service';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

const routes: Routes = [
  {
    path: 'returns',
    component: ReturnsComponent,
  },
  {
    path: 'click-and-collect',
    component: ClickAndCollectComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [CheckoutPageGuard],
    children: [
      {
        path: '',
        component: CheckoutFormsComponent,
      },
      {
        path: 'payment',
        component: CheckoutPaymentComponent,
      },
      {
        path: 'delivery',
        component: CheckoutDeliveryComponent,
      },
    ],
  },
  {
    path: 'about-us',
    component: ImprintComponent,
  },
  {
    path: 'privacy-statement',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
