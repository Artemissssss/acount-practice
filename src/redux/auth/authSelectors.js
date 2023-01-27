export const userDatak = (state) => {
    return state;
}
export const userToken = (state) => {
    return state.auth.token;
}
export const userName = (state) => {
    return state.auth.user;
}
export const userLoading = (state) => {
    return state.auth.loading;
}
export const userError = (state) => {
    return state.auth.error;
}