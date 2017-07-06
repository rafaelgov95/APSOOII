import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector:'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginActive = true;
    legout=true;
    //  @Output() legout=false;
    //  @Output() modouValor = new EventEmitter();
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/logado';
    }

    login() {
        
        console.log("Teste");
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log(this.loginActive);
                    this.router.navigate([this.returnUrl]);
                            this.loading = false;
                             this.loginActive=false;
                             this.legout=true;
          
                                
             },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
