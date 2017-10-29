"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var crud_1 = require("../patient/patient");
var page1_1 = require("../rdv/rdv");
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.showAlert = function () {
        this.navCtrl.push(crud_1.CrudPage);
    };
    HomePage.prototype.openCal = function () {
        this.navCtrl.push(page1_1.CalPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        templateUrl: 'home.html',
        selector: 'page-home'
    })
], HomePage);
exports.HomePage = HomePage;
