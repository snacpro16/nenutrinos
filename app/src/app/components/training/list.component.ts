/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { fetchBlogsService } from 'app/sd-services/fetchBlogsService'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-list',
  templateUrl: './list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class listComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_2cHV2C4nMWoMhVWk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2cHV2C4nMWoMhVWk(bh) {
    try {
      bh = this.sd_R6MLj1sSx9IAmsoQ(bh);
      //appendnew_next_sd_2cHV2C4nMWoMhVWk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2cHV2C4nMWoMhVWk');
    }
  }

  navigateToDetailPage(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = { test: 'success' };
      bh = this.saveBlogInSessionstorage(bh);
      //appendnew_next_navigateToDetailPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3qidUNuraolkgLY5');
    }
  }

  //appendnew_flow_listComponent_start

  sd_R6MLj1sSx9IAmsoQ(bh) {
    try {
      this.page.blogs = undefined;
      bh = this.callBlogsService(bh);
      //appendnew_next_sd_R6MLj1sSx9IAmsoQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R6MLj1sSx9IAmsoQ');
    }
  }

  async callBlogsService(bh) {
    try {
      const fetchBlogsServiceInstance: fetchBlogsService =
        this.__page_injector__.get(fetchBlogsService);

      let outputVariables = await fetchBlogsServiceInstance.fetchBlogsList();
      this.page.blogs = outputVariables.local.blogs;

      this.printingBlogs(bh);
      //appendnew_next_callBlogsService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MfgwpGSYzErUZx3K');
    }
  }

  printingBlogs(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.blogs);
      //appendnew_next_printingBlogs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UyKozEUyQfGeZMIA');
    }
  }

  saveBlogInSessionstorage(bh) {
    try {
      sessionStorage.setItem('selectedBlog', JSON.stringify(bh.input.event));
      bh = this.sd_fpKYxaTVRTyuZbSt(bh);
      //appendnew_next_saveBlogInSessionstorage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hF5PzFPJdn1woD5y');
    }
  }

  async sd_fpKYxaTVRTyuZbSt(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/detail/:id');
      await this.__page_injector__
        .get(Router)
        .navigate(
          [
            this.sdService.formatPathWithParams(path, {
              id: bh.input.event.id,
            }),
          ],
          {
            queryParams: Object.assign(qprm, ''),
          }
        );
      //appendnew_next_sd_fpKYxaTVRTyuZbSt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fpKYxaTVRTyuZbSt');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_listComponent_Catch
}
