import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { BlogPostCreateComponent } from './components/blog-post-create/blog-post-create.component';

const routes: Routes = [

  {
    path:'', component:HomeComponent,
    children:[
 
      {
        path:'', component:BlogPostListComponent
      },


    ]
  },
    {
    path:'post-blog', component:BlogPostCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
