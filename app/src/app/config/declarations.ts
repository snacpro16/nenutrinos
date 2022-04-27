import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-UserCreateComponent
import { UserCreateComponent } from '../components/users/UserCreate.component';
//CORE_REFERENCE_IMPORT-UserListComponent
import { UserListComponent } from '../components/users/UserList.component';
//CORE_REFERENCE_IMPORT-UserDetailComponent
import { UserDetailComponent } from '../components/users/UserDetail.component';
//CORE_REFERENCE_IMPORT-createComponent
import { createComponent } from '../components/training/create.component';
//CORE_REFERENCE_IMPORT-detailComponent
import { detailComponent } from '../components/training/detail.component';
//CORE_REFERENCE_IMPORT-listComponent
import { listComponent } from '../components/training/list.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/training/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-UserCreateComponent
  UserCreateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-UserListComponent
  UserListComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-UserDetailComponent
  UserDetailComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-createComponent
  createComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-detailComponent
  detailComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-listComponent
  listComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: homeComponent,
    children: [
      {
        path: 'list',
        component: listComponent,
        canActivate: [NeutrinosAuthGuardService],
      },
      { path: 'detail/:id', component: detailComponent },
      { path: 'create', component: createComponent },
      {
        path: 'users',
        component: UserListComponent,
        children: [
          { path: 'create', component: UserCreateComponent },
          { path: ':id', component: UserDetailComponent },
        ],
      },
    ],
  },
  { path: '', redirectTo: 'home/list', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
