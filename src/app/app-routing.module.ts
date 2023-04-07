import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 4 components loaded
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
// gurding 
import { 
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
   redirectLoggedInTo,
   canActivate,
  // canActivate,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {path : 'signin', 
  component :SigninComponent,
  //canActivate[ ],
  data:{AuthGuardPipe: redirectLoggedInToHome},
},
  
  {
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: '',
    component:HomeComponent,
    //...canActivate[AngularFireAuthGuard],
    data:{AuthGuardPipe: redirectUnauthorizedToLogin},
  },
  {
    path:"**",
    component:PagenotfoundComponent,

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
