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
import { addBlogservice } from 'app/sd-services/addBlogservice'; //_splitter_
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-create',
  templateUrl: './create.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class createComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_4czr6TFQ9XoGbKsN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4czr6TFQ9XoGbKsN(bh) {
    try {
      bh = this.sd_6xjMDCJjpCsnRMUW(bh);
      //appendnew_next_sd_4czr6TFQ9XoGbKsN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4czr6TFQ9XoGbKsN');
    }
  }

  printInputOnBlur(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.callAddBlogService(bh);
      //appendnew_next_printInputOnBlur
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_weuu4ZexjEZcLSig');
    }
  }

  initForGroup(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_XJKoXe3ZuZE95eZB(bh);
      //appendnew_next_initForGroup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HGdsvjrOqi98AoWw');
    }
  }

  //appendnew_flow_createComponent_start

  sd_6xjMDCJjpCsnRMUW(bh) {
    try {
      bh = this.sd_urDKA25leer1zFxh(bh);
      //appendnew_next_sd_6xjMDCJjpCsnRMUW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6xjMDCJjpCsnRMUW');
    }
  }

  sd_urDKA25leer1zFxh(bh) {
    try {
      let outputVariables = this.initForGroup();

      //appendnew_next_sd_urDKA25leer1zFxh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_urDKA25leer1zFxh');
    }
  }

  async callAddBlogService(bh) {
    try {
      const addBlogserviceInstance: addBlogservice =
        this.__page_injector__.get(addBlogservice);

      let outputVariables = await addBlogserviceInstance.addBlog(
        this.page.blogForm.value
      );

      //appendnew_next_callAddBlogService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jLVc65wT1LZrPRQ0');
    }
  }

  sd_XJKoXe3ZuZE95eZB(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      bh = this.sd_rRCrQldEbHVus3lP(bh);
      //appendnew_next_sd_XJKoXe3ZuZE95eZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XJKoXe3ZuZE95eZB');
    }
  }

  sd_rRCrQldEbHVus3lP(bh) {
    try {
      const page = this.page;
      page.blogForm = new page.formGroup({
        title: new page.formControl(''),
        description: new page.formControl(''),
        image: new page.formControl(''),
      });
      //appendnew_next_sd_rRCrQldEbHVus3lP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rRCrQldEbHVus3lP');
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
  //appendnew_flow_createComponent_Catch
}
