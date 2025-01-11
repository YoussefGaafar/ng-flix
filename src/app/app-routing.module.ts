import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { ShowsListComponent } from './pages/shows-list/shows-list.component'
import { GenresComponent } from './pages/genres/genres.component'

const routes: Routes = [
  {
    // Default Route
    title: 'Home | NgFlix',
    path: '',
    component: HomeComponent,
  },

  {
    // Shows-list Route (Used for both TVShows and Movies)
    title: 'Shows-List | NgFlix',
    path: 'shows-list/:type',
    component: ShowsListComponent,
  },

  {
    // Show-Detail Route (This route will be used for any show type: Movies or TV)
    title: 'Show-Detail | NgFlix',
    path: 'detail/:showId/:showType',
    component: ShowDetailComponent,
  },

  {
    title: 'Genres | NgFlix',
    path: 'genres',
    component: GenresComponent,
  },

  {
    title: 'Genres | NgFlix',
    path: 'genres/:genreId',
    component: GenresComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
