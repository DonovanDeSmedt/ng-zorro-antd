import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-steps>
      <nz-step nzTitle="Login" nzStatus="finish" nzIcon="user"></nz-step>
      <nz-step nzTitle="Verification" nzStatus="finish" nzIcon="solution"></nz-step>
      <nz-step nzTitle="Pay" nzStatus="process" nzIcon="loading"></nz-step>
      <nz-step nzTitle="Done" nzStatus="wait" [nzIcon]="iconTemplate"></nz-step>
      <ng-template #iconTemplate><i nz-icon type="smile"></i></ng-template>
    </nz-steps>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
