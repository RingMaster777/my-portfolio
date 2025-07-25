import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DataService } from './services/data.service';
import { SeoService } from './services/seo.service';
import { ThemeService } from './services/theme.services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ThemeService, DataService, SeoService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
