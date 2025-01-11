import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { SliderComponent } from './components/slider/slider.component'
import { BannerComponent } from './components/banner/banner.component'
import { ShowItemComponent } from './components/show-item/show-item.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { VideoEmbedComponent } from './components/video-embed/video-embed.component'
import { ShowsListComponent } from './pages/shows-list/shows-list.component'

import { RemoveTrailingZerosPipe } from './pipes/remove-trailing-zeros.pipe'

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { providePrimeNG } from 'primeng/config'
import Aura from '@primeng/themes/aura'
import { ImageModule } from 'primeng/image'
import { TabsModule } from 'primeng/tabs'
import { CarouselModule } from 'primeng/carousel'
import { InputTextModule } from 'primeng/inputtext'
import { PaginatorModule } from 'primeng/paginator';
import { GenresComponent } from './pages/genres/genres.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    RemoveTrailingZerosPipe,
    BannerComponent,
    ShowItemComponent,
    ShowDetailComponent,
    VideoEmbedComponent,
    ShowsListComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    TabsModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    PaginatorModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode', // Optional: Enable dark mode
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
