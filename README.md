<big><h1 align="center">ngx-simple-resource</h1></big>

<p align="center">
  <a href="https://www.npmjs.com/package/ngx-simple-resource">
    <img src="http://img.shields.io/npm/dm/ngx-simple-resource.svg?style=flat-square" alt="Downloads">
  </a>

  <a href="https://david-dm.org/flyCode-dev/ngx-simple-resource.svg">
    <img src="https://david-dm.org/flyCode-dev/ngx-simple-resource.svg?style=flat-square" alt="Dependency Status">
  </a>

  <a href="https://github.com/flyCode-dev/regnum/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/ngx-simple-resource.svg?style=flat-square" alt="License">
  </a>
</p>

![logo](https://user-images.githubusercontent.com/8617379/35768419-dbff7a16-0914-11e8-8d9d-28f7f03bff11.png)

<p align="center"><big>
Alternative lib for resource services in Angular.
This is parent service for any resource services, it works more like AngularJS resource and will be handy for migration from it.
</big></p>


## Install

```sh
npm install --save ngx-simple-resource
```

## Usage

```
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientService} from './http-client.service';
import {HelperService} from './helper.service';
import {Router} from "@angular/router";

@Injectable()
export class OrderService extends HttpClientService {
	url: any = 'orders';

	constructor(public http: HttpClient, public helper_service: HelperService, public router: Router) {
		super(http, router);
	}

	own(queryParams = {}) {
		return this.get(this.url + '/own', queryParams);
	}

	feedback(queryParams = {}) {
		return this.put(this.url + '/:_id/feedback', queryParams, queryParams);
	}

}

// In component
this.orderService.query('', {}).subscribe((res) => {
  this.orders = res;
})

```
## Examples


## Contribution
Contribution is welcome.

## License

MIT © [Flycode LLC](http://fly.co.de)

[npm-url]: https://npmjs.org/package/ngx-simple-resource
[npm-image]: https://img.shields.io/npm/v/ngx-simple-resource.svg?style=flat-square

[travis-url]: https://travis-ci.org/flyCode-dev/ngx-simple-resource
[travis-image]: https://img.shields.io/travis/flyCode-dev/ngx-simple-resource.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/flyCode-dev/ngx-simple-resource
[coveralls-image]: https://img.shields.io/coveralls/flyCode-dev/ngx-simple-resource.svg?style=flat-square

[depstat-url]: https://david-dm.org/flyCode-dev/ngx-simple-resource
[depstat-image]: https://david-dm.org/flyCode-dev/ngx-simple-resource.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/ngx-simple-resource.svg?style=flat-square
