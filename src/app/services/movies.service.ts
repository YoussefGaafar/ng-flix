import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { GenresDto, Movie, MoviesDto } from '../models/movie'
import { map } from 'rxjs'
import { VideoDto } from '../models/video'
import { ImagesDto } from '../models/image'
import { CreditsDto } from '../models/credits'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = '58e3fe7988ac2a0b8bac98a02a239b0d'
  private apiUrl = 'https://api.themoviedb.org/3'
  // This service will be responsible on retrieving the popular movies OR trendy movies OR any movies in general from the backend (themoviedb)
  httpClient = inject(HttpClient)

  loadMoviesByType(movieType: string, moviesCount: number = 20) {
    // We are using rxjs pipe map to return the results array of our JSON
    return this.httpClient
      .get<MoviesDto>(
        `${this.apiUrl}/movie/${movieType}?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, moviesCount)))
  }

  loadMovieById(movieId: string) {
    return this.httpClient.get<Movie>(
      `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`
    )
  }

  loadMovieVideos(movieId: string) {
    return this.httpClient
      .get<VideoDto>(
        `${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  loadMovieImages(movieId: string) {
    return this.httpClient
      .get<ImagesDto>(
        `${this.apiUrl}/movie/${movieId}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }

  loadMovieCast(movieId: string) {
    return this.httpClient
      .get<CreditsDto>(
        `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  searchMovies(page: number, searchQuery?: string) {
    const uri = searchQuery ? 'search/movie' : 'movie/popular'
    return this.httpClient.get<MoviesDto>(
      `${this.apiUrl}/${uri}?query=${searchQuery}&page=${page}&api_key=${this.apiKey}`
    )
  }

  loadMoviesGenres() {
    return this.httpClient
      .get<GenresDto>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres))
  }

  loadMoviesByGenres(genreId: string, page: number = 1) {
    return this.httpClient.get<MoviesDto>(
      `${this.apiUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`
    )
  }
}
