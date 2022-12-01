import api from './api'

export default {
    async find(id) {
        const response = await api.get(`api/pets/${id}`)
        return response.data
    },

    async findAll() {
        const response = await api.get('api/pets')
        return response.data
    },

    async findMatches(userId) {
       // const response = await api.get(`api/pets/search?user_id=${userId}`)
        //return response.data
        return []
    },

    async create(nome, descricao, especie, sexo, dataNascimento) {
        const response = await api.post('api/pets', {nome, descricao, especie, sexo, dataNascimento})
        return response.data
    },

    async update(id, nome, descricao, especie, sexo, dataNascimento) {
        const response = await api.put(`api/pets/${id}`, {id, nome, descricao, especie, sexo, dataNascimento})
        return response.data
    },

    async delete(id) {
        const response = await api.delete(`api/pets/${id}`)
        return response.data
    }

}