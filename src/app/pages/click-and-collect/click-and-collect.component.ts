import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-click-and-collect',
  templateUrl: './click-and-collect.component.html',
  styleUrls: ['./click-and-collect.component.scss'],
})
export class ClickAndCollectComponent implements OnInit {
  constructor(private displayService: ScreenService) {}

  ngOnInit(): void {}

  screenWidth() {
    return this.displayService.getScreenSize();
  }

  desktopWidth() {
    return this.displayService.desktopSize();
  }

  tabletWidth() {
    return this.displayService.tabletSize();
  }
}
