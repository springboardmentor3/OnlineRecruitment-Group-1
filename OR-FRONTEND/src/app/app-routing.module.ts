import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobsComponent } from './jobs/jobs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EmployersListComponent } from './employers-list/employers-list.component';
import { GraduatesListComponent } from './graduates-list/graduates-list.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component';
import { JobProfileComponent } from './job-profile/job-profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { PendingAppointmentsComponent } from './pending-appointments/pending-appointments.component';
import { AcceptedAppointmentsComponent } from './accepted-appointments/accepted-appointments.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [

  {path:'',component:WelcomeComponent},
  
  {path:'login',component:LogInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'footer',component:FooterComponent},
  {path:'job-application',component:JobApplicationComponent},
  {path:'jobs',component:JobsComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'add-job',component:AddJobComponent},
  {path:'employers-list',component:EmployersListComponent},
  {path:'graduates-list',component:GraduatesListComponent},
  {path:'employer-profile',component:EmployerProfileComponent},
  {path:'jobs-list',component:JobsListComponent},
  {path:'graduate-profile',component:GraduateProfileComponent},
  {path:'job-profile',component:JobProfileComponent},
  {path:'inbox',component:InboxComponent},
  {path:'outbox',component:OutboxComponent},
  {path:'pending-appointments',component:PendingAppointmentsComponent},
  {path:'accepted-appointments',component:AcceptedAppointmentsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'admin-profile',component:AdminProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
