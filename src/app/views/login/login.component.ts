import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
    login: "Connecting...";
    loginSub: Subscription;
    constructor(private loginService: LoginService) {

    }

    ngOnInit() {

        this.loginSub = this.loginService.loginBSO.subscribe(data => {
            this.login = data;
        })

        this.loginService.test();
    }

    ngOnDestroy() {
        if (this.loginSub) {
            this.loginSub.unsubscribe();
        }
    }
}