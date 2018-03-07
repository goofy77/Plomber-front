import {Http, RequestOptions} from "@angular/http";
import {authHttpServiceFactory} from "./http-auth.service";
import {AuthHttp} from "angular2-jwt/angular2-jwt";

export let AuthFactory =
  {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  };

