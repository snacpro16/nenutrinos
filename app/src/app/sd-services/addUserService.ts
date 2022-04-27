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
export class addUserService {
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

  //   service flows_addUserService

  async addUser(user: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          user: user,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_YuaCF6iSSjUv0rjo(bh);
      //appendnew_next_addUser
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pXk46a6W7Lx7lBkH');
    }
  }

  //appendnew_flow_addUserService_start

  async sd_YuaCF6iSSjUv0rjo(bh) {
    try {
      bh.local.baseURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_7NdYNqFs3AK9tQMt(bh);
      //appendnew_next_sd_YuaCF6iSSjUv0rjo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YuaCF6iSSjUv0rjo');
    }
  }

  async sd_7NdYNqFs3AK9tQMt(bh) {
    try {
      bh.local.userURL = bh.local.baseUR + 'blogs';
      console.log('output', bh.input.user);
      bh = await this.addBlogAPI(bh);
      //appendnew_next_sd_7NdYNqFs3AK9tQMt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7NdYNqFs3AK9tQMt');
    }
  }

  async addBlogAPI(bh) {
    try {
      let requestOptions = {
        url: bh.local.userURL,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.user,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_TcRdFy6XSTBOUJuO(bh);
      //appendnew_next_addBlogAPI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bd9Ip8prtCQHiBqE');
    }
  }

  async sd_TcRdFy6XSTBOUJuO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/users/list');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      bh = await this.alert(bh);
      //appendnew_next_sd_TcRdFy6XSTBOUJuO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TcRdFy6XSTBOUJuO');
    }
  }

  async alert(bh) {
    try {
      this.matSnackBar.open(bh.local.response.message, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      //appendnew_next_alert
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U7wYJuugQpbidRpL');
    }
  }

  async sd_Id2sY203zB4G91CQ(bh) {
    try {
      this.matSnackBar.open(bh.error.error.message, 'close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_Id2sY203zB4G91CQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Id2sY203zB4G91CQ');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_C9A4TJYmuwfbLTPU(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_C9A4TJYmuwfbLTPU(bh) {
    const nodes = [];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Id2sY203zB4G91CQ(bh);
      //appendnew_next_sd_C9A4TJYmuwfbLTPU
      return true;
    }
    return false;
  }
  //appendnew_flow_addUserService_Catch
}
