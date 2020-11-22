import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class CookieStore {
  cookies = [];

  constructor() {
    makeObservable(this, {
      cookies: observable,
      fetchCookies: action,
      createCookie: action,
      deleteCookie: action,
      updateCookie: action,
    });
  }

  fetchCookies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cookies");
      this.cookies = response.data;
    } catch (error) {
      console.error("CookieStore -> fetchCookies -> error", error);
    }
  };

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

  deleteCookie = async (cookieId) => {
    // this.cookies = this.cookies.filter((cookie) => cookie.id !== cookieId);
    try {
    } catch (error) {
      await axios.delete(`http://localhost:8000/cookies/${cookieId}`);
      this.cookies = this.cookies.filter((cookie) => cookie.id !== +cookieId);

      console.log("CookieStore -> deleteCookie -> error", error);
    }
  };
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
