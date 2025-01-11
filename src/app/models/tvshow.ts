import { Movie, MoviesDto } from './movie'

export interface TVShow {
  id: number
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  name: string
  vote_average: number
  vote_count: number
}

export interface TVShowsDto {
  page: number
  results: TVShow[]
  total_pages: number
  total_results: number
}

// Function that maps TV Shows back into Movies
export const mapToMovies = function (tvShows: TVShow[]): Movie[] {
  return tvShows.map((tvShow: TVShow) => {
    return {
      ...tvShow,
      title: tvShow.name,
      original_title: tvShow.original_name,
    }
  })
}

export function mapToMovie(tvshow: TVShow): Movie {
  return {
    ...tvshow,
    title: tvshow.name,
    original_title: tvshow.original_name,
  }
}

export function mapToMoviesDto(tvshowDto: TVShowsDto): MoviesDto {
  return {
    results: tvshowDto.results.map(mapToMovie),
    total_pages: tvshowDto.total_pages,
    total_results: tvshowDto.total_results,
    page: tvshowDto.page,
  }
}
