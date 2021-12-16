import api from '../services/api'

export default {
    async find(id) {
        const response = await api.get(`users/${id}`)
        return response.data
    },

    async findAll() {
        const response = await api.get('api/users')
        return response.data
    },

    async create(nome, cpf, telefone, cep, dataNascimento) {
        const response = await api.post('users', {nome, cpf, telefone, cep, dataNascimento})
        return response.data
    },

    async update(nome, cpf, telefone, cep, dataNascimento) {
        const response = await api.put(`users/${id}`, {nome, cpf, telefone, cep, dataNascimento})
        return response.data
    },

    async delete(id) {
        const response = await api.delete(`users/${id}`)
        return response.data
    }

}