import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../services/movies.service'
import { map, Observable } from 'rxjs'
import { Movie } from '../../models/movie'
import { IMAGES_PATH_SIZES } from '../../constants/images-metadata'
import { Video } from '../../models/video'
import { Image } from '../../models/image'
import { Actor } from '../../models/credits'
import { TvShowsService } from '../../services/tv-shows.service'
import { mapToMovie } from '../../models/tvshow'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-show-detail',
  standalone: false,

  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  moviesService = inject(MoviesService)
  tvShowsService = inject(TvShowsService)
  titleService = inject(Title) // Inject the Title service
  destroyRef = inject(DestroyRef)

  imagesPathSizes = IMAGES_PATH_SIZES

  showId: string = ''
  showType: 'tv' | 'movie' = 'movie'

  show$: Observable<Movie> | null = null

  showVideos$: Observable<Video[]> | null = null
  showImages$: Observable<Image[]> | null = null

  showCast$: Observable<Actor[]> | null = null

  ngOnInit(): void {
    const subscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.showId = params['showId']
        this.showType = params['showType']
        if (this.showType === 'movie') {
          this.show$ = this.moviesService.loadMovieById(this.showId)
          this.showVideos$ = this.moviesService.loadMovieVideos(this.showId)
          this.showImages$ = this.moviesService.loadMovieImages(this.showId)
          this.showCast$ = this.moviesService.loadMovieCast(this.showId)
        } else {
          this.show$ = this.tvShowsService
            .loadTVShowsById(this.showId)
            .pipe(map(mapToMovie))
          this.showVideos$ = this.tvShowsService.loadTVShowsVideos(this.showId)
          this.showImages$ = this.tvShowsService.loadTVShowsImages(this.showId)
          this.showCast$ = this.tvShowsService.loadTVShowsCast(this.showId)
        }

        // Subscribe to show$ to get the title and set it dynamically
        this.show$?.subscribe((show) => {
          this.titleService.setTitle(`${show.original_title} | NgFlix`)
        })
      },
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
