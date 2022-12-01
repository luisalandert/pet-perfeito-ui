import api from "./api";

export default {
  async find(name) {
    const response = await api.get(`api/image/${name}`);
    return response.data;
  },

  async create(formData) {
    const response = await api.post(`api/upload/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
