import { action, makeObservable, observable } from "mobx";
import axios from "axios";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      bakeries: observable,
      loading: observable,
      fetchBakeries: action,
      createBakery: action,
    });
  }

  fetchBakeries = async () => {
    try {
      const response = await axios.get("http://localhost:8000/bakeries");
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchBakeries -> error", error);
    }
  };

  createBakery = async (newBakery) => {
    try {
      const formData = new FormData();
      for (const key in newBakery) formData.append(key, newBakery[key]);
      const response = await axios.post(
        "http://localhost:8000/bakeries",
        formData
      );
      this.bakeries.push(response.data);
    } catch (error) {
      console.log("BakeryStore -> createBakery -> error", error);
    }
  };
}

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();

export default bakeryStore;
