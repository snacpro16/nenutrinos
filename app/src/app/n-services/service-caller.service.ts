//append_imports_start

import * as sd_KZpYI6SZaXsr6sqL from 'app/sd-services/addBlogservice'; //_splitter_
import * as sd_pjQePRWErRF7JsTJ from 'app/sd-services/addUserService'; //_splitter_
import * as sd_nFTu7pydhdFO53KZ from 'app/sd-services/fetchBlogsService'; //_splitter_
import * as sd_JEkCANwkYB5lllGY from 'app/sd-services/fetchUsersService'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_KZpYI6SZaXsr6sqL: sd_KZpYI6SZaXsr6sqL.addBlogservice,
    private sd_pjQePRWErRF7JsTJ: sd_pjQePRWErRF7JsTJ.addUserService,
    private sd_nFTu7pydhdFO53KZ: sd_nFTu7pydhdFO53KZ.fetchBlogsService,
    private sd_JEkCANwkYB5lllGY: sd_JEkCANwkYB5lllGY.fetchUsersService
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
