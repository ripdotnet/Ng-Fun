import { Routes } from "@angular/router";
import { from } from "rxjs";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouterActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolverService } from "./events/events-list-resolve.service";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouterActivator],
  },
  { path: "404", component: Error404Component },
  { path: "", pathMatch: "full", redirectTo: "/events" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
];
