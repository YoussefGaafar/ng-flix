import { Movie } from '../../models/movie'
import { Component, inject, input } from '@angular/core'
import { TVShow } from '../../models/tvshow'

@Component({
  selector: 'app-banner',
  standalone: false,

  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  title = input.required<string>()
  showsType = input.required<'tv' | 'movie'>()
  showsData = input<Movie[]>() // Here the showsData could be either a TVShows or Movies
}
