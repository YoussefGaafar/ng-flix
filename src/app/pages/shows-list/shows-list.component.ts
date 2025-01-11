import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { map, Observable, Subscription } from 'rxjs'
import { MoviesDto } from '../../models/movie'
import { PaginatorState } from 'primeng/paginator'
import { TvShowsService } from '../../services/tv-shows.service'
import { ActivatedRoute } from '@angular/router'
import { mapToMoviesDto } from '../../models/tvshow'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-shows-list',
  standalone: false,

  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  moviesService = inject(MoviesService)
  tvShowsService = inject(TvShowsService)
  activatedRoute = inject(ActivatedRoute)
  titleService = inject(Title)
  destroyRef = inject(DestroyRef)

  showsList$: Observable<MoviesDto> | null = null
  showsType: 'movie' | 'tv' = 'movie'

  searchQuery: string = ''
  total_pages_results = 0

  // assingShowsListObserver(page: number, searchQ?: string) {
  //   let subscription: Subscription

  //   if (this.showsType === 'movie') {
  //     this.showsList$ = this.moviesService.searchMovies(page, searchQ)
  //     subscription = this.showsList$.subscribe({
  //       next: (data) => {
  //         this.total_pages_results = data.total_results
  //       },
  //     })
  //   }

  //   if (this.showsType === 'tv') {
  //     this.showsList$ = this.tvShowsService
  //       .searchTVShows(page, searchQ)
  //       .pipe(map(mapToMoviesDto))
  //     subscription = this.showsList$.subscribe({
  //       next: (data) => {
  //         this.total_pages_results = data.total_results
  //       },
  //     })
  //   }

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe())
  // }

  ngOnInit(): void {
    const subscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.showsType = params['type']
        this.getShowPages(this.showsType, 1) // Revealing the First page of the search
      },
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }

  getShowPages(showsType: 'movie' | 'tv', page: number, searchQ?: string) {
    let subscription: Subscription

    if (showsType === 'movie') {
      this.showsList$ = this.moviesService.searchMovies(page, searchQ)
      this.titleService.setTitle(`Movies List | NgFlix`)
      subscription = this.showsList$.subscribe({
        next: (data) => {
          this.total_pages_results = data.total_results
          this.titleService.setTitle(`Movies | NgFlix`)
        },
      })
    }

    if (showsType === 'tv') {
      this.showsList$ = this.tvShowsService
        .searchTVShows(page, searchQ)
        .pipe(map(mapToMoviesDto))
      subscription = this.showsList$.subscribe({
        next: (data) => {
          this.total_pages_results = data.total_results
          this.titleService.setTitle(`TV Shows | NgFlix`)
        },
      })
    }

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }

  onSearchChanged() {
    this.getShowPages(this.showsType, 1, this.searchQuery)
  }

  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    this.getShowPages(this.showsType, pageNumber, this.searchQuery)
  }
}
