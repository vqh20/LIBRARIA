import {NgModule} from "@angular/core";
import {DetailBookListComponent} from "./detail-book-list/detail-book-list.component";
import {DetailBookRoutingModule} from "./detail-book-routing.module";
import {LayoutModule} from "../layout/layout.module";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {CarouselModule} from 'primeng/carousel';
import {SkeletonModule} from "primeng/skeleton";
import {DetailBookSkeletonComponent} from "../../util/skeleton/detail-book-skeleton/detail-book-skeleton.component";

@NgModule({
  declarations: [
    DetailBookListComponent,
    DetailBookSkeletonComponent,
  ],
  imports: [
    DetailBookRoutingModule,
    LayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CarouselModule,
    SkeletonModule,
  ],
  providers:   [
    FormBuilder,
    MessageService,
  ]
})

export class DetailBookModule {}
