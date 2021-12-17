import api from '../services/api'

export default {
    async find(id) {
        const response = await api.get(`ongs/${id}`)
        return response.data
    },

    async findAll() {
        const response = await api.get('api/ongs')
        return response.data
    },

    async create(denominacao, cnpj, telefone, cep, natureza, areaAtuacao, dataFundacao) {
        const response = await api.post('ongs', {denominacao, cnpj, telefone, cep, natureza, areaAtuacao, dataFundacao})
        return response.data
    },

    async update(denominacao, cnpj, telefone, cep, natureza, areaAtuacao, dataFundacao) {
        const response = await api.put(`ongs/${id}`, {denominacao, cnpj, telefone, cep, natureza, areaAtuacao, dataFundacao})
        return response.data
    },

    async delete(id) {
        const response = await api.delete(`ongs/${id}`)
        return response.data
    }

}