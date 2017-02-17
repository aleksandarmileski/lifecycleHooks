import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PeekABooComponent} from './peek-a-boo/peek-a-boo.component';
import {PeekABooParentComponent} from './peek-a-boo-parent/peek-a-boo-parent.component';
import {SpyDirective} from './spy.directive';
import {SpyComponent} from './spy/spy.component';
import {OnChangesComponent, OnChangesParentComponent} from './on-changes/on-changes.component';
import {DoCheckComponent, DoCheckParentComponent} from './do-check/do-check.component';
import {AfterViewComponent, AfterViewParentComponent, ChildViewComponent} from './after-view/after-view.component';
import {
  AfterContentComponent, AfterContentParentComponent,
  ChildComponent
} from './after-content/after-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    SpyDirective,
    SpyComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    ChildViewComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
