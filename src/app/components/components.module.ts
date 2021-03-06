import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

// Componentes
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';

const COMP_COMP = [
    SidebarNavComponent
];

@NgModule({
    declarations: COMP_COMP,
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: COMP_COMP
})
export class ComponentsModule
{}