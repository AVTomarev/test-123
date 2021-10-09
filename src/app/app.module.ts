import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LikedComponent } from './pages/liked/liked.component';
import { DeletedComponent } from './pages/deleted/deleted.component';
import { SearchComponent } from './shared/components/search/search.component';
import { ImageWithTooltipComponent } from './shared/components/image-with-tooltip/image-with-tooltip.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FilterEmojisByStringPipe } from './shared/pipes/filter-emojis-by-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LikedComponent,
    DeletedComponent,
    SearchComponent,
    ImageWithTooltipComponent,
    HeaderComponent,
    FilterEmojisByStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
