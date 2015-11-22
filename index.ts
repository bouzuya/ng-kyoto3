import "reflect-metadata";
import {bootstrap, Component, CORE_DIRECTIVES} from "angular2/angular2";

@Component({
  selector: `my-app`,
  template: `
    <h1>hello world</h1>
  `,
  directives: [CORE_DIRECTIVES]
})
export class App {
}

bootstrap(App)
  .catch(err => console.error(err));
