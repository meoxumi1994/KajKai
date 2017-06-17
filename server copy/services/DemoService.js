export const validateTokenDemo = (token) => (token !== undefined)

export const login = (username, password) => (username.trim() !== '' && username === password)

export const generateTokenDemo = (username) => username
