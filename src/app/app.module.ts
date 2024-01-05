import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { BlogPostViewComponent } from './components/blog-post-view/blog-post-view.component';
import { BlogPostCreateComponent } from './components/blog-post-create/blog-post-create.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './layout/hero/hero.component';
import { HomeComponent } from './layout/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogPostEffects } from './store/effects/blog-post.effects';
import { blogPostReducer } from './store/states/blog-post.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostListComponent,
    BlogPostViewComponent,
    BlogPostCreateComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({}, {}),
    // EffectsModule.forRoot([]),
    StoreModule.forFeature('blogPosts', blogPostReducer),
    EffectsModule.forFeature([BlogPostEffects]),
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
