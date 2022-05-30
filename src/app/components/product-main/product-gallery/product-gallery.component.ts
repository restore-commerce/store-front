import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product, ProductImage } from 'src/app/models/product';
import { ScreenService } from 'src/app/services/screen.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnInit, OnChanges {
  loading = false;
  zoomImage = false;
  productZoomContainerWidth: number;
  public galleryImages: ProductImage[];
  imageIndex = 0;

  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private displayService: ScreenService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadImages();
  }

  loadImages() {
    this.loading = true;
    setTimeout(() => {
      const { productImageSources, selectedColor } = this.product;
      this.galleryImages = productImageSources[selectedColor];

      this.productService.productColorChanged.subscribe((color) => {
        this.galleryImages = this.product.productImageSources[color];
      });
      this.loading = false;
    }, 100);
  }

  zoom(): void {
    this.zoomImage = true;
  }

  screenWidth() {
    return this.displayService.getScreenSize();
  }

  tabletWidth() {
    return this.displayService.tabletSize();
  }
}
