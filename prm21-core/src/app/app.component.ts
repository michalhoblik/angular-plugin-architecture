import { Component, ViewChild, ViewContainerRef, Compiler, Injector, AfterViewInit } from '@angular/core';

declare const SystemJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef, static: false }) content: ViewContainerRef;

  constructor(private compiler: Compiler, private injector: Injector) { }
    ngAfterViewInit() {
    this.loadPlugins();
  }

  private async loadPlugins() {
    // import external module bundle
    const module = await SystemJS.import('assets/plugins/plugin-inventarisierung.bundle.js');

    // compile module
    const moduleFactory = await this.compiler
                                    .compileModuleAsync<any>(module.PluginInventarisierungModule);

    // resolve component factory
    const moduleRef = moduleFactory.create(this.injector);

    // get the custom made provider name 'plugins'
    const componentProvider = moduleRef.injector.get('plugins');

    // from plugins array load the component on position 0
    const componentFactory = moduleRef.componentFactoryResolver
                                      .resolveComponentFactory<any>(
                                          componentProvider[0][0].component
                                      );

    // compile component
    this.content.createComponent(componentFactory);

    // sending @Input() values
    // pluginComponent.instance.anyInput = "inputValue";

    // accessing the component template view
    // (pluginComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}
