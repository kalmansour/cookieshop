import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";
import cookies from "../cookies";

class CookieStore {
  cookies = cookies;

  constructor() {
    makeObservable(this, {
      cookies: observable,
      createCookie: action,
      deleteCookie: action,
    });
  }

  createCookie = (newCookie) => {
    newCookie.id = this.cookies[this.cookies.length - 1].id + 1;
    newCookie.slug = slugify(newCookie.name);
    this.cookies.push(newCookie);
  };

  deleteCookie = (cookieId) => {
    this.cookies = this.cookies.filter((cookie) => cookie.id !== cookieId);
  };
}

const cookieStore = new CookieStore();
export default cookieStore;
