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
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { addUserService } from 'app/sd-services/addUserService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-UserCreate',
  templateUrl: './UserCreate.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class UserCreateComponent {
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
      this.sd_GXYakWOQQzhQn3LM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GXYakWOQQzhQn3LM(bh) {
    try {
      bh = this.sd_TO4t94oOl3LTvQbp(bh);
      //appendnew_next_sd_GXYakWOQQzhQn3LM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GXYakWOQQzhQn3LM');
    }
  }

  initForGroup(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lfL3gMGxA6OCKKOg(bh);
      //appendnew_next_initForGroup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X4Fr8Uo8ZsHFDqQi');
    }
  }

  submitButtonHandler(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.callAddUserService(bh);
      //appendnew_next_submitButtonHandler
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mF7cWklndJb2O0A0');
    }
  }

  //appendnew_flow_UserCreateComponent_start

  sd_TO4t94oOl3LTvQbp(bh) {
    try {
      bh = this.sd_6MrqFCZxFdVUIgBB(bh);
      //appendnew_next_sd_TO4t94oOl3LTvQbp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TO4t94oOl3LTvQbp');
    }
  }

  sd_6MrqFCZxFdVUIgBB(bh) {
    try {
      let outputVariables = this.initForGroup();

      //appendnew_next_sd_6MrqFCZxFdVUIgBB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6MrqFCZxFdVUIgBB');
    }
  }

  sd_lfL3gMGxA6OCKKOg(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      bh = this.sd_arhvWOilcSkvjuiH(bh);
      //appendnew_next_sd_lfL3gMGxA6OCKKOg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lfL3gMGxA6OCKKOg');
    }
  }

  sd_arhvWOilcSkvjuiH(bh) {
    try {
      const page = this.page;
      page.userForm = new page.formGroup({
        name: new page.formControl(''),
        email: new page.formControl(''),
        phonenumber: new page.formControl(''),
      });
      //appendnew_next_sd_arhvWOilcSkvjuiH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_arhvWOilcSkvjuiH');
    }
  }

  async callAddUserService(bh) {
    try {
      const addUserServiceInstance: addUserService =
        this.__page_injector__.get(addUserService);

      let outputVariables = await addUserServiceInstance.addUser(
        this.page.userForm.value
      );

      //appendnew_next_callAddUserService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_shLgLmV9lWXuyZHm');
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
  //appendnew_flow_UserCreateComponent_Catch
}
