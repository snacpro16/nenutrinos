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
export class addBlogservice {
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

  //   service flows_addBlogservice

  async addBlog(blog: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          blog: blog,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_z7I2QQQlyeT9BK3j(bh);
      //appendnew_next_addBlog
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yQnEdid8SIS2CnEK');
    }
  }

  //appendnew_flow_addBlogservice_start

  async sd_z7I2QQQlyeT9BK3j(bh) {
    try {
      bh.local.blogUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_TuddcTfFmsyrIg1u(bh);
      //appendnew_next_sd_z7I2QQQlyeT9BK3j
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z7I2QQQlyeT9BK3j');
    }
  }

  async sd_TuddcTfFmsyrIg1u(bh) {
    try {
      bh.local.blogUrl += 'blogs';
      console.log('output', bh.input.blog);
      bh = await this.addBlogAPI(bh);
      //appendnew_next_sd_TuddcTfFmsyrIg1u
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TuddcTfFmsyrIg1u');
    }
  }

  async addBlogAPI(bh) {
    try {
      let requestOptions = {
        url: bh.local.blogUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.blog,
      };
      bh.local.resp = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_xzaLvCrwe3DpeXbc(bh);
      //appendnew_next_addBlogAPI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F4wvz9jM7izEWaMB');
    }
  }

  async sd_xzaLvCrwe3DpeXbc(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/list');
      await this.router.navigate(
        [this.sdService.formatPathWithParams(path, undefined)],
        {
          queryParams: Object.assign(qprm, ''),
        }
      );
      bh = await this.alert(bh);
      //appendnew_next_sd_xzaLvCrwe3DpeXbc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xzaLvCrwe3DpeXbc');
    }
  }

  async alert(bh) {
    try {
      this.matSnackBar.open(bh.local.resp.message, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      //appendnew_next_alert
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xvEqaQ5kNWj16BLd');
    }
  }

  async sd_JhK4MBJUgdBH8x4x(bh) {
    try {
      this.matSnackBar.open(bh.error.error.message, 'close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_JhK4MBJUgdBH8x4x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JhK4MBJUgdBH8x4x');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_r5ksuAhTJugTspwC(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_r5ksuAhTJugTspwC(bh) {
    const nodes = ['sd_F4wvz9jM7izEWaMB'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_JhK4MBJUgdBH8x4x(bh);
      //appendnew_next_sd_r5ksuAhTJugTspwC
      return true;
    }
    return false;
  }
  //appendnew_flow_addBlogservice_Catch
}
