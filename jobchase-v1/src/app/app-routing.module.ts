import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { NotFoundComponent } from './errors/not-found/not-found.component';

import { AppComponent } from './main/app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { WorkspacePageComponent } from './pages/workspace-page/workspace-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';


// temporary
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/app',
  //   pathMatch: 'full'
  // },
  {
    path: 'dashboard',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardPageComponent
  },
  {
    path: 'workspace',
    component: WorkspacePageComponent
  },
  {
    path: 'browse',
    component: BrowsePageComponent
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'detail/:id',
    component: DetailPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
