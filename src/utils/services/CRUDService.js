import axios from 'axios'

const axiosIns = axios.create({
    timeout: 5800,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})

const catchError = (error) => {
    return error.errMsg = error.message
}

const prodServer = "http://localhost:8080";

export default function CRUDService() {
    this.APIUrl = prodServer;
    this.get = function (path, signal = null) {
        return this.request("GET", path, null, signal)
            .catch(error => catchError(error))
    }
    this.post = (path, data, headers = null) => {
        return this.request("POST", path, data, headers)
            .catch(error => catchError(error))
    }
    this.put = (path, data) => {
        return this.request("PUT", path, data)
            .catch(error => catchError(error))
    }
    this.delete = (path) => {
        return this.request("DELETE", path)
            .catch(error => catchError(error))
    }
    this.request = (method, path, data = null, headers = null) => {
        switch (method) {
            case "GET":
                return axiosIns.get(this.APIUrl + path, headers);
            case "POST":
                return axiosIns.post(this.APIUrl + path, data, headers);
            case "PUT":
                return axiosIns.put(this.APIUrl + path, data);
            case "DELETE":
                return axiosIns.delete(this.APIUrl + path);
            default: return null;
        }
    }
}