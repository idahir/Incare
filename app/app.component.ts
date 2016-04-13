import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HomePageComponent} from '../app/shared/homepage.component';
import {BrowseJobsComponent} from '../app/jobs/browsejobs.component';
import {AddResumeComponent} from '../app/resume/addresume.component'
import {LoginComponent} from '../app/login/login.component'

@Component({
    selector:"incare-app",
    templateUrl: "../app/app.component.html",
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomePageComponent, useAsDefault: true },
    { path: '/browseJobs', name: 'BrowseJobs', component: BrowseJobsComponent},
    { path: '/postResume', name: 'PostResume', component: AddResumeComponent},
    { path: '/login', name: 'Login', component: LoginComponent}
])

export class AppComponent{
    showFooter:boolean = true;
    showNav:boolean = false;
}

