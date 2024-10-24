import CRUDService from "./CRUDService";

const apiService = new CRUDService();

export async function loginUser(data) {
    return apiService.post('/login', data).then(res => res.data)
}

export async function submitUser(data) {
    return apiService.post('/register', data).then(res => res.data)
}