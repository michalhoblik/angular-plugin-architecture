(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['plugin-owi21togo'] = {}, global.core, global.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    let PluginOwi21ToGoComponent = class PluginOwi21ToGoComponent {
        constructor() { }
    };
    PluginOwi21ToGoComponent = __decorate([
        core.Component({
            selector: 'plugin-owi21togo-component',
            template: `<h3>Hi, I am the Plugin owi21ToGo component.</h3>`
        })
    ], PluginOwi21ToGoComponent);

    exports.PluginOwi21ToGoModule = class PluginOwi21ToGoModule {
    };
    exports.PluginOwi21ToGoModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule
            ],
            declarations: [PluginOwi21ToGoComponent],
            entryComponents: [PluginOwi21ToGoComponent],
            providers: [{
                    provide: 'plugins',
                    useValue: [{
                            name: 'plugin-owi21togo-component',
                            component: PluginOwi21ToGoComponent
                        }],
                    multi: true
                }]
        })
    ], exports.PluginOwi21ToGoModule);

    Object.defineProperty(exports, '__esModule', { value: true });

})));
