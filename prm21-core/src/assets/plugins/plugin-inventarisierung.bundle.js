(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['plugin-inventarisierung'] = {}, global.core, global.common));
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

    let PluginInventarisierungComponent = class PluginInventarisierungComponent {
        constructor() { }
    };
    PluginInventarisierungComponent = __decorate([
        core.Component({
            selector: 'plugin-inventarisierung-component',
            template: `<h3>Hi, I am the Plugin Inventarisierung component.</h3>`
        })
    ], PluginInventarisierungComponent);

    exports.PluginInventarisierungModule = class PluginInventarisierungModule {
    };
    exports.PluginInventarisierungModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule
            ],
            declarations: [PluginInventarisierungComponent],
            entryComponents: [PluginInventarisierungComponent],
            providers: [{
                    provide: 'plugins',
                    useValue: [{
                            name: 'plugin-inventarisierung-component',
                            component: PluginInventarisierungComponent
                        }],
                    multi: true
                }]
        })
    ], exports.PluginInventarisierungModule);

    Object.defineProperty(exports, '__esModule', { value: true });

})));
