import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, startWith } from 'rxjs';
import { GitHubRepo } from '../models/project.model';

export interface ReposState {
  loading: boolean;
  data: GitHubRepo[];
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private http = inject(HttpClient);
  private readonly username = 'KerolisKhalaf';

  getRepos(): Observable<ReposState> {
    return this.http
      .get<GitHubRepo[]>(`https://api.github.com/users/${this.username}/repos?sort=updated`)
      .pipe(
        map((data) => ({ loading: false, data })),
        startWith({ loading: true, data: [] as GitHubRepo[] }),
        catchError(() => of({ loading: false, data: [] as GitHubRepo[] }))
      );
  }
}