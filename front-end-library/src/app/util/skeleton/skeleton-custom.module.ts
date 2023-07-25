import {NgModule} from "@angular/core";
import {SkeletonModule} from "primeng/skeleton";
import {CategoryPageSkeletonComponent} from "./category-page-skeleton/category-page-skeleton.component";
import { HomePageSkeletonComponent } from './home-page-skeleton/home-page-skeleton.component';
import { UserProfileSkeletonComponent } from './user-profile-skeleton/user-profile-skeleton.component';

@NgModule({
  declarations: [
    CategoryPageSkeletonComponent,
    HomePageSkeletonComponent,
    UserProfileSkeletonComponent
  ],
  imports: [SkeletonModule],
    exports: [
      CategoryPageSkeletonComponent,
      HomePageSkeletonComponent,
      UserProfileSkeletonComponent
    ]
})

export class SkeletonCustomModule { }
