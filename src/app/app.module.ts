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
import { UserComponent } from './modules/users/components/user/user.component';
import { NewUserComponent } from './modules/users/pages/new-user/new-user.component';
import { UsersComponent } from './modules/users/pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: NewUserComponent },
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
    UsersComponent,
    UserComponent,
    NewUserComponent
  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
