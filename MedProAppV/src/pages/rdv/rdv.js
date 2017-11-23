"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_native_1 = require("ionic-native");
var CalPage = (function () {
    function CalPage(nav, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.Event = [];
        for (var i = 1; i < 4; i++) {
            this.Event.push({
                Event: i - 1,
                title: 'Event ' + i,
                note: 'Creating an event !',
                startDate: new Date(),
                endDate: new Date(),
                titleUpdated: 'Event updated',
                noteUpdated: 'We update the event !'
            });
            this.Event[i - 1].startDate.setMinutes(this.Event[i - 1].startDate.getMinutes() + (10 * i));
            this.Event[i - 1].endDate.setHours(this.Event[i - 1].startDate.getHours() + 1);
        }
    }
    CalPage.prototype.createEvent = function (Event) {
        var _this = this;
        var options = {
            firstReminderMinutes: 5
        };
        ionic_native_1.Calendar.createEventWithOptions(this.Event[Event].title, null, this.Event[Event].note, this.Event[Event].startDate, this.Event[Event].endDate, options).then(function () {
            _this.showAlert('createEvent' + Event + ' Success');
        });
    };
    CalPage.prototype.deleteEvent = function (Event) {
        var _this = this;
        ionic_native_1.Calendar.deleteEvent(this.Event[Event].title, null, this.Event[Event].note, this.Event[Event].startDate, this.Event[Event].endDate).then(function (data) {
            _this.showAlert('deleteEvent' + Event + ' Success');
        });
    };
    CalPage.prototype.openCalendar = function (Event) {
        ionic_native_1.Calendar.openCalendar(this.Event[Event].startDate);
    };
    CalPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Notification !!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    return CalPage;
}());
CalPage = __decorate([
    core_1.Component({
        templateUrl: 'rdv.html',
        selector: 'page-cal'
    })
], CalPage);
exports.CalPage = CalPage;
