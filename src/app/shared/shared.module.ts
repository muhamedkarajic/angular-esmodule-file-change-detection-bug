import { NgModule } from "@angular/core";
import { SharedBaseModule } from "./shared-base.module";

@NgModule({
    imports: [SharedBaseModule],
    exports: [SharedBaseModule]
})
export class SharedModule { }
