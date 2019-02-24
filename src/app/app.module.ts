import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './modules/main/pages/main.component';
import { PostComponent } from './modules/posts/components/post/post.component';
import { PostsComponent } from './modules/posts/pages/posts/posts.component';
import { UsersComponent } from './modules/users/pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    PostsComponent,
    PostComponent,
    UsersComponent
  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
