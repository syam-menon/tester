import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class AppTitlePrefix extends TitleStrategy {
  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot); 
    if (title) {
      this.title.setTitle(`App - ${title}`); 
    }
  }
  constructor(private title: Title) {
    super();
  }
}