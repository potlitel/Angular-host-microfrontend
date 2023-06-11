import { Component } from '@angular/core';

// @Component({
//   selector: 'host-remote-entry',
//   template: `<host-nx-welcome></host-nx-welcome>`,
// })
// export class RemoteEntryComponent {}
@Component({
  selector: 'app-entry',
  template: `
    <div class="container">
      <span>I'm a remote app :)</span>
    </div>
  `,
  styles: [
    `
      .container {
        border: 1px solid green;
        padding: 24px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
