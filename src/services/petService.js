import api from './api'

export default {
    async find(id) {
        const response = await api.get(`pets/${id}`)
        return response.data
    },

    async findAll() {
        const response = await api.get('api/pets')
        return response.data
    },

    async create(nome, descricao, especie, sexo, dataNascimento) {
        const response = await api.post('pets', {nome, descricao, especie, sexo, dataNascimento})
        return response.data
    },

    async update(nome, descricao, especie, sexo, dataNascimento) {
        const response = await api.put(`pets/${id}`, {nome, descricao, especie, sexo, dataNascimento})
        return response.data
    },

    async delete(id) {
        const response = await api.delete(`pets/${id}`)
        return response.data
    }

}