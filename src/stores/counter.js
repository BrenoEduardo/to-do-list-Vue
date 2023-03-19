import { defineStore } from "pinia";
import axios from "axios";

export const useStoreApi = defineStore("state", {
  state: () => {
    return {
      showInfo: false,
      showInfoCreate: false,
      users: [],
      showHome: true,
    };
  },
  actions: {
    async saveState() {
      try {
        await axios
          .get(`https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/users`)
          .then((res) => {
            this.users = res.data;
          });
      } catch (error) {
        this.alertErro = true;
      }
    },
    async sendUser(payload){
      try {
        await axios.post('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/users', payload)
        .then((res)=>{
          console.log(res, 'repos')
        })
      } catch (error) {
        this.alertErro = true;
      }
    }
  }
});
