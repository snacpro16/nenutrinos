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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_TuExa7TqBe4IxEhh(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_TuExa7TqBe4IxEhh(bh) {
    try {
      bh = this.sd_n2VUnpotNP2qLcAl(bh);
      //appendnew_next_sd_TuExa7TqBe4IxEhh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TuExa7TqBe4IxEhh');
    }
  }

  openAlert(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.showTheAlertBox(bh);
      //appendnew_next_openAlert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WmbZd8c3DxbhiNpT');
    }
  }

  createPage(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NXVJnQpSDdsrN9tv(bh);
      //appendnew_next_createPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tqHg3tZAEYkl7Tp1');
    }
  }

  listPage(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Dhnk8NRSkBKFuVk3(bh);
      //appendnew_next_listPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uMU15MOzKrJOhCaS');
    }
  }

  loginFlow(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_10Pbdtuv1MB8osb6(bh);
      //appendnew_next_loginFlow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZNnzLP9zxRzyRMHm');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_g3GujIj5RJsPgGmi(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_47FmpZx1NdWtRiPh');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_n2VUnpotNP2qLcAl(bh) {
    try {
      //appendnew_next_sd_n2VUnpotNP2qLcAl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n2VUnpotNP2qLcAl');
    }
  }

  showTheAlertBox(bh) {
    try {
      const page = this.page;
      alert('Hello World!!!!');
      //appendnew_next_showTheAlertBox
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F5oeQIPIOGpZabjD');
    }
  }

  async sd_NXVJnQpSDdsrN9tv(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/create');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_NXVJnQpSDdsrN9tv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NXVJnQpSDdsrN9tv');
    }
  }

  async sd_Dhnk8NRSkBKFuVk3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/list');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_Dhnk8NRSkBKFuVk3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dhnk8NRSkBKFuVk3');
    }
  }

  sd_10Pbdtuv1MB8osb6(bh) {
    try {
      const page = this.page;
      page.system.oauthService.login();
      //appendnew_next_sd_10Pbdtuv1MB8osb6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_10Pbdtuv1MB8osb6');
    }
  }

  sd_g3GujIj5RJsPgGmi(bh) {
    try {
      const page = this.page;
      page.system.oauthService.logout();
      //appendnew_next_sd_g3GujIj5RJsPgGmi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g3GujIj5RJsPgGmi');
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
  //appendnew_flow_homeComponent_Catch
}
