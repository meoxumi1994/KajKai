const myString = {
    LANGUGE : ['Tiếng Việt','EngLish'],

    // user-login-register
    CREATE_A_NEW_ACCOUNT : ['Tạo Địa Chỉ Người Dùng Mới','Create a new account'],
    CREATE_ACCOUNT: ['Tạo Tài Khoản','Create Account'],
    LOG_IN : ['Đăng Nhập','Log In'],
    YOUR_NAME: ['Tên của bạn (yêu cầu tên thật để hiển thị)','Your name (requires real name to display)'],
    USER_NAME_WARNING: ['Tên của bạn chỉ được sử dụng chữ cái, không quá ngắn hoặc dài hay có nhiều khoảng trống',
    'Name can only contain letters, not too short or long or more space'],
    EMAIL_OR_PHONE_NUMBER : ['Email','Email'],
    EMAIL_NEED : ['Nhập email của bạn','Enter your email'],
    EMAIL_WARNING: ['Email của bạn không khả dụng','Your email number are not available'],
    PHONE_WARNING: ['Số điện thoại không hợp lệ','Your phone numbers are not available'],
    PASSWORD : ['Mật khẩu','Password'],
    PASSWORD_WARNING: ['Mật khẩu cần ít nhất 6 ký tự','Password requires at least 6 characters'],
    RULE: ['Khi bạn đăng ký là đã đồng ý với tất cả điều khoản của chúng tôi','By clicking Create Account, you agree to our Terms'],
    KAJKAI_THANK : [' cảm ơn các bạn đã quan tâm', ' thank you for your interest'],
    CHECK: ['Xác Nhận','Confirm'],
    PLEASE_GO_EMAIL_TO_CHECK: ['Bạn vui lòng vào email kiểm tra để xác nhận, nếu không có bạn có thể tìm lại ở mục spam','Please check your mail to confirm, if not you can find in the spam mailbox'],
    FORGOT_PASSWORD: ['Bạn quên mật khẩu?','Forgot your password?'],
    REGISTER_MODAL_HEADER_WARNING: ['Hãy kiểm tra lại','Please check again'],
    REGISTER_MODAL_EMAIL_WARNING: ['Email này đã được sử dụng để đăng ký từ trước','This email has been used to register'],
    REGISTER_MODAL_PHONE_WARNING: ['Số điện thoại này đã được sử dụng để đăng ký từ trước','This phone has been used to register'],
    CLOSE: ['Đóng', 'Close'],
    // barscreen
    SEARCH: ['Tìm kiếm','Search'],
    SEARCH_PRODUCT: ['Tìm kiếm sản phẩm','Search for products to buy'],
    SEARCH_LOCATION: ['tại địa điểm','at location'],
    // profile
    NOTE: ['Lưu Ý','Note'],
    SAVE_CHANGE: ['Lưu Thay Đổi','Save Change'],
    SAVE: ['Lưu', 'Save'],
    CHANGE: ['Thay đổi','Change'],
    CANCEL: ['Huỷ','Cancel'],
    EDIT: ['Sửa','Edit'],
    NO: ['Chưa có','No'],
    USER_NAME: ['Tên','Name'],
    NOTE_USER_NAME: ['Tên bạn sử dụng để hiển thị khi đặt hàng hay bình luận về cửa hàng, nên sử dụng tên thật của bạn để cửa hàng có thể gọi đúng cũng như đảm bảo gói hàng sẽ được giao đúng',
    'The name you use to display when ordering or commenting on a store should use your real name so that the store can call it right as well as make sure the package is properly delivered.'],
    PHONE: ['Số điện thoại','Phone number'],
    PHONE_USED: ['Số điện thoại này đã được sử dụng, xin vui lòng nhập một số khác',
    'This number was used to use, xin vui lòng nhập một số khác'],
    PHONE_FAILED: ['Số điện thoài này hiện không có thực, xin vui lòng nhập một số khác',
    'This number of electronic phone does not exist, Please enter another one'],
    AVATAR_FAILED: ['Bạn chưa nhập ảnh đại diện','You have not entered a avatar yet'],
    PHONE_VERIFY: ['Chúng tôi đã gửi mã xác nhận đến số máy này, vui lòng xác nhận mã số để tiếp tục (mã sỗ gồm 4 ký tự):',
    'We have sent a confirmation code to this number, please confirm the code to continue (4 character code):'],
    CODE_FAILED: ['Nhập mã sai', 'This code is failed'],
    NOTE_PHONE: ['Số điện thoại cần thiết khi bạn đặt hàng và đừng lo lắng vì chỉ có duy nhất cửa hàng nơi bạn đặt hàng mới xem được số điện thoại của bạn. Chúng tôi mặc định với +84(vietname), nếu bạn ở khu vực khác nhớ thêm mã vùng ở đầu ví dụ +66876548291 với thailand',
    'The phone number is needed when ordering and do not worry because only the store where you order can see your phone number. We default to +84 (vietname), if you are in another area remember to add the area code at the top, for example +66876548291 with thailand'],
    ADDRESS: ['Địa chỉ','Address'],
    NOTE_ADDRESS: ['Địa chỉ mặc định khi bạn đặt hàng tại cửa hàng, nhớ thay đổi hoặc ghi rõ với cửa hàng khi bạn thay đổi địa chỉ ship',
    'The default address when you place your order at the store, remember to change or specify with the store when you change ship\'s address'],
    AGE: ['Tuổi','Age'],
    VERIFY_AGE: ['Tuổi phải từ 1 đến 100','Age must be between 1 and 100'],
    ENTER_AGE: ['Nhập tuổi của bạn','Enter your age'],
    NOTE_AGE: ['Thêm tuổi có thể giúp đỡ việc nhận và giao hàng tốt hơn','Add age can help with getting and delivering better'],
    PASSWORD: ['Mật khẩu','Password'],
    NOTE_VERIFY_PASSWORD: ['Mật khẩu phải từ 6 ký tự trở lên, mật khẩu mới và cũ phải khác nhau',
    'Passwords must be 6 or more characters, new password and old must be different'],
    NOTE_PASSWORD: ['Chúng tôi khuyên bạn nên sử dụng một mật khẩu mạnh và chưa được sử dụng ở nơi nào khác để đảm bảo an toàn cho tài khoản của bạn',
    'We strongly recommend using a strong password and have not used it anywhere else to secure your account.'],
    OLD_PASSWORD: ['Mật khẩu cũ','Old password'],
    NEW_PASSWORD: ['Mật khẩu mới','New password'],
    RE_PASSWORD: ['Nhập lại mật khẩu mởi','Rewrite new password'],
    PASSWORD_CHANGE_SUCCESS: ['Thay đổi mật khẩu thành công','Change password successfully'],
    PASSWORD_CHANGE_FAILED: ['Bạn nhập sai mât khẩu cũ','You mistyped the old password'],
    EDIT_PASSWORD: ['Thay đổi mật khẩu','Edit password'],
    INFO: ['Thông tin', 'Info'],
    PRIVACY: ['Cá nhân', 'Privacy'],
    SECURITY: ['Bảo mật', 'Security'],
    CREATE_STORE: ['Tạo cửa hàng','Create store'],
    REGISTER_MODAL_EMAIL_WARNING: ['Email này đã được đăng ký từ trước','This email is already registered'],
    // store
    STORE: ['Cửa hàng','Store'],
    STORE_NAME_WARNING: ['Bạn nhập thiếu tên cửa hàng','You\'re missing store name'],
    ENTER_STORE: ['Tên cửa hàng của bạn', 'Your Store\'s name'],
    ENTER_ADDRESS: ['Nhập địa cửa hàng chỉ của bạn', 'Your Store\'s address'],
    ADDRESS_WARNING: ['Địa chỉ chưa có','You\'re missing address'],
    ENTER_CATEGORY: ['Loại hình kinh doanh của cửa hàng','Your Store\'s category'],
    CATEGORY_WARNING: ['chưa có loại hình kinh doanh','enter category please'],
    PHONE_STORE: ['số điện thoại để khách hàng liên hệ đến của hàng','Phone numbers for customers to contact the store'],
    VERIFY_PHONE: ['Xác Nhận Số Điện THoại','Verify Phone Number'],
    // thumnail
    ADD_PHOTO: ['Thêm ảnh', 'Add Photo'],
    SUGGEST_PHOTO:['Ảnh gợi ý', 'Suggested photos'],
    SEE_MORE: ['Xem thêm', 'See More'],
    TAKE_PHOTO: ['Chụp Ảnh','Take Photo'],
    WEBCAM_DESCRIPTION: ['Hình ảnh của bạn luôn công khai.', 'Your picture is always public.'],
    CAPTURE_PHOTO: ['Chụp Ảnh','Capture Photo'],
    RETAKE_PHOTO: ['Chụp Lại','Retake Photo'],
    SAVE: ['Lưu','Save'],
    CROPPIE_DESCRIPTION: ['Cuộn để phóng to và thu nhỏ','Scroll to zoom in and zoom out'],
    CROPPIE_TITLE: ['Tải ảnh lên','Upload Photo'],

    // post
    RECEIVE: ['Nhận','Receive'],
    RECEIVED: ['Đã Nhận','Received'],
    LIKE: ['Thích','Like'],
    SHARE: ['Chia sẻ','Share'],
    COMMENT: ['Bình luận','Comment'],
    OPEN: ['Mở','Open'],

    FOLLOW : ['Theo dõi','Followed'],
    REPLY: ['Trả lời','Reply'],
    WRITE_COMMENT_OR_ORDER: ['Bình luận hoặc Đặt hàng...','Write a comment or Order...'],
    WRITE_COMMENT: ['Viết bình luận...','Write a comment...'],
    FULL_SCREEN: ['Phóng to','Full Screen'],
    ADDRESSMAP : ['Địa chỉ theo Google Map', 'Address in Google Map'],
    ANOTHER_PEOPLE: ['người khác','another people'],
    PEOPLE: ['người','people'],
    CATEGORY : ['Loại hình', 'Category'],
    BY: ['bởi', 'by'],
    AND: ['và', 'and'],
    THIS: ['điều này','this'],
    // store
    CREATE_SELLPOST: [
        'Tạo Một Bài Đăng Bán Hàng',
        'Create a Sell Post'],
    CREATE_SELLPOST_DESCRIPTTION: [
        'Trước khi tạo bài đăng bán hàng bạn cần lưu ý:',
        'Before creating a sale\'s post  you need to keep in mind:' ],
    CREATE_SELLPOST_DESCRIPTTION_1: [
        'Bạn không cần tạo lại bài đăng bán hàng khi có thêm sản phẩm mới hay bắt đầu bán lại, thay vào đó bạn có thể chỉnh sửa lại bài đăng cũ.',
        'You do not need to recreate a sale\'s post for a new product or start selling again, but you can instead re-edit your old post.',
        ],
    CREATE_SELLPOST_DESCRIPTTION_2: [
        'Bạn tạo thêm bài đăng bán hàng khi chắc chắn rằng cửa hàng của bạn thêm một loại hình kinh doanh mới.',
        'You create more sale\'s posts when making sure your store adds a new type of business.',
    ],
    CREATE_SELLPOST_DESCRIPTTION_3: [
        'Bạn không nên tạo quá nhiều bài đăng bán hàng vì số lượng "thích","theo dõi","chia sẻ" sẽ bị phân tán.',
        'You should not create too many sale\'s posts because the "likes", "follow", "shares" will be scattered.',],
    CREATE_SELLPOST_DESCRIPTTION_4: [
        'Nếu bạn muốn đăng video, thêm ảnh mới hoặc viết thêm để thu hút khách hàng, bạn nên tạo một bài đăng phụ.',
        'If you want to post a video, add a new photo or write more to attract customers, you should create a minor post.',
        ],
    CREATE_STORE: ['Tạo Cửa Hàng Mới','Create a New Store'],
    CREATE_STORE_DESCRIPTION: [
        'Trước khi bắt đầu tạo cửa hàng bạn nên xem qua một số lưu ý',
        'Before you start creating a store you should look over some notes'],
    CREATE_STORE_DESCRIPTION_0: [
        'Tạo cửa hàng là hoàn toàn miễn phí, chúng tôi không thu theo tháng hay phần trăm phí sản phẩm nào',
        'Creating a store is absolutely free, and we do not charge a monthly or per cent of product fee'],
    CREATE_STORE_DESCRIPTION_1: [
        'Nâng cao khả năng tương tác giữa của hàng và người dùng luôn là tiêu chí để KajKai phát triển',
        'Enhancing the interoperability between the goods and the user is always the place for KajKai to develop'],
    CREATE_STORE_DESCRIPTION_2: [
        'Luôn luôn đảm bảo một sản phẩm tốt, giá cả hợp lý sẽ là tiêu chí để đưa cửa hàng của bạn phát triển',
        'Always ensure a good product, reasonable price will be the place to put your store development'],
    CREATE_STORE_DESCRIPTION_3: [
        'Cám ơn các bạn đã quan tâm đến KajKai',
        'Thank you for your interest in KajKai'],
    CREATE_STORE_DESCRIPTION_4: [
        'Chọn loại mặt hàng mà cửa hàng cửa bạn kinh doanh, việc này rất quan trọng vì liên quan đến khả năng tìm kiếm của người dùng',
        'Choose the type of item your store is selling, which is important because it is relevant to the user\'s search capabilities'],
    CREATE_STORE_DESCRIPTION_5: [
        'Bạn chọn loại hình kinh doanh chung mà chúng tôi gợi ý trước,sau đó điền chi tiết loại mặt hàng mà cửa hàng của bạn bán',
        'You choose a general business type that we recommend first, then enter details of the type of items that your store sells'],
    CREATE_STORE_DESCRIPTION_6: ['Số điện thoại này là số để khách hàng liên lạc đến cửa hàng','This phone number is the phone number for customers to contact the store'],
    CREATE_STORE_DESCRIPTION_7: ['Số điện thoại này sẽ luôn được công khai','Phone number will always be public'],
    CATEGORY: ['Loại Hình Kinh Doanh','Category'],
    CONFIRM: ['Xác Nhận','Confirm'],
    CHOOSE_ANOTHER: ['Chọn lại', 'Choose Another'],
    POSITION_IN_MAP: ['Vị trí trên Google Map',
        'Position in google map'],
    ADDRESS_DESCRIPTION: ['Địa chỉ của bạn, bạn nên viết chính xác vì người dùng sẽ sử dụng nó để tìm ra cửa hàng của bạn',
        'Your address should be written correctly because the user will use it to find out your store'],
    STORE_NAME: ['Tên cửa hàng', 'Store name'],
    GET_CURRENT_POSITION: ['Đến vị trí hiện tại','Get current Position'],
    ENTER_YOUR_STORE_NAME: ['Nhập tên cửa hàng của bạn', 'Enter your store name'],
    ENTER_YOUR_PHONE: ['Nhập điện thoại của bạn', 'Enter your phone'],
    ENTER_YOUR_ADDRESS: ['Nhập địa chỉ của bạn', 'Enter your address'],
    STORE_URL: ['Tên url của cửa hàng','url name of store'],
    ENTER_URL_STORE: ['Nhập tên url', 'Enter url name'],

    CREATE_MINORPOST: ['Tạo bài đăng phụ','Create a Minor Post'],
    STORE_NAME_FAILED: [
        'Bạn chưa nhập tên cửa hàng hoặc tên cửa hàng quá ngắn (phải có ít nhất 4 ký tự nhiều nhất 100)',
        'You have not entered a store name or store name that is too short (must be at least 4 characters at most 100)'],
    URL_NAME_SHORT: [
        'Bạn chưa nhập tên url hoặc tên url quá ngắn (phải có ít nhất 4 ký tự nhiều nhất 100)',
        'You have not entered a url or url name too short (must be at least 4 characters at most 100)'],
    URL_NAME_FAILED: [
        'Tên url không hợp lệ, tên của bạn nhập quá đặc biệt (tên phải khác "user,store,...")',
        'Invalid url name, your name is too special (you only use letters, numbers, underscores, dots and names must be different from "user, store, ...")'],
    URL_NAME_SPECIAL: [
        'Tên url của bạn chỉ được sử dụng chữ cái, số, dấu gạch dưới, dấu chấm',
        'Your url name is only used letters, numbers, underscores, dots'],
    CATEGORY_FAILED: [
        'Bạn chưa nhập category hoặc độ dài category quá ngắn (phải có ít nhất 2 ký tự nhiều nhất 200)',
        'You have not entered a category or category too short (must have at least 2 characters at most 200)'],
    PHONE_FAILED: [
        'Bạn chưa nhập số điện thoại hoặc số điện thoại không hợp lệ',
        'You have not entered an invalid phone number or phone number'],
    POSITION_FAILED: [
        'Bạn chưa chọn vị trí của cửa hàng trên map','You have not selected the location of the store on the map'],
    ADDRESS_FAILED: [
        'Bạn chưa nhập địa chỉ hoặc địa chỉ quá ngắn (địa chỉ cẩn ít nhất 6 ký tự)',
        'You have not entered your address or address is too short (address at least 6 characters)'],

    WARNING_MODAL: ['Cảnh Báo', 'Warning'],
    ADD: ['Thêm','Add'],
    HOME: ['Trang chủ','Home'],
    LOG_OUT: ['Đăng xuất', 'Logout'],
    SETTING: ['Cài đặt', 'Setting'],
    STATISTIC: ['Thống kê','Statistics'],
    PHOTOS: ['Ảnh','Photos'],
    ABOUT: ['Giới thiệu', 'About'],
    PAGE: ['Trang chủ','Page'],
    INTEREST: ['Quan tâm','Interest'],
    BLOCK: ['Chặn', 'Block'],
    BLOCK_USER: ['Chặn người dùng','Block user'],
    SEARCH_BY_NAME: ['Tìm theo tên','Search by name'],
    UNBLOCK: ['Bỏ chặn', 'Unblock'],
    BLOCK_DESCRIPTION: ['Ngay khi bạn chặn ai đó, người này sẽ không thể nhắn tin hay bình luận với cửa hàng của bạn.','As soon as you block someone, this person will not be able to message or comment to your store.'],
    INFO_GENERAL: ['Thông tin chung','General info'],
    GENERAL: ['Chung','General'],
    INTERACTION: ['Tương tác', 'Interaction'],
    SECURITY: ['Bảo mật','Security'],
    FEED_BACK: ['Báo cáo', 'Feed Back'],
    TOTAL_COMMENT: ['Tổng số bình luận','Total comment'],
    TOTAL_REPLY_COMMENT: ['Tổng số trả lời bình luận','Total reply comment'],
    TOTAL_LIKE: ['Tổng số lượt thích', 'Total like'],
    TOTAL_FOLLOW: ['Tổng số lượt theo dõi', 'Total follow'],
    CREATE_TIME: ['Lần đầu tiên tham gia kajkai', 'First day join kajkai'],
    LAST_TIME: ['Ghé thăm kajkai gần nhất', 'The last time visit kajkai'],
    FEED_BACK_DESCRIPTION: [
        'Phản hồi sẽ được gửi tới admin của KajKai. chúng tôi sẽ xem tất cả các phản hồi của bạn và sử lý một cách tốt nhất',
        'Feedback will be sent to KajKai admin. We will see all your feedback and best practices'],
    THANK_TO_FEEDBACK: ['Cảm ơn đã gửi phản hồi cho chúng tôi', 'Thanks for sending us feedback'],
    FEED_BACK_FAILED: [
        'xin lỗi bạn, vì một lý do nào đấy mà phản hồi không gửi được',
        'Sorry, for some reason the reply was not sent'],
    DONE: ['Xong', 'Done'],
    CREATE_INTEREST: ['Tạo quan tâm','Create Interest'],
    EMAIL: ['Thư điện tử','Email'],
    LANGUAGE: ['Ngôn ngữ','Language'],
    USER: ['Người dùng','User'],
    NOT_LOGIN: ['Bạn cần đăng nhập để thực hiện chức năng này.','You need to log in to perform this function.'],
    GO_LOGIN: ['Đến trang đăng nhập ngay!','Go to login page now!'],

    WELCOME_TO_KAJKAI: ['Chào mừng tới KajKai','Welcome to KajKai'],
    GET_START_BY_FOLLOW: [
        'Bắt đầu bằng cách theo dõi bài đăng bán hàng. Bạn sẽ được biết về sản phẩm, ảnh và những thứ khác của họ',
        'Get started by follow SellPost. You\'ll see their photos, product and other things'],
    GET_START: ['Bắt đầu','Get Started'],

    GUILD_USER_1: ['Hiện tại bạn chưa theo dõi bất kỳ bài đăng bán hàng nào.','You currently do not track any sales posts.'],
    GUILD_USER_2: [
        'Để theo dõi bài đăng bán hàng bạn hãy tìm kiếm một bài đăng mà bạn thích sau đó ấn vào biểu tượng',
        'To follow your sales post, look for a post you like and then click on the icon'],
    GUILD_USER_3: [
        'như hình bên dưới',
        'shown below'],
    GUILD_USER_4: [
        'Người dùng này chưa theo dõi bất kỳ bài đăng bán hàng nào',
        'This user has not followed any sales posts yet'],
    SEND_MESSAGE: [
        'Nhắn tin',
        'Send Message'
    ],
    FOLLOW_US: ['Theo dõi ngay','Follow us'],
    FOLLOWED: ['Đã theo dõi','Followed'],
    OPEN: ['Mở','Open'],
    SLEEP: ['Tạm nghỉ','Sleep'],
    STORE_BOLD: ['CỬA HÀNG','STORE'],
    BASIC: ['CƠ BẢN','BASIC'],
    URL_NAME: ['Tên đường dẫn','Url name'],
    SETTING_BOLD: ['THIẾT LẬP','SETTING'],
    CHOOSE_YOUR_INTEREST: ['Chọn loài hình', 'Choose category'],
    CHOOSE_YOUR_LOCATION: ['Chọn vị trí', 'Choose location'],
    CLOSE_STORE_DESCRIPTION: ['Đã hết giờ bán, cửa hàng tạm nghỉ, quý khách vui lòng quay lại sau','Time out sales, store temporarily closed, please come back later'],
    TIME: ['thời gian','time'],
    ADD_NEW_CONTENT: ['Thêm nội dung','Add new content'],
    EDIT_SELL_POST: ['Sửa bài đăng','Edit sell post'],
    CREATE_SELL_POST: ['Tạo bài đăng','Create Sell Post'],
    REMOVE: ['xoá','remove'],
    ADD_PRODUCT: ['thêm sản phẩm','add product'],
    UPDATE_PHOTO: ['Cập nhật ảnh','Update photo'],
    HAVE_NO_PHOTO: ['Chưa có ảnh','There are no images'],
    HAVE_NO_FOLLOW_STORE: ['Chưa theo dõi cửa hàng nào','Have not followed any store'],
    FOLLOW_STORE: ['Cửa hàng theo dõi','Following store'],
    HAVE_NO_INTEREST: ['Chưa có mục quan tâm','No item of interest'],
    NEW: ['Mới','New'],
    JUST_NOW: ['Vừa mới','Just now'],
    MINS: ['phút','mins'],
    HRS: ['giờ','hrs'],
    AT: ['lúc','at'],
    YESTERDAY: ['hôm qua','yesterday'],
    MONTH: ['tháng','month'],
    TURN_OFF_NOTIFY: ['Tắt thông báo từ bài đăng này','Turn off notification for this post'],
    TURN_ON_NOTIFY: ['Bật thông báo từ bài đăng này','Turn on notification for this post'],
    EDIT_SELL_POST: ['Sửa bài đăng','Edit SellPost'],
    DELETE_SELL_POST: ['Xoá bài đăng','Delete SellPost'],
    SURE_DELETE_SELL_POST: ['Bạn có chắc muốn xoá bài đăng này chứ ?','Are you sure you want to delete this post?'],

    //  NOTIFI

    ALSO_COMMENT_IN: ['đã bình luận','also commented'],
    ORDER_ON: ['đã đặt hàng', 'ordered'],

    A_SELL_POST_YOU_FOLLOW: ['một cửa hàng mà bạn quan tâm','a sell post you followed'],
    YOUR_SELL_POST: ['cửa hàng của bạn','your sell post'],

    REPLY_TO_COMMENT_OF: ['đã trả lời bình luận của', 'replied to comment of'],
    COMMENT_ON_A_SELL_POST: ['trong cửa hàng','comment on a sell post'],
    YOURS: ['bạn','yours'],
    IN_STORE_OF: ['trong cửa hàng của','in store of'],

    LIKED_A: ['thích một','liked a'],

    COMMENT_2: ['bình luận', 'comment'],
    SELL_POST_2: ['bài đăng bán hàng', 'sell post'],
    IN_STORE: ['trong cửa hàng','in store'],

    CHANGED_SELL_POST_IN_STORE: ['đã thay đổi bài đăng trong cửa hàng', 'changed the sell post in store'],

    RECEIVED_TO: ['đã nhận','received to'],
    ORDER: ['đơn hàng','order'],

    OF: ['của','of'],

    MY_SELL_POST: ['bài đăng của cửa hàng','my sell post'],
    CLOSED: ['tạm nghỉ','closed'],
    OPENED: ['đã mở','opened'],

    CREATE_NEW_SELL_POST: ['đã tạo một bài đăng bán hàng mới','created a new sellpost'],
    CREATE_NEW_STORE: ['đã tạo một cửa hàng mới','created a new store'],
    SELF: ['mình','his/hers'],
    IN: ['trong','in'],

    MOVE_UP: ['lên','up'],
    MOVE_DOWN: ['xuống','down'],

    MAP: ['bản đồ','map'],
    /////


    PHOTO_USER: ['Ảnh cá nhân','Photo user'],
    PHOTO_STORE: ['Ảnh cửa hàng','Photo store'],
    PHOTO_POST: ['Ảnh bài đăng','Photo post'],
    PHOTO_PRODUCT: ['Ảnh sản phẩm','Photo product'],
    NO_IMAGE_OF_THIS_TYPE: ['Không có ảnh loại này','No image of this type'],

    VIEW_MORE: ['Xem thêm','View more'],
    COMMENTS: ['bình luận','comments'],
    ALL_CATEGORY: ['Tất cả các loại','All category'],

    ENTER_AVATAR_STORE: ['Nhập ảnh đại diện của cửa hàng','Enter your store\'s avatar'],

    AVATAR_STORE_DESCRIPTION_1: [
        'Ảnh đại diện của cửa hàng sẽ được hiện thị ở khắp các bài đăng',
        'The avatar will be displayed throughout the post'
    ],
    AVATAR_STORE_DESCRIPTION_2: [
        'Ảnh đại diện sẽ được người dùng nhìn vào đầu tiêu và luôn luôn công khai',
        'The avatar will be viewed by the user at the top and always public',
    ],
    CHOOSE_CATEGORY_1: ['Chọn loại hình chung', 'Choose common category'],
    CHOOSE_CATEGORY_2: ['Chọn loại hình kinh doanh', 'Choose category'],

    BAN_REASON_1: [
        'Tài khoản của bạn đã bị admin KajKai khoá, lý do :"',
        'Your account has been banned by KajKai admin, the reason: "'],
    BAN_REASON_2: [
        '", nếu bạn có phản hồi gì. Vui lòng vào mail để liên hệ với chúng tôi qua hòm thư kajkaiverify@gmail.com',
        '", If you have any feedback. Please mail to contact us to kajkaiverify@gmail.com.'
    ],

    //CHAT
    NEW_MESSAGE: [
        'Tin nhắn mới',
        'New message'
    ],
    SENT_A_PICTURE: [
        'đã gửi cho bạn hình ảnh',
        'sent you a picture'
    ],
    YOU_SENT: [
        'Bạn: ',
        'You: '
    ],
    ADD_MEMBER: [
        'Thêm thành viên...',
        'Add members...'
    ],
    CHAT_SETTING: [
        'Cài đặt cuộc trò chuyện',
        'Chat Setting'
    ],
    NO_DATA: [
        '(Không có kết quả)',
        '(Not found)'
    ],
    CHAT_LABEL: [
        'Tên cuộc trò chuyện',
        'Label'
    ],
    MEMBERS: [
        'Thành viên',
        'Members'
    ],
    DEFAULT: [
        'Mặc định',
        'Default'
    ],
    VIEW: [
        'Xem',
        'View'
    ],
    ENTER_MESSAGE: [
        'Nhập tin nhắn...',
        'Enter message...'
    ],
    NONE: [
        '(Không có)',
        '(None)'
    ],
    SEND_IMAGE: [
        'GỬI ẢNH',
        'SEND IMAGE'
    ],
    SEND: [
        'GỬI',
        'SEND'
    ],
    CLOSE_SEND_IMAGE: [
        'HỦY',
        'CLOSE'
    ],
    PREVIOUS: ['Trước','Previous'],
    NEXT: ['Sau','Next'],
    WEEKS: ['tuần','week'],
    WEEK: ['tuần','weeks'],
    MONTH: ['tháng','month'],
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
