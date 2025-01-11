import { Component, input } from '@angular/core'
import { Movie } from '../../models/movie'
import { IMAGE_BASE_URL } from '../../constants/images-metadata'

@Component({
  selector: 'app-show-item',
  standalone: false,

  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  imageBaseUrl = IMAGE_BASE_URL
  showItemObj = input.required<Movie>({})
  showItemType = input.required<'tv' | 'movie'>()
}
