import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'with-click-event',
    loadChildren: () => import('./with-click-event/with-click-event.module').then( m => m.WithClickEventPageModule)
  },
  {
    path: 'no-click-event',
    loadChildren: () => import('./no-click-event/no-click-event.module').then( m => m.NoClickEventPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
