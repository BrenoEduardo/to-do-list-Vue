import { defineStore } from 'pinia'
import axios from 'axios'

export const useStoreApi = defineStore('state', {
  state: () => {
    return {
      showInfo: false,
      showInfoCreate: false,
      users: [],
      showHome: true,
      infoUser: [],
      openAddTask: false,
      openInfoTask: false,
      returnTask: [],
      taskEspecifif: {}
    }
  },
  actions: {
    async saveState() {
      try {
        await axios.get(`https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/users`).then((res) => {
          this.users = res.data
        })
      } catch (error) {
        this.alertErro = true
      }
    },
    async sendUser(payload) {
      try {
        await axios.post('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/users', payload)
      } catch (error) {
        this.alertErro = true
      }
    },
    async getTasks() {
      try {
        await axios.get('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks').then((res) => {
          this.returnTask = res.data
        })
      } catch (error) {
        this.alertErro = true
      }
    },
    async postTasks(payload) {
      try {
        await axios.post('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks', payload)
      } catch (error) {
        this.alertErro = true
      }
    },
    async deleteTasks(id) {
      try {
        await axios.delete(`https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/${id}`)
      } catch (error) {
        this.alertErro = true
      }
    },
    async updateTasks(task) {
      try {
        await axios.put(`https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/${task.id}`, task)
      } catch (error) {
        this.alertErro = true
      }
    },
    changeTasks(select) {
      this.returnTask = this.returnTask.filter((task) => {
        return task.done == select
    })
    },
  }
})
