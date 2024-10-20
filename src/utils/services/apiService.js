import CRUDService from "./CRUDService";

const apiService = new CRUDService();

export default async function loginUser(data) {
    return apiService.post('/login', data).then(res => res.data)
}