export type Video = {
  key: string
  site: string
}

export interface VideoDto {
  id: string
  results: Video[]
}
