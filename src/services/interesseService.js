import api from './api'

export default {

// TODO: checar se o create e update vao funcionar

    async find(id) {
        const response = await api.get(`api/interesses/${id}`)
        return response.data
    },

    async findByUser(id) {
        const response = await api.get(`api/interesses/usuario/${id}`)
        return response.data
    },

    async findByPet(id) {
        const response = await api.get(`api/interesses/pet/${id}`)
        return response.data
    },

    async create(pet_id, usuario_id) {
        const response = await api.post('api/interesses', {pet_id, usuario_id})
        return response.data
    },

    async update(pet_id, usuario_id) {
        const response = await api.put(`api/interesses/${id}`, {pet_id, usuario_id})
        return response.data
    },

    async delete(id) {
        const response = await api.delete(`api/interesses/${id}`)
        return response.data
    },

    async deleteByUser(id) {
        const response = await api.delete(`api/interesses/usuario/${id}`)
        return response.data
    },

    async deleteByPet(id) {
        const response = await api.delete(`api/interesses/pet/${id}`)
        return response.data
    }

}