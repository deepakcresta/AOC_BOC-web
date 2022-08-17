import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },
    {
      path: 'home',
      loadChildren: () =>
        import('./client-side/client-side.module').then(
          (m) => m.ClientSideModule
        ),
    },
    // {
    //   path: 'admin',
      
    //   loadChildren: () =>
    //     import('./admin-configuration/admin-config.module').then(
    //       (m) => m.AdminConfigModule
    //     ),
    //     runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    // },
    {
      path: '**',
      redirectTo: 'home',
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class FeaturesRoutingModule {}
