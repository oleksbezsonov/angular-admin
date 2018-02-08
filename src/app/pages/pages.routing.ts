import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: '',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'setup/userList', pathMatch: 'full' },
      { path: 'status', loadChildren: 'app/pages/status/status.module#StatusModule' },
      { path: 'records', loadChildren: 'app/pages/records/records.module#RecordsModule' },
      { path: 'setup', loadChildren: 'app/pages/setup/setup.module#SetupModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
