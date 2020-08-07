import http from '../http'

export const login = (options:ILogin)=>http.post('/login',options)