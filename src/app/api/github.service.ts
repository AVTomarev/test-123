// npm
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// outer
import { SimpleEmojisList } from 'src/app/shared/models/simple-emojist-list.model';
// inner

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private BASE_URL: string = 'https://api.github.com';

  constructor(
    private _http: HttpClient
  ) { }

  getEmojisList(): Observable<SimpleEmojisList> {
    return this._http.get<SimpleEmojisList>(this.BASE_URL + '/emojis');
  }
}
