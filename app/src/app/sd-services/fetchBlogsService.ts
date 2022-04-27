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
export class fetchBlogsService {
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

  //   service flows_fetchBlogsService

  async fetchBlogsList(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          blogs: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_8oFD1L2PwTUwYRgp(bh);
      //appendnew_next_fetchBlogsList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            blogs: bh.local.blogs,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h4tB27n3JXqHLja1');
    }
  }

  //appendnew_flow_fetchBlogsService_start

  async sd_8oFD1L2PwTUwYRgp(bh) {
    try {
      bh.local.blogUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_WocVavAoOskexNx9(bh);
      //appendnew_next_sd_8oFD1L2PwTUwYRgp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8oFD1L2PwTUwYRgp');
    }
  }

  async sd_WocVavAoOskexNx9(bh) {
    try {
      bh.local.blogUrl += 'blogs';
      bh = await this.fetchBlogsAPI(bh);
      //appendnew_next_sd_WocVavAoOskexNx9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WocVavAoOskexNx9');
    }
  }

  async fetchBlogsAPI(bh) {
    try {
      let requestOptions = {
        url: bh.local.blogUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.blogs = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_fetchBlogsAPI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xjZYMy9Z1BpyJpHz');
    }
  }

  async alert(bh) {
    try {
      this.matSnackBar.open(bh.error.error.message, 'Close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: 'alert-red'
          .split(',')
          .map((v: string) => v.trim())
          .filter(Boolean),
      });
      //appendnew_next_alert
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N4BiuN8VDJBoqIjp');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_FL88806byP5N0WFz(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_FL88806byP5N0WFz(bh) {
    const nodes = ['sd_xjZYMy9Z1BpyJpHz'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.alert(bh);
      //appendnew_next_sd_FL88806byP5N0WFz
      return true;
    }
    return false;
  }
  //appendnew_flow_fetchBlogsService_Catch
}
