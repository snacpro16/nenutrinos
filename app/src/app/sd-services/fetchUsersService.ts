/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class fetchUsersService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_fetchUsersService

  async fetchUsersList(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          users: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_2ZIrYwjLE8FTZFKZ(bh);
      //appendnew_next_fetchUsersList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            users: bh.local.users,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vFcUORTz6FcWNe2n');
    }
  }

  //appendnew_flow_fetchUsersService_start

  async sd_2ZIrYwjLE8FTZFKZ(bh) {
    try {
      bh.local.baseURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_FW7rBz8o7ZNbeBIK(bh);
      //appendnew_next_sd_2ZIrYwjLE8FTZFKZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2ZIrYwjLE8FTZFKZ');
    }
  }

  async sd_FW7rBz8o7ZNbeBIK(bh) {
    try {
      bh.local.userURL = bh.local.baseURL + 'users';
      bh = await this.fetchBlogsAPI(bh);
      //appendnew_next_sd_FW7rBz8o7ZNbeBIK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FW7rBz8o7ZNbeBIK');
    }
  }

  async fetchBlogsAPI(bh) {
    try {
      let requestOptions = {
        url: bh.local.userURL,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.users = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_fetchBlogsAPI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZU15Pojn2Tn1GFmj');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_fetchUsersService_Catch
}
