import {
  Component,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { map, Observable, tap } from 'rxjs'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { IMAGE_BASE_URL } from '../../constants/images-metadata'
import { Movie } from '../../models/movie'

@Component({
  selector: 'app-slider',
  standalone: false,

  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })), // When it's going to disappear --> opacity = 0
      transition('void <=> *', [animate('1s')]), // When it re-appears.... animate, void <=> means animate from the void to the full and vice versa
    ]),
  ],
})
export class SliderComponent implements OnInit {
  // We will be using the Async Pipe Approach
  moviesService = inject(MoviesService)
  slides = input<Movie[]>([]) // We have changed the slides component from only showing the slides in the home page, to also showing the clicked show
  imageBaseUrl = IMAGE_BASE_URL

  // popularMovies$ = this.moviesService.loadMoviesByType('popular').pipe(
  //   tap((movies) => {
  //     this.popularMoviesLength = movies.length // Update the length when data is emitted
  //   })
  // )

  // Altering the slides every 5 seconds, if the slides array is larger than 1
  slideIndex = 0
  ngOnInit(): void {
    if (this.slides().length > 1) {
      setInterval(() => {
        this.slideIndex++
        if (this.slideIndex > this.slides().length - 1) {
          this.slideIndex = 0
        }
      }, 5000)
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  // This is another approach of getting the Popular Movies from the Movies Service

  // destroyRef = inject(DestroyRef)
  // ngOnInit(): void {
  //   this.getPopularMovies()
  // }

  // getPopularMovies() {
  //   const subscription = this.moviesService.loadPopularMovies().subscribe({
  //     next: (data) => (this.popularMovies = data),
  //   })

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe())
  // }
}
