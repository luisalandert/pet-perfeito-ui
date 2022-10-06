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

    async create(
        petId,
        usuarioId,
        pergunta1,
        pergunta2,
        pergunta3,
        pergunta4,
        pergunta5,
        pergunta6,
        pergunta7,
        pergunta8
        ) {
            console.log('na funcao')
        const response = await api.post(
            `api/interesses/${petId}/${usuarioId}`,
            {
                pergunta1,
                pergunta2,
                pergunta3,
                pergunta4,
                pergunta5,
                pergunta6,
                pergunta7,
                pergunta8
            }
        )
        console.log('depois')
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