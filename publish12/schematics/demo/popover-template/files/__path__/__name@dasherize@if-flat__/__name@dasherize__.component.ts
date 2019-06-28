import {
  Component
} from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button
      nz-button
      nz-popover
      [nzTitle]="titleTemplate"
      [nzContent]="contentTemplate">
      Render Template
    </button>
    <ng-template #titleTemplate><i nz-icon type="close"></i> Title</ng-template>
    <ng-template #contentTemplate><i nz-icon type="check"></i> Content</ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
