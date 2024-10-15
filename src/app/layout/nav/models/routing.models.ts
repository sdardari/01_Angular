import { Route } from "@angular/router";

export interface RoutingModels {


    title: string;
    url?:string;
    children? : RoutingModels[];
    isVisible? : boolean;
}
