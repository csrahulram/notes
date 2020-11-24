import { Injector, NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const declarations = [];
const modules = [MatToolbarModule, MatIconModule, MatButtonModule];
let AppInjector: Injector;

@NgModule({
    declarations,
    imports: modules,
    exports: [modules, declarations]
})

export class SharedModule {
    constructor(private injector: Injector){
        AppInjector = this.injector;
    }
}
