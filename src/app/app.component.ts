import { Component } from "@angular/core";

@Component({
selector: 'pm-root',
template: `<div><h1>{{pageTitle}}</h1>
<div>Numero Uno Component</div>
</div>`
})
export class AppComponent {
  pageTitle: string = 'Solomon Grundy Product Management.';
}