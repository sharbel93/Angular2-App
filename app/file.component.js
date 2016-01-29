System.register(['angular2/core', 'angular2/router', './mongoapi.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mongoapi_service_1;
    var FileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mongoapi_service_1_1) {
                mongoapi_service_1 = mongoapi_service_1_1;
            }],
        execute: function() {
            FileComponent = (function () {
                function FileComponent(service, router, routeParams) {
                    var _this = this;
                    this.service = service;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.file = null;
                    // get the file clicked from the URL
                    var fileid = this.routeParams.get("fileid");
                    // get the file from the ID
                    this.service.mongoGet('files', '{id:' + fileid + '}').subscribe(function (data) { return _this.file = data[0]; });
                }
                FileComponent = __decorate([
                    core_1.Component({
                        selector: 'file',
                        templateUrl: 'app/view/file.html',
                        providers: [mongoapi_service_1.MongoAPIService]
                    }), 
                    __metadata('design:paramtypes', [mongoapi_service_1.MongoAPIService, router_1.Router, router_1.RouteParams])
                ], FileComponent);
                return FileComponent;
            })();
            exports_1("FileComponent", FileComponent);
        }
    }
});
//# sourceMappingURL=file.component.js.map