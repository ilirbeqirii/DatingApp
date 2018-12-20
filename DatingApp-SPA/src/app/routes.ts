import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailsComponent } from "./members/member-details/member-details.component";
import { MemberDetailResolverService } from "./_resolvers/member-detail-resolver.service";
import { MemberListResolverService } from "./_resolvers/member-list-resolver.service.";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: "members", component: MemberListComponent, resolve: { users: MemberListResolverService} },
      { path: "members/:id", component: MemberDetailsComponent, resolve: { user: MemberDetailResolverService} },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
