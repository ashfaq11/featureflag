import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as yaml from 'js-yaml';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YamlLoaderService {
  constructor(private http: HttpClient) {}

  loadYaml(filePath: string): Observable<any> {
    return this.http.get(filePath, { responseType: 'text' }).pipe(
      map((data) => yaml.load(data))
    );
  }
}