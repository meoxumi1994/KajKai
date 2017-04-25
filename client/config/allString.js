const myString = {
    LANGUGE : ['Tiếng Việt','EngLish'],

    // user-login-register
    CREATE_A_NEW_ACCOUNT : ['Tạo Địa Chỉ Người Dùng Mới','Create a new account'],
    CREATE_ACCOUNT: ['Tạo Tài Khoản','Create Account'],
    LOG_IN : ['Đăng Nhập','Log In'],
    YOUR_NAME: ['tên của bạn','your name'],
    EMAIL_OR_PHONE_NUMBER : ['email hoặc số điện thoại di động','email or phone number'],
    PASSWORD : ['mật khẩu','password'],
    RULE: ['khi bạn đăng ký là đã đồng ý với tất cả điều khoản của chúng tôi','By clicking Create Account, you agree to our Terms'],
    KAJKAI_THANK : ['KajKai cảm ơn các bạn đã quan tâm', 'KajKai thank you for your interest'],
    CHECK: ['Xác Nhận','Confirm'],
    PLEASE_GO_EMAIL_TO_CHECK: ['bạn vui lòng vào mail kiểm tra để xác nhận, nếu không có bạn có thể tìm lại ở hòm thư spam','Please check your mail to confirm, if not you can find in the spam mailbox'],
    FORGOT_PASSWORD: ['bạn quên mật khẩu?','forgot your password?'],
    SEARCH_PRODUCT: ['tìm kiếm sản phẩm','Search for products to buy'],
    SEARCH_LOCATION: ['tại địa điểm','at location'],
}

const allString = {
    get: (language, name) => {
        if(language === 'VIETNAMESE')
            return myString[name][0]
        if(language == 'ENGLISH')
            return myString[name][1]
        return null
    }
}

export default allString
