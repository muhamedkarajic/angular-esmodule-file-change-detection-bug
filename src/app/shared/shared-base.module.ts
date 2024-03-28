import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const importsAndExportsInternal: NgModule['exports'] = [
    CommonModule,
    RouterModule
];

@NgModule({
    imports: importsAndExportsInternal,
    exports: importsAndExportsInternal
})
export class SharedBaseModule { }
