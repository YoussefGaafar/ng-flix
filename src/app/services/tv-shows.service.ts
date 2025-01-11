import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { TVShow, TVShowsDto } from '../models/tvshow'
import { map } from 'rxjs'
import { VideoDto } from '../models/video'
import { ImagesDto } from '../models/image'
import { CreditsDto } from '../models/credits'

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private apiKey = '58e3fe7988ac2a0b8bac98a02a239b0d'
  private apiUrl = 'https://api.themoviedb.org/3'
  // This service will be responsible on retrieving the popular movies OR trendy movies OR any movies in general from the backend (themoviedb)
  httpClient = inject(HttpClient)

  loadTVShowsByType(TVShowsType: string, TVShowsCount: number = 20) {
    // We are using rxjs pipe map to return the results array of our JSON
    return this.httpClient
      .get<TVShowsDto>(
        `${this.apiUrl}/tv/${TVShowsType}?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, TVShowsCount)))
  }

  loadTVShowsById(tvShowId: string) {
    return this.httpClient.get<TVShow>(
      `${this.apiUrl}/tv/${tvShowId}?api_key=${this.apiKey}`
    )
  }

  loadTVShowsVideos(tvShowId: string) {
    return this.httpClient
      .get<VideoDto>(
        `${this.apiUrl}/tv/${tvShowId}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  loadTVShowsImages(tvShowId: string) {
    return this.httpClient
      .get<ImagesDto>(
        `${this.apiUrl}/tv/${tvShowId}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }

  loadTVShowsCast(tvShowId: string) {
    return this.httpClient
      .get<CreditsDto>(
        `${this.apiUrl}/tv/${tvShowId}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  searchTVShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular'
    return this.httpClient.get<TVShowsDto>(
      `${this.apiUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
    )
  }
}
