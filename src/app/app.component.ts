import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{pageTitle}}!!
      </h1>
      ... Starter Files ...
    </div>
  `,
  styles: [`
  .nav-link {
  font-size: large;
}
`]
})
export class AppComponent {
  pageTitle: string = 'Angular Starter Project'
}
