import api from './api'

export default {

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

    async create(petId,usuarioId) {
        const response = await api.post(
            `api/interesses/pet/${petId}/usuario/${usuarioId}`
        )
        console.log('petId')
        console.log(petId)
        console.log(usuarioId)
        console.log('usuarioId')

        return response.data
    },

    async update(petId) {
        const response = await api.put(`api/interesses/${id}`)
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