import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HomePageComponent} from '../app/shared/homepage.component';
import {BrowseJobsComponent} from '../app/jobs/browsejobs.component';
import {AddResumeComponent} from '../app/resume/addresume.component';
import {LoginComponent} from '../app/login/login.component';
import {PricingComponent} from '../app/pricing/pricing.component'


@Component({
    selector:"incare-app",
    templateUrl: "../app/app.component.html",
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/Home', name: 'Home', component: HomePageComponent, useAsDefault: true },
    { path: '/BrowseJobs', name: 'BrowseJobs', component: BrowseJobsComponent},
    { path: '/PostResume', name: 'PostResume', component: AddResumeComponent},
    { path: '/Login', name: 'Login', component: LoginComponent},
    { path: '/Pricing', name: 'Pricing', component: PricingComponent}
])

export class AppComponent{
}

