import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentLayerRef } from '@vcl/ng-vcl';

@Component({
  selector: 'app-cookie-preference',
  templateUrl: './cookie-preference.component.html',
  styleUrls: ['./cookie-preference.component.scss'],
})
export class CookiePreferenceComponent {
  constructor(
    private router: Router,
    @Optional() private layer?: ComponentLayerRef
  ) {}

  language = 'en';

  languageLayerOpen = false;

  allPreferences = {
    necessary: true,
    marketing: true,
    functional: true,
    analytics: true,
  };

  close(newPrefernces: {} = {}) {
    const references = { ...this.allPreferences, ...newPrefernces };
    this.layer && this.layer.close(references);
  }
}
