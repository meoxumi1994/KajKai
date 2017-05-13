const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/

export const checkPhone = (phone) => {
    return phoneRegrex.test(phone)
}


