import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  Signal,
  ViewChild,
} from '@angular/core'
import { map, Observable } from 'rxjs'
import { Genre, Movie, MoviesDto } from '../../models/movie'
import { MoviesService } from '../../services/movies.service'
import { Paginator, PaginatorState } from 'primeng/paginator'
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-genres',
  standalone: false,

  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  moviesService = inject(MoviesService)
  activatedRoute = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef)
  titleService = inject(Title)
  @ViewChild('paginator') paginator: Paginator | null = null

  genres$: Observable<Genre[]> | null = null
  selectedShows$: Observable<MoviesDto> | null = null
  selectedGenreId = ''
  total_pages_results = signal(10)
  genreName = signal('')

  ngOnInit(): void {
    const subscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.selectedGenreId = params['genreId']
        this.paginator?.changePage(0) // Resetting the Pagination after each genre change.
        this.selectedShows$ = this.moviesService
          .loadMoviesByGenres(this.selectedGenreId)
          .pipe(
            map((data) => {
              this.total_pages_results.set(data.total_results)
              if (this.genreName() !== '')
                this.titleService.setTitle(
                  `${this.genreName()} | Genres | NgFlix`
                )
              return data
            })
          )
      },
    })

    this.genres$ = this.moviesService.loadMoviesGenres()

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }

  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    this.selectedShows$ = this.moviesService.loadMoviesByGenres(
      this.selectedGenreId,
      pageNumber
    )
  }

  onSelectedGenre(genreName: string) {
    this.genreName.set(genreName)
    console.log(this.genreName())
  }
}
