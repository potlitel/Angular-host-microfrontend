import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote',
    loadChildren: () =>
      import('remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    redirectTo: 'NxWelcomeComponent',
    pathMatch: 'full',
    // component: NxWelcomeComponent,
    // pathMatch: 'full',
  },
];
