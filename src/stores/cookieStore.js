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

  createCookie = async (newCookie) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/cookies",
        newCookie
      );
      this.cookies.push(response.data);
    } catch (error) {
      console.log("CookieStore -> createCookie -> error", error);
    }
  };

  updateCookie = async (updatedCookie) => {
    try {
      await axios.put(
        `http://localhost:8000/cookies/${updatedCookie.id}`,
        updatedCookie
      );
      const cookie = this.cookies.find(
        (cookie) => cookie.id === updatedCookie.id
      );
      for (const key in cookie) cookie[key] = updatedCookie[key];
      cookie.slug = slugify(cookie.name);
    } catch (error) {
      console.log("CookieStore -> updateCookie -> error", error);
    }
  };

  deleteCookie = async (cookieId) => {
    try {
      await axios.delete(`http://localhost:8000/cookies/${cookieId}`);
      this.cookies = this.cookies.filter((cookie) => cookie.id !== +cookieId);
    } catch (error) {
      console.log("CookieStore -> deleteCookie -> error", error);
    }
  };
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
