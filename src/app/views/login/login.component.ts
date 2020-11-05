import { Component, OnDestroy, OnInit } from "@angular/core";
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
    login: "Connecting..."
    constructor(private loginService: LoginService) {

    }

    ngOnInit() {

        this.loginService.loginBSO.subscribe(data => {
            this.login = data;
        })

        this.loginService.test();
    }

    ngOnDestroy() {

    }
}