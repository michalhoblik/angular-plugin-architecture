import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginInventarisierungComponent } from './plugin-inventarisierung.component';

@NgModule({
  imports: [
    CommonModule
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
export class PluginInventarisierungModule { }