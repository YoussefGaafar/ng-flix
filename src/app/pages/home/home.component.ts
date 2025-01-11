import { Component, inject } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { TvShowsService } from '../../services/tv-shows.service'
import { map } from 'rxjs'
import { mapToMovies, TVShow } from '../../models/tvshow'

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  moviesService = inject(MoviesService)
  tvShowsService = inject(TvShowsService)

  upcomingMovies$ = this.moviesService.loadMoviesByType('upcoming', 12)

  popularMovies$ = this.moviesService.loadMoviesByType('popular', 12)

  topRatedMovies$ = this.moviesService.loadMoviesByType('top_rated', 12)

  popularTVShows$ = this.tvShowsService
    .loadTVShowsByType('popular', 12)
    .pipe(map(mapToMovies))
}
