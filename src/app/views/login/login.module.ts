import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{
    path: '',
    component: LoginComponent
}]

@NgModule({
    declarations: [LoginComponent],
    imports: [RouterModule.forChild(routes), HttpClientModule, SharedModule],
    exports: [],
    providers: [LoginService]
})

export class LoginModule {

}