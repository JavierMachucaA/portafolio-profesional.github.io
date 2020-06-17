import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ProjectsComponent } from './projects/projects.component';
import { ArticleComponent } from './experience/article/article.component';
import { AngularMaterialModule } from '../angular-material.module';
import { SkillDescComponent } from './skills/skill-desc/skill-desc.component';
import { MatExpansionModule, MatGridListModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SkillListColonDirective } from '../directives/skill-list-colon.directive';
import { SkillListColonPipe } from '../directives/skill-list-colon.pipe';
import { CertificationsComponent } from './certifications/certifications.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    AngularMaterialModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    MatExpansionModule,
    DialogComponent
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent,
    ArticleComponent,
    SkillDescComponent,
    SkillListColonDirective,
    SkillListColonPipe,
    CertificationsComponent,
    DialogComponent
    ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  entryComponents: [DialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
