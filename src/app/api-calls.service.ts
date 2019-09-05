import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiCallsService {
    test = "test";
    constructor(private http: HttpClient) { }
    apiPostObservable(option): Observable<any> {
        return this.http.post(option.url, option.data)
    }
    apiGGetObservable(option): Observable<any> {
        return this.http.post(option.url, option.data)
    }
}