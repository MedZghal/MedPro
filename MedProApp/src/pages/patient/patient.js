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
var CrudPage = (function () {
    function CrudPage(backandService, loadingCtrl, alertCtrl, modalCtrl) {
        var _this = this;
        this.backandService = backandService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.name = 'World';
        this.description = 'Wonderful';
        this.items = [];
        this.searchQuery = '';
        this.showloading();
        this.load();
        this.backandService.on("items_updated")
            .subscribe(function (data) {
            console.log("items_updated", data);
            var a = data;
            var newItem = {};
            a.forEach(function (kv) { return newItem[kv.Key] = kv.Value; });
            _this.items.unshift(newItem);
        }, function (err) {
            console.log(err);
        }, function () { return console.log('received update from socket'); });
    }
    CrudPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Notification !!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CrudPage.prototype.openModal = function (clientObj) {
        var modal = this.modalCtrl.create(Profile, clientObj);
        modal.present();
    };
    CrudPage.prototype.openModal1 = function () {
        var _this = this;
        var modal = this.modalCtrl.create(Profile1);
        modal.onDidDismiss(function (data) {
            _this.load();
        });
        modal.present();
    };
    CrudPage.prototype.openModal2 = function (clientObj) {
        var _this = this;
        var modal = this.modalCtrl.create(Profile2, clientObj);
        modal.onDidDismiss(function (data) {
            _this.load();
        });
        modal.present();
    };
    CrudPage.prototype.PushNotification = function () {
        var sound = 'file://beep.mp3';
        ionic_native_1.LocalNotifications.schedule({
            id: 1,
            title: 'Notification !!',
            text: 'Email envoyé avec succès',
            sound: sound,
            icon: '<ion-icon ios="ios-notifications-outline" md="md-notifications-outline"></ion-icon>'
        });
    };
    CrudPage.prototype.delete = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure you want to delete the selected rows?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.showloading();
                        console.log('Buy clicked');
                        _this.backandService.delete('Client', item.Idclient)
                            .subscribe(function (data) {
                            console.log(data);
                        }, function (err) { _this.backandService.logError(err); _this.showAlert("Delete Failed !!"); }, function () { _this.load(); _this.showAlert("Delete with Success!!"); });
                    }
                }
            ]
        });
        alert.present();
    };
    CrudPage.prototype.load = function () {
        var _this = this;
        this.backandService.getList('Patient')
            .subscribe(function (data) {
            console.log(data);
            _this.items = data;
        }, function (err) { _this.backandService.logError(err); _this.showAlert("Error (Failed to connect BD)!!"); }, function () { return console.log('OK'); });
    };
    CrudPage.prototype.showloading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            spinner: 'bubbles',
            duration: 2000
        });
        loading.present();
        return loading;
    };
    CrudPage.prototype.getItems = function (refresher) {
        this.showloading();
        this.load();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    CrudPage.prototype.filterItems = function (searchbar) {
        var _this = this;
        // set q to the value of the searchbar
        var q = searchbar;
        // if the value is an empty string don't filter the items
        if (!q || q.trim() == '') {
            return;
        }
        else {
            q = q.trim();
        }
        var filter = [
            {
                fieldName: 'nomclient',
                operator: 'contains',
                value: q
            }
        ];
        this.backandService.getList('Client', null, null, filter)
            .subscribe(function (data) {
            console.log("subscribe", data);
            _this.items = data;
        }, function (err) { return _this.backandService.logError(err); }, function () { return console.log('OK'); });
    };
    return CrudPage;
}());
CrudPage = __decorate([
    core_1.Component({
        templateUrl: 'patient.html',
        selector: 'page-crud'
    })
], CrudPage);
exports.CrudPage = CrudPage;
var Profile = (function () {
    function Profile(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.client = [];
        this.client = this.params.get('clientObj');
        console.log(this.client);
    }
    Profile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Profile;
}());
Profile = __decorate([
    core_1.Component({
        template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src=\"./assets/{{client.img}}\">\n        </ion-avatar>\n        <h2>{{client.Idclient}}</h2>\n        <p>{{client.nomclient}}</p>\n        <p>{{client.preclient}}</p>\n      </ion-item>\n\n      <ion-item>\n        Ville\n        <ion-note item-right>\n          {{client.idville}}\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        Sexe\n        <ion-note item-right>\n          {{client.sex}}\n        </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>\n"
    })
], Profile);
exports.Profile = Profile;
var Profile1 = (function () {
    function Profile1(platform, params, viewCtrl, backandService, loadingCtrl, alertCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.backandService = backandService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.id = '';
        this.firstName = '';
        this.lastName = '';
        this.ville = '';
        this.sexe = '';
        this.img = '';
        this.items = [];
        console.log('Ranning');
    }
    Profile1.prototype.AjouterClient = function () {
        var _this = this;
        this.showloading();
        if (this.sexe == 'Homme')
            this.img = 'img/imageM.jpg';
        else if (this.sexe == 'Femme')
            this.img = 'img/imageF.jpg';
        else
            this.img = '';
        console.log(this.id, this.firstName, this.lastName, this.sexe, this.ville, this.img);
        this.backandService.create('Client', { Idclient: this.id, nomclient: this.firstName, preclient: this.lastName, sex: this.sexe, idville: this.ville, img: this.img }).subscribe(function (data) {
            // add to beginning of array
            console.log(data);
            _this.id = '';
            _this.firstName = '';
            _this.lastName = '';
            _this.ville = '';
            _this.sexe = '';
        }, function (err) { _this.backandService.logError(err); _this.showAlert("Insert Failed !!"); }, function () { _this.dismiss(); _this.showAlert("Insert with Success!!"); });
        this.showloading().dismiss();
    };
    Profile1.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Notification !!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    Profile1.prototype.showloading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            spinner: 'bubbles',
            duration: 2000
        });
        loading.present();
        return loading;
    };
    Profile1.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Profile1;
}());
Profile1 = __decorate([
    core_1.Component({
        template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ajouter Patient\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"page2\">\n    <ion-list>\n        <ion-item>\n            <ion-label floating>ID</ion-label>\n            <ion-input type=\"email\" [value]=\"id\" (input)=\"id = $event.target.value\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input type=\"text\" [value]=\"firstName\" (input)=\"firstName = $event.target.value\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input type=\"text\" [value]=\"lastName\" (input)=\"lastName = $event.target.value\"></ion-input>\n        </ion-item>\n        <ion-item>\n        <ion-label>Sexe</ion-label>\n        <ion-select [(ngModel)]=\"sexe\" >\n        <ion-option value=\"Homme\">Homme</ion-option>\n        <ion-option value=\"Femme\">Femme</ion-option>\n        </ion-select>\n        </ion-item>\n        <ion-item>\n        <ion-label>Ville</ion-label>\n        <ion-select [(ngModel)]=\"ville\" multiple=\"false\" >\n        <ion-option value=\"Sfax\" selected=\"true\">Sfax</ion-option>\n        <ion-option value=\"Tunis\">Tunis</ion-option>\n        <ion-option value=\"Sousse\">Sousse</ion-option>\n        <ion-option value=\"Gabes\">Gabes</ion-option>\n        <ion-option value=\"Mahdia\">Mahdia</ion-option>\n        </ion-select>\n        </ion-item>\n        <!-- <h4 style=\"color:red;\" ng-bind=\"vm.errorMessage\"></h4> -->\n\n        <button ion-button block (click)=\"AjouterClient()\" color=\"success\">Ajouter</button>\n\n    </ion-list>\n</ion-content>\n"
    })
], Profile1);
exports.Profile1 = Profile1;
var Profile2 = (function () {
    function Profile2(platform, params, viewCtrl, backandService, loadingCtrl, alertCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.backandService = backandService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.id = '';
        this.firstName = '';
        this.lastName = '';
        this.ville = '';
        this.sexe = '';
        this.img = '';
        this.items = [];
        this.items = this.params.get('clientObj');
        this.id = this.items["Idclient"];
        this.firstName = this.items["nomclient"];
        this.lastName = this.items["preclient"];
        this.ville = this.items["idville"];
        this.sexe = this.items["sex"];
    }
    Profile2.prototype.UpdateClient = function () {
        var _this = this;
        this.showloading();
        if (this.sexe == 'Homme')
            this.img = 'img/imageM.jpg';
        else if (this.sexe == 'Femme')
            this.img = 'img/imageF.jpg';
        else
            this.img = '';
        console.log(this.id, this.firstName, this.lastName, this.sexe, this.ville, this.img);
        this.backandService.update('Client', this.id, { nomclient: this.firstName, preclient: this.lastName, sex: this.sexe, idville: this.ville, img: this.img }).subscribe(function (data) {
            // add to beginning of array
            console.log(data);
            _this.id = '';
            _this.firstName = '';
            _this.lastName = '';
            _this.ville = '';
            _this.sexe = '';
        }, function (err) { _this.backandService.logError(err); _this.showAlert("Update Failed!!"); }, function () { _this.dismiss(); _this.showAlert("Update with Success!!"); });
        this.showloading().dismiss();
    };
    Profile2.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Notification !!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    Profile2.prototype.showloading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            spinner: 'bubbles',
            duration: 2000
        });
        loading.present();
        return loading;
    };
    Profile2.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Profile2;
}());
Profile2 = __decorate([
    core_1.Component({
        template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Update Patient\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"page2\">\n    <ion-list>\n        <ion-item>\n            <ion-label floating>ID</ion-label>\n            <ion-input type=\"email\" [value]=\"id\" (input)=\"id = $event.target.value\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input type=\"text\" [value]=\"firstName\" (input)=\"firstName = $event.target.value\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input type=\"text\" [value]=\"lastName\" (input)=\"lastName = $event.target.value\"></ion-input>\n        </ion-item>\n        <ion-item>\n        <ion-label>Sexe</ion-label>\n        <ion-select [(ngModel)]=\"sexe\" >\n        <ion-option value=\"Homme\">Homme</ion-option>\n        <ion-option value=\"Femme\">Femme</ion-option>\n        </ion-select>\n        </ion-item>\n        <ion-item>\n        <ion-label>Ville</ion-label>\n        <ion-select [(ngModel)]=\"ville\" >\n        <ion-option value=\"Sfax\">Sfax</ion-option>\n        <ion-option value=\"Tunis\">Tunis</ion-option>\n        <ion-option value=\"Sousse\">Sousse</ion-option>\n        <ion-option value=\"Gabes\">Gabes</ion-option>\n        <ion-option value=\"Mahdia\">Mahdia</ion-option>\n        </ion-select>\n        </ion-item>\n        <!-- <h4 style=\"color:red;\" ng-bind=\"vm.errorMessage\"></h4> -->\n\n        <button ion-button block (click)=\"UpdateClient()\" color=\"success\">Update</button>\n\n    </ion-list>\n</ion-content>\n"
    })
], Profile2);
exports.Profile2 = Profile2;
