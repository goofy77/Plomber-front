import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {PopupModule} from 'ng2-opd-popup';
import {MenuComponent} from "./menu/menu.component";
import {DrawingUploadComponent} from "./upload/upload.component";
import {DrawingComponent} from "./project/drawing/drawing.component";
import {PdfViewerComponent} from "ng2-pdf-viewer";
import {DrawingService} from "./project/drawing/drawing.service";
import {AppRoutingModule} from "./routing/router.module";
import {AccountComponent} from "./account/account.component";
import {ProjectComponent} from "./project/project.component";
import {ProjectListComponent} from "app/project/list/project-list.component";
import {ProjectService} from "./project/project.service";
import {UploadService} from "./upload/upload.service";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "app/security/auth.guard";
import {LoginService} from "./login/login.service";
import {AuthFactory} from "./security/auth.factory";
import {RegistrationComponent} from "./user/registration/registration.component";
import {RegistrationService} from "./user/registration/registration.service";
import {StoreModule} from "@ngrx/store";
import {ProjectCreatorComponent} from "./project-creator/project-creator.component";
import {DrawingListComponent} from "./project/drawing/drawing-list/drawing-list.component";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./effects/login.effects";
import {RouterStoreModule} from "@ngrx/router-store";
import {EmailEffects} from "./effects/email.effects";
import {UserEffects} from "./effects/user.effects";
import {ProjectEffects} from "app/effects/project.effects";
import {ProjectStateEffects} from "./effects/project-state.effects";
import {reducer} from "./store/app.store";
import {AddDrawingComponent} from "./project/add-drawing/add-drawing.component";
import { DefectComponentComponent } from './defect/defect.component';
import { DefectCreatorComponent } from './defect-creator/defect-creator.component';
import {DefectCreatorService} from "./defect-creator/defect-creator.service";
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import {DrawingEffects} from "./effects/drawing.effects";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ProjectComponent,
    MenuComponent,
    DrawingUploadComponent,
    ProjectListComponent,
    DrawingComponent,
    PdfViewerComponent,
    LoginComponent,
    RegistrationComponent,
    ProjectCreatorComponent,
    DrawingListComponent,
    AddDrawingComponent,
    DefectComponentComponent,
    DefectCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // MenuRoutingModule,
    PopupModule.forRoot(),
    AppRoutingModule,
    EffectsModule.run(EmailEffects),
    EffectsModule.run(ProjectEffects),
    // EffectsModule.run(DrawingEffects),
    // EffectsModule.run(DrawingListEffects),
    EffectsModule.run(LoginEffects),
    EffectsModule.run(DrawingEffects),
    EffectsModule.run(ProjectStateEffects),
    EffectsModule.run(UserEffects),
    // StoreModule.provideStore({ registration, drawingList, login, emailReducer, projectList, project, drawing, router: routerReducer}),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    DrawingService,
    ProjectService,
    UploadService,
    RegistrationService,
    DefectCreatorService,
    AuthGuard,
    AuthFactory,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

