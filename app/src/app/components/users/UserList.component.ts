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
import { fetchUsersService } from 'app/sd-services/fetchUsersService'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-UserList',
  templateUrl: './UserList.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class UserListComponent {
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
      this.sd_EgUO7kvIsqD1vHHL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EgUO7kvIsqD1vHHL(bh) {
    try {
      bh = this.sd_RFarR1l7sjJtZtTk(bh);
      //appendnew_next_sd_EgUO7kvIsqD1vHHL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EgUO7kvIsqD1vHHL');
    }
  }

  addUserNavigate(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.createNav(bh);
      //appendnew_next_addUserNavigate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1bK6TThMHAizDsOM');
    }
  }

  userDetailNavigate(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.detailsNav(bh);
      //appendnew_next_userDetailNavigate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MtD2eMnhv0nLTPxT');
    }
  }

  editUserNavigate(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.editNav(bh);
      //appendnew_next_editUserNavigate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jhzxlVcDo3UJ3Hi1');
    }
  }

  //appendnew_flow_UserListComponent_start

  sd_RFarR1l7sjJtZtTk(bh) {
    try {
      bh = this.callUserService(bh);
      //appendnew_next_sd_RFarR1l7sjJtZtTk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RFarR1l7sjJtZtTk');
    }
  }

  async callUserService(bh) {
    try {
      const fetchUsersServiceInstance: fetchUsersService =
        this.__page_injector__.get(fetchUsersService);

      let outputVariables = await fetchUsersServiceInstance.fetchUsersList();
      this.page.users = outputVariables.local.users;

      //appendnew_next_callUserService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i1ryWaWWgR2AdLtS');
    }
  }

  async createNav(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/users/create');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_createNav
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N3BOdVkgWvjxs4wj');
    }
  }

  async detailsNav(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/users/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, { id: '' })]);
      //appendnew_next_detailsNav
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OF2OpKEhzABGGEqS');
    }
  }

  async editNav(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/users/edit/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, { id: '' })]);
      //appendnew_next_editNav
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UfJ83QMaQWm7iyAb');
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
  //appendnew_flow_UserListComponent_Catch
}
