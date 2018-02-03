import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Router} from "@angular/router";
import * as _ from "lodash";

@Injectable()
export class HttpClientService {
	userToken: any;
	url: any;
	// TODO: determine where this shoulb be initialised
	host: any = '/';

	constructor(public http: HttpClient, public router: Router) {
		this.userToken = window.localStorage.getItem('user_token');
	}

	getHeaders(additional: any = []) {
		let headers = new HttpHeaders();

		if (this.getUserToken()) {
			headers = headers.set('Authorization', 'Bearer ' + this.getUserToken());
		}

		// Adding aditional headers
		for (let i in additional) {
			headers = headers.set(additional[i].name, additional[i].value);
		}

		return headers;
	}

	regex = /:(\w+)*/g;

	/**
	 * Returns parametrized url
	 * @param params
	 * @param {string} url
	 * @returns {string}
	 */
	parametrizeUrl(params: any, url: string) {
		const urlParams = url.match(this.regex);
		for (let i in urlParams) {
			const urlParam = urlParams[i].replace(':', '');
			params[urlParam] = (params[urlParam] && '/' + params[urlParam]) || '';
			url = url.replace(`/:${urlParam}`, `${params[urlParam]}`);
		}
		return url;
	}

	catcher() {
		return (e: any) => {
			if (e.status === 401) {
				this.router.navigateByUrl('/login');
			}

			if (e.status === 412) {
				this.router.navigateByUrl('/banned-user');
			}

			if (e.error) {
				return Observable.throw(e.error);
			} else {
				return Observable.throw(e);
			}

		};
	}

	getQueryParams(params: any) {
		if (!params) {
			return '';
		}

		let query = '?';

		for (let i in params) {
			if (Array.isArray(params[i])) {
				query += _.map(params[i], param => `${i}=${param}&`).join('');
				continue;
			}
			query += `${i}=${params[i]}&`;
		}

		// Removing last &
		query = query.slice(0, -1);

		return query;
	}

	get(url: any, params = {}, additional: any = []) {
		const headers = this.getHeaders(additional);
		url = this.parametrizeUrl(params, url);
		params = this.getQueryParams(params);

		return this.http
			.get(this.host + url + params, {
				headers: headers
			})
			.catch(this.catcher());
	}

	post(url: any, data: any, params = {}, additional: any = []) {
		const headers = this.getHeaders(additional);
		url = this.parametrizeUrl(params, url);

		return this.http
			.post(this.host + url, data, {
				headers: headers
			})
			.catch(this.catcher());

	}

	put(url: any, data: any, params = {}, additional: any = []) {
		const headers = this.getHeaders(additional);
		url = this.parametrizeUrl(params, url);

		return this.http
			.put(this.host + url, data, {
				headers: headers
			})
			.catch(this.catcher());

	}

	delete(url: any, params = {}, additional: any = []) {
		const headers = this.getHeaders(additional);
		url = this.parametrizeUrl(params, url);

		return this.http
			.delete(this.host + url, {
				headers: headers
			})
			.catch(this.catcher());
	}

	setUserToken(token: any) {
		window.localStorage.setItem('user_token', token);
		this.userToken = token;
	}

	getUserToken() {

		return this.userToken || window.localStorage.getItem('user_token');
	}

	query(params: any = '', queryParams = {}) {
		return this.get(this.url + '/' + params, queryParams);
	}

	show(queryParams = {}) {
		return this.get(this.url + '/:_id', queryParams);
	}

	create(data: any, queryParams = {}) {
		return this.post(this.url, data, queryParams);
	}

	update(data: any, queryParams = {}) {
		return this.put(this.url + '/:_id', data, queryParams);
	}

	remove(queryParams = {}) {
		return this.delete(this.url + '/:_id', queryParams);
	}
}
