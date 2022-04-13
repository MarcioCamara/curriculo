import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { DeleteOutline, PlusCircleOutline } from '@ant-design/icons-angular/icons';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateResumeComponent } from './pages/generate-resume/generate-resume.component';
import { MinimalistComponent } from './pages/resume/minimalist/minimalist.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { AddressResource } from './resources/address/address.resource';

registerLocaleData(pt);

const icons: IconDefinition[] = [
  DeleteOutline,
  PlusCircleOutline,
];

@NgModule({
  declarations: [
    AppComponent,
    GenerateResumeComponent,
    ResumeComponent,
    MinimalistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzTypographyModule,
    NzIconModule.forRoot(icons),
    NzFormModule,
    NzButtonModule,
    NzDatePickerModule,
    NzInputModule,
    NzDividerModule,
    NzSelectModule,
    NzModalModule,
    NzSpinModule,
    NzCardModule,
    NzDescriptionsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    AddressResource,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
