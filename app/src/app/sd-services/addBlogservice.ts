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
      bh.local.blog = await this.sdService.nHttpRequest(requestOptions);
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
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      //appendnew_next_sd_xzaLvCrwe3DpeXbc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xzaLvCrwe3DpeXbc');
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
  //appendnew_flow_addBlogservice_Catch
}
