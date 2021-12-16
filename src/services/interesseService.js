import api from './api'

export default {

// TODO: checar se o create e update vao funcionar

    async find(id) {
        const response = await api.get(`interesses/${id}`)
        return response.data
    },

    async findByUser(id) {
        const response = await api.get(`interesses/usuario/${id}`)
        return response.data
    },

    async findByPet(id) {
        const response = await api.get(`interesses/pet/${id}`)
        return response.data
    },

    async create(pet_id, usuario_id) {
        const response = await api.post('interesses', {pet_id, usuario_id})
        return response.data
    },

    async update(pet_id, usuario_id) {
        const response = await api.put(`interesses/${id}`, {pet_id, usuario_id})
        return response.data
    },

    async delete(id) {
        const response = await api.delete(`interesses/${id}`)
        return response.data
    },

    async deleteByUser(id) {
        const response = await api.delete(`interesses/usuario/${id}`)
        return response.data
    },

    async deleteByPet(id) {
        const response = await api.delete(`interesses/pet/${id}`)
        return response.data
    }

}