import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/videos', pathMatch: 'full' }
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
