import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { Router } from "@angular/router";
export declare class HttpClientService {
    http: HttpClient;
    router: Router;
    userToken: any;
    url: any;
    host: any;
    constructor(http: HttpClient, router: Router);
    getHeaders(additional?: any): HttpHeaders;
    regex: RegExp;
    /**
     * Returns parametrized url
     * @param params
     * @param {string} url
     * @returns {string}
     */
    parametrizeUrl(params: any, url: string): string;
    catcher(): (e: any) => ErrorObservable;
    getQueryParams(params: any): string;
    get(url: any, params?: {}, additional?: any): Observable<any>;
    post(url: any, data: any, params?: {}, additional?: any): Observable<any>;
    put(url: any, data: any, params?: {}, additional?: any): Observable<any>;
    delete(url: any, params?: {}, additional?: any): Observable<any>;
    setUserToken(token: any): void;
    getUserToken(): any;
    query(params?: any, queryParams?: {}): Observable<any>;
    show(queryParams?: {}): Observable<any>;
    create(data: any, queryParams?: {}): Observable<any>;
    update(data: any, queryParams?: {}): Observable<any>;
    remove(queryParams?: {}): Observable<any>;
}
