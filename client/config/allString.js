const myString = {
    LANGUGE : ['Tiếng Việt','EngLish'],

    // user-login-register
    CREATE_A_NEW_ACCOUNT : ['Tạo Địa Chỉ Người Dùng Mới','Create a new account'],
    CREATE_ACCOUNT: ['Tạo Tài Khoản','Create Account'],
    LOG_IN : ['Đăng Nhập','Log In'],
    YOUR_NAME: ['tên của bạn (yêu cầu tên thật để hiển thị)','Your name (requires real name to display)'],
    USER_NAME_WARNING: ['tên của bạn chỉ được sử dụng chữ cái, không quá ngắn hoặc dài hay có nhiều khoảng trống',
    'Name can only contain letters, not too short or long or more space'],
    EMAIL_OR_PHONE_NUMBER : ['email hoặc số điện thoại di động','email or your phone number'],
    EMAIL_NEED : ['nhập email của bạn','enter your email'],
    EMAIL_WARNING: ['email của bạn không khả dụng','your email number are not available'],
    PHONE_WARNING: ['số điện thoại không hợp lệ','your phone numbers are not available'],
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
    SAVE: ['lưu', 'save'],
    CHANGE: ['Thay đổi','Change'],
    CANCEL: ['huỷ','cancel'],
    EDIT: ['Sửa','Edit'],
    NO: ['Chưa có','No'],
    USER_NAME: ['Tên của bạn','Name'],
    NOTE_USER_NAME: ['tên bạn sử dụng để hiển thị khi đặt hàng hay bình luận về cửa hàng, nên sử dụng tên thật của bạn để cửa hàng có thể gọi đúng cũng như đảm bảo gói hàng sẽ được giao đúng',
    'The name you use to display when ordering or commenting on a store should use your real name so that the store can call it right as well as make sure the package is properly delivered.'],
    PHONE: ['Số điện thoại','Phone number'],
    PHONE_USED: ['Số điện thoại này đã được sử dụng, xin vui lòng nhập một số khác',
    'This number was used to use, xin vui lòng nhập một số khác'],
    PHONE_FAILED: ['Số điện thoài này hiện không có thực, xin vui lòng nhập một số khác',
    'This number of electronic phone does not exist, Please enter another one'],
    PHONE_VERIFY: ['Chúng tôi đã gửi mã xác nhận đến số máy này, vui lòng xác nhận mã số để tiếp tục (mã sỗ gồm 4 ký tự):',
    'We have sent a confirmation code to this number, please confirm the code to continue (4 character code):'],
    CODE_FAILED: ['nhập mã sai', 'this code is failed'],
    NOTE_PHONE: ['Số điện thoại cần thiết khi bạn đặt hàng và đừng lo lắng vì chỉ có duy nhất cửa hàng nơi bạn đặt hàng mới xem được số điện thoại của bạn. Chúng tôi mặc định với +84(vietname), nếu bạn ở khu vực khác nhớ thêm mã vùng ở đầu ví dụ +66876548291 với thailand',
    'The phone number is needed when ordering and do not worry because only the store where you order can see your phone number. We default to +84 (vietname), if you are in another area remember to add the area code at the top, for example +66876548291 with thailand'],
    ADDRESS: ['Địa chỉ','Address'],
    NOTE_ADDRESS: ['Địa chỉ mặc định khi bạn đặt hàng tại cửa hàng, nhớ thay đổi hoặc ghi rõ với cửa hàng khi bạn thay đổi địa chỉ ship',
    'The default address when you place your order at the store, remember to change or specify with the store when you change ship\'s address'],
    AGE: ['Tuổi','Age'],
    NOTE_AGE: ['Thêm tuổi có thể giúp đỡ việc nhận và giao hàng tốt hơn','Add age can help with getting and delivering better'],
    PASSWORD: ['Mật khẩu','Password'],
    NOTE_VERIFY_PASSWORD: ['mật khẩu phải từ 6 ký tự trở lên, mật khẩu mới và cũ phải khác nhau',
    'Passwords must be 6 or more characters, new password and old must be different'],
    NOTE_PASSWORD: ['Chúng tôi khuyên bạn nên sử dụng một mật khẩu mạnh và chưa được sử dụng ở nơi nào khác để đảm bảo an toàn cho tài khoản của bạn',
    'We strongly recommend using a strong password and have not used it anywhere else to secure your account.'],
    OLD_PASSWORD: ['mật khẩu cũ','old password'],
    NEW_PASSWORD: ['mật khẩu mới','new password'],
    RE_PASSWORD: ['nhập lại mật khẩu mởi','rewrite new password'],
    PASSWORD_CHANGE_SUCCESS: ['Thay đổi mật khẩu thành công','Change password successfully'],
    PASSWORD_CHANGE_FAILED: ['Bạn nhập sai mât khẩu cũ','You mistyped the old password'],
    INFO: ['Thông tin', 'Info'],
    PRIVACY: ['Cá nhân', 'Privacy'],
    SECURITY: ['Bảo mật', 'Security'],
    CREATE_STORE: ['Tạo cửa hàng','create store'],
    // store
    STORE: ['Cửa hàng','Store'],
    STORE_NAME_WARNING: ['bạn nhập thiếu tên cửa hàng','you\'re missing store name'],
    ENTER_STORE: ['tên cửa hàng của bạn', 'your Store\'s name'],
    ENTER_ADDRESS: ['nhập địa cửa hàng chỉ của bạn', 'your Store\'s address'],
    ADDRESS_WARNING: ['địa chỉ chưa có','have no address'],
    ENTER_CATEGORY: ['loại hình kinh doanh của cửa hàng','your Store\'s category'],
    CATEGORY_WARNING: ['chưa có loại hình kinh doanh','enter category please'],
    PHONE_STORE: ['số điện thoại để khách hàng liên hệ đến của hàng','Phone numbers for customers to contact the store'],
    VERIFY_PHONE: ['Xác Nhận Số Điện THoại','Verify Phone Number'],
    // thumnail
    ADD_PHOTO: ['Thêm ảnh', 'Add Photo'],
    SUGGEST_PHOTO:['Gợi Ý Ảnh', 'Suggest Photo'],
    SEE_MORE: ['Xem thêm', 'See More'],
    TAKE_PHOTO: ['Lấy Ảnh','Take Photo'],
    WEBCAM_DESCRIPTION: ['Hình ảnh của bạn luôn công khai.', 'Your picture is always public.'],
    CAPTURE_PHOTO: ['Chụp Ảnh','Capture Photo'],
    RETAKE_PHOTO: ['Chụp Lại','Retake Photo'],
    SAVE: ['Lưu','Save'],
    CROPPIE_DESCRIPTION: ['Cuộn để phóng to và thu nhỏ','scroll to zoom in and zoom out'],
    CROPPIE_TITLE: ['Tải ảnh lên','Upload Photo'],

    // post
    RECEIVE: ['Nhận','Receive'],
    RECEIVED: ['Đã Nhận','Received'],
    LIKE: ['Thích','Like'],
    FOLLOW : ['Theo dõi','Follow'],
    REPLY: ['Trả lời','Reply'],
    WRITE_COMMENT_OR_ORDER: ['Bình luận hoặc Đặt hàng...','Write a comment or Order...'],
    WRITE_COMMENT: ['Bình luận','Write a comment'],
    FULL_SCREEN: ['Phóng to','Full Screen'],
    ADDRESSMAP : ['Địa chỉ theo google map', 'Address in googlemap'],
    ANOTHER_PEOPLE: ['người khác','another people'],
    PEOPLE: ['người','people'],
    CATEGORY : ['Loại hình', 'Category'],
    BY: ['bởi', 'by'],
    AND: ['và', 'and'],
    THIS: ['điều này','this'],
    // store
    CREATE_SELLPOST: ['Tạo Một Bài Đăng Bán Hàng', 'Create a Sell Post'],
    CREATE_SELLPOST_DESCRIPTTION: ['Before creating a sale\'s post  you need to keep in mind:','Trước khi tạo bài đăng bán hàng bạn cần lưu ý:'],
    CREATE_SELLPOST_DESCRIPTTION_1: ['You do not need to recreate a sale\'s post for a new product or start selling again, but you can instead re-edit your old post.','Bạn không cần tạo lại bài đăng bán hàng khi có thêm sản phẩm mới hay bắt đầu bán lại, thay vào đó bạn có thể chỉnh sửa lại bài đăng cũ.'],
    CREATE_SELLPOST_DESCRIPTTION_2: ['You create more sale\'s posts when making sure your store adds a new type of business.','Bạn tạo thêm bài đăng bán hàng khi chắc chắn rằng cửa hàng của bạn thêm một loại hình kinh doanh mới.'],
    CREATE_SELLPOST_DESCRIPTTION_3: ['You should not create too many sale\'s posts because the "likes", "follow", "shares" will be scattered.','Bạn không nên tạo quá nhiều bài đăng bán hàng vì số lượng "thích","theo dõi","chia sẻ" sẽ bị phân tán.'],
    CREATE_SELLPOST_DESCRIPTTION_4: ['If you want to post a video, add a new photo or write more to attract customers, you should create a minor post.','Nếu bạn muốn đăng video, thêm ảnh mới hoặc viết thêm để thu hút khách hàng, bạn nên tạo một bài đăng phụ.'],
    CREATE_STORE: ['Tạo Một Cửa Hàng Mới','Create a New Store'],
    CREATE_STORE_DESCRIPTION: ['Trước khi bắt đầu tạo cửa hàng bạn nên xem qua một số lưu ý','Before you start creating a store you should look over some notes'],
    CREATE_STORE_DESCRIPTION_0: ['Tạo cửa hàng là hoàn toàn miễn phí, chúng tôi không thu theo tháng hay phần trăm phí bất sản phẩm nào','Creating a store is completely free, and we do not charge you any monthly or per-cent'],
    CREATE_STORE_DESCRIPTION_1: ['Nâng cao khả năng tương tác giữa của hàng và người dùng luôn là tiêu trí để KajKai phát triển','Enhancing the interoperability between the goods and the user is always the place for KajKai to develop'],
    CREATE_STORE_DESCRIPTION_2: ['Luôn luôn đảm bảo một sản phẩm tốt, giá cả hợp lý sẽ là tiêu trí để đưa cửa hàng của bạn phát triển','Always ensure a good product, reasonable price will be the place to put your store development'],
    CREATE_STORE_DESCRIPTION_3: ['Cám ơn các bạn đã quan tâm đến KajKai','Thank you for your interest in KajKai'],
    CREATE_STORE_DESCRIPTION_4: ['Chọn loại mặt hàng mà cửa hàng cửa bạn kinh doanh, việc này rất quan trọng vì liên quan đến khả năng tìm kiếm của người dùng','Choose the type of item your store is selling, which is important because it is relevant to the user\'s search capabilities'],
    CREATE_STORE_DESCRIPTION_5: ['Bạn chọn loại hình kinh doanh chung mà chúng tôi gợi ý trước, sau đó điền chi tiết loại mặt hàng mà cửa hàng của bạn bán','You choose a general business type that we recommend first, then enter details of the type of items that your store sells'],
    CREATE_STORE_DESCRIPTION_6: ['Số điện thoại này là số để khách hàng liên lạc đến cửa hàng','This phone number is the phone number for customers to contact the store'],
    CREATE_STORE_DESCRIPTION_7: ['Số điện thoại này sẽ luôn được công khai','Phone number will always be public'],
    CATEGORY: ['Loại Hình Kinh Doanh','Category'],
    CONFIRM: ['Xác Nhận','Confirm'],
    CHOOSE_ANOTHER: ['Chọn lại', 'Choose Another'],
    POSITION_IN_MAP: ['Vị trí trên Google Map',
        'Position in google map'],
    ADDRESS_DESCRIPTION: ['Địa chỉ của bạn, bạn nên viết chính xác vì người dùng sẽ sử dụng nó để tìm ra của hàng của bạn',
        'Your address should you write correctly because the user will use it to find out your store'],
    STORE_NAME: ['Tên cửa hàng', 'Store name'],
    GET_CURRENT_POSITION: ['Đến vị trí hiện tại','Get current Position'],
    ENTER_YOUR_STORE_NAME: ['Nhập tên cửa hàng của bạn', 'Enter your store name'],
    ENTER_YOUR_PHONE: ['Nhập điện thoại của bạn', 'Enter your phone'],
    ENTER_YOUR_ADDRESS: ['Nhập địa chỉ của bạn', 'Enter your address'],
    STORE_URL: ['Tên url của cửa hàng','url name of store'],
    ENTER_URL_STORE: ['Nhập tên url', 'Enter url name'],

    CREATE_MINORPOST: ['Tạo bài đăng phụ','Create a Minor Post'],
    STORE_NAME_FAILED: ['bạn chưa nhập tên cửa hàng hoặc tên cửa hàng quá ngắn', 'You have not entered a store name or store name that is too short'],
    CATEGORY_FAILED: ['bạn chưa nhập category hoặc độ dài category quá ngắn', 'You have not entered a category or category too short'],
    PHONE_FAILED: ['số điện thoại không hợp lệ','invalid phone number'],
    POSITION_FAILED: ['bạn chưa chọn vị trí của cửa hàng trên map','You have not selected the location of the store on the map'],
    ADDRESS_FAILED: ['bạn chưa nhập địa chỉ hoặc địa chỉ quá ngắn','You have not entered an address or address that is too short'],
    URL_NAME_SHORT: ['bạn chưa nhập tên url hoặc tên url quá ngắn','You have not entered the url or url name too short'],
    URL_NAME_FAILED: ['tên url không hợp lệ, tên của bạn nhập quá đặc biệt','Invalid url name, your name is too special'],
    URL_NAME_SPECIAL: ['tên url của bạn không chỉ được dùng chữ cái thường hoặc dấu gạch dưới', 'Your url name is not only used with lowercase letters or underscores'],
    WARNING_MODAL: ['Cảnh Báo', 'Warning'],
    ADD: ['Thêm','Add'],
    HOME: ['Trang chủ','Home'],
    LOG_OUT: ['Đăng xuất', 'Logout'],
    SETTING: ['Cài đặt', 'Setting'],

    FEED_BACK: ['Phản hồi', 'Feed Back'],
    FEED_BACK_DESCRIPTION: [
        'Phản hồi sẽ được gửi tới admin của KajKai. chúng tôi sẽ xem tất cả các phản hồi của bạn và sử lý một cách tốt nhất',
        'Feedback will be sent to KajKai admin. We will see all your feedback and best practices'],
    THANK_TO_FEEDBACK: ['Cảm ơn đã gửi phản hồi cho chúng tôi', 'Thanks for sending us feedback'],
    FEED_BACK_FAILED: [
        'xin lỗi bạn, vì một lý do nào đấy mà phản hồi không gửi được',
        'Sorry, for some reason the reply was not sent'],
    DONE: ['Xong', 'Done'],
}

const allString = {
    get: (language, name) => {
        if(language === 'vi')
            return myString[name][0]
        if(language == 'en')
            return myString[name][1]
        return null
    }
}

export const get = (language, name) => {
    if(!myString[name]) return null;
    if(language === 'vi')
        return myString[name][0]
    if(language == 'en')
        return myString[name][1]
    return null
}

export default allString
