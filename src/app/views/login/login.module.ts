import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';

const routes: Routes = [{
    path: '',
    component: LoginComponent
}]

@NgModule({
    declarations: [LoginComponent],
    imports: [RouterModule.forChild(routes), HttpClientModule],
    exports: [],
    providers: [LoginService]
})

export class LoginModule {

}