import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { ReactiveComponent } from "./reactive/reactive.component";
import { ReactiveSignupComponent } from "./reactive-signup/reactive-signup.component";
import { TemplateDrivenComponent } from "./template-driven-register/template-driven.component";

const routes: Routes = [
    {path:'signup', component : ReactiveSignupComponent},
    {path:'register', component: TemplateDrivenComponent},
    {path:'login', component: ReactiveComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [ReactiveSignupComponent,TemplateDrivenComponent,ReactiveComponent]