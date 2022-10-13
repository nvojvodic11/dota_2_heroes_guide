import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationRoutes } from "src/app/shared-components/utils/interfaces/navigation-routes.interface";

@Component({
    selector: 'cc-toolbar',
    templateUrl: './cc-toolbar.html',
    styleUrls: ['./cc-toolbar.scss']
})

export class CCToolbarComponent{
    @Input() navigationRoutes: NavigationRoutes [];
    @Input() title: string;

    constructor(private router: Router){
    }

    public goToRoute = (route: string): void => {    
        this.router.navigateByUrl(route);
    }
}
