const myString = {
    LANGUGE : ['Tiếng Việt','EngLish'],

    // user-login-register
    CREATE_A_NEW_ACCOUNT : ['Tạo Địa Chỉ Người Dùng Mới','Create a new account'],
    CREATE_ACCOUNT: ['Tạo Tài Khoản','Create Account'],
    LOG_IN : ['Đăng Nhập','Log In'],
    YOUR_NAME: ['tên của bạn (yêu cầu tên thật để hiển thị)','Your name (requires real name to display)'],
    NAME_WARNING: ['tên của bạn cần viết bằng tiếng việt, không quá ngắn hoặc dài','Name can only contain letters, not too short or long'],
    EMAIL_OR_PHONE_NUMBER : ['email hoặc số điện thoại di động','email or your phone number'],
    EMAIL_NEED : ['nhập email của bạn','enter your email'],
    EMAIL_WARNING: ['email của bạn không khả dụng','your email number are not available'],
    EMAIL_OR_PHONE_WARNING: ['số điện thoại không khả dụng','your phone numbers are not available'],
    PASSWORD : ['mật khẩu','password'],
    PASSWORD_WARNING: ['mật khẩu cần ít nhất 6 ký tự','Password requires at least 6 characters'],
    RULE: ['khi bạn đăng ký là đã đồng ý với tất cả điều khoản của chúng tôi','By clicking Create Account, you agree to our Terms'],
    KAJKAI_THANK : [' cảm ơn các bạn đã quan tâm', ' thank you for your interest'],
    CHECK: ['Xác Nhận','Confirm'],
    PLEASE_GO_EMAIL_TO_CHECK: ['bạn vui lòng vào email kiểm tra để xác nhận, nếu không có bạn có thể tìm lại ở mục spam','Please check your mail to confirm, if not you can find in the spam mailbox'],
    FORGOT_PASSWORD: ['bạn quên mật khẩu?','forgot your password?'],
    REGISTER_MODAL_HEADER_WARNING: ['Hãy kiểm tra lại','Please check again'],
    REGISTER_MODAL_EMAIL_WARNING: ['email này đã được sử dụng để đăng ký từ trước','This email has been used to register'],
    REGISTER_MODAL_PHONE_WARNING: ['số điện thoại này đã được sử dụng để đăng ký từ trước','This phone has been used to register'],
    CLOSE: ['Đóng', 'Close'],
    // barscreen
    SEARCH_PRODUCT: ['tìm kiếm sản phẩm','Search for products to buy'],
    SEARCH_LOCATION: ['tại địa điểm','at location'],
    // profile
    NOTE: ['Lưu Ý','Note'],
    SAVE_CHANGE: ['Lưu Thay Đổi','Save Change'],
    CHANGE: ['Thay đổi','Change'],
    CANCEL: ['huỷ','Cancel'],
    NO: ['Chưa có','No'],
    USER_NAME: ['Tên của bạn','Name'],
    NOTE_USER_NAME: ['tên bạn sử dụng để hiển thị khi đặt hàng hay bình luận về cửa hàng, nên sử dụng tên thật của bạn để cửa hàng có thể gọi đúng cũng như đảm bảo gói hàng sẽ được giao đúng',
    'The name you use to display when ordering or commenting on a store should use your real name so that the store can call it right as well as make sure the package is properly delivered.'],
    PHONE: ['Số điện thoại','Phone number'],
    NOTE_PHONE: ['Số điện thoại cần thiết khi bạn đặt hàng và đừng lo lắng vì chỉ có duy nhất cửa hàng nơi bạn đặt hàng mới xem được số điện thoại của bạn',
    'The phone number is needed when ordering and do not worry because only the store where you order can see your phone number.'],
    ADDRESS: ['Địa chỉ','Address'],
    NOTE_ADDRESS: ['Địa chỉ mặc định khi bạn đặt hàng tại cửa hàng, nhớ thay đổi hoặc ghi rõ với cửa hàng khi bạn thay đổi địa chỉ ship',
    'The default address when you place your order at the store, remember to change or specify with the store when you change ship\'s address'],
    AGE: ['Tuổi','Age'],
    NOTE_AGE: ['Thêm tuổi có thể giúp đỡ việc nhận và giao hàng tốt hơn','Add age can help with getting and delivering better'],
    PASSWORD: ['Mật khẩu','Password'],
    NOTE_PASSWORD: ['Chúng tôi khuyên bạn nên sử dụng một mật khẩu mạnh và chưa được sử dụng ở nơi nào khác để đảm bảo an toàn cho tài khoản của bạn',
    'We strongly recommend using a strong password and have not used it anywhere else to secure your account.'],
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
