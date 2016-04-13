import { Component, OnInit, EventEmitter, Output } from 'angular2/core';

@Component({
    selector: 'app-login',
    templateUrl: '../app/login/login.component.html',
    styleUrls: ['../app/login/login.component.css']
})
export class LoginComponent implements OnInit {
     @Output() showFooter: EventEmitter<boolean> = new EventEmitter();
    constructor() { }

    ngOnInit() { 
        this.showFooter.emit(false);
    }

}