export interface Image {
  aspect_ratio: number
  file_path: string
}

export interface ImagesDto {
  backdrops: Image[]
}
