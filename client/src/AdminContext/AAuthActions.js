export const LoginStart = (adminCred) => ({
    type: "LOGIN_START",
})
export const LoginSuccess = (admin) => ({
    type: "LOGIN_SUCCESS",
    payload: admin
})
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
})