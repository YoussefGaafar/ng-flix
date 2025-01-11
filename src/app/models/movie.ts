export type Genre = {
  id: string
  name: string
}

export interface GenresDto {
  genres: Genre[]
}

export interface Movie {
  id: number
  backdrop_path: string
  genre_ids: number[]
  genres?: Genre[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue?: number
  runtime?: string
  title: string
  status?: string
  vote_average: number
  vote_count: number
}

export interface MoviesDto {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
