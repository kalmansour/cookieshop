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
      updateCookie: action,
    });
  }

  createCookie = (newCookie) => {
    newCookie.id = this.cookies[this.cookies.length - 1].id + 1;
    newCookie.slug = slugify(newCookie.name);
    this.cookies.push(newCookie);
  };

  updateCookie = (updatedCookie) => {
    const cookie = this.cookies.find(
      (cookie) => cookie.id === updatedCookie.id
    );
    for (const key in cookie) cookie[key] = updatedCookie[key];
    cookie.slug = slugify(cookie.name);
  };

  deleteCookie = (cookieId) => {
    this.cookies = this.cookies.filter((cookie) => cookie.id !== cookieId);
  };
}

const cookieStore = new CookieStore();
export default cookieStore;
