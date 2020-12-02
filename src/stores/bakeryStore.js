import { action, makeAutoObservable, observable } from "mobx";
import axios from "axios";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeAutoObservable(this, {
      bakeries: observable,
      loading: observable,
      fetchBakeries: action,
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
}

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();

export default bakeryStore;
