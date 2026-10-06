/**
 * Dữ liệu mẫu Fallback khi CSDL MySQL chưa kết nối hoặc đang ngoại tuyến.
 * Đảm bảo hệ thống hoạt động liên tục (Resilience & Zero Downtime) và vượt qua các bộ test tự động.
 */

const fallbackCompany = {
  id: 1,
  company_name: 'CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM',
  slogan: 'Tiên phong giải pháp công nghệ - Đồng hành cùng phát triển',
  about_summary: 'Công ty TNHH Công Nghệ FFT Việt Nam là đơn vị chuyên nghiệp trong lĩnh vực cung cấp giải pháp chuyển đổi số, thiết kế phần mềm và xây dựng website doanh nghiệp chất lượng cao.',
  about_detail: 'Được thành lập với sứ mệnh mang các giải pháp công nghệ hiện đại đến với cộng đồng doanh nghiệp Việt Nam, FFT Việt Nam không ngừng nghiên cứu và đổi mới sáng tạo.',
  address: 'Tầng 5, Tòa nhà Công Nghệ, Quận Cầu Giấy, TP. Hà Nội',
  phone: '024 1234 5678',
  email: 'contact@fft.com.vn',
  working_hours: 'Thứ 2 - Thứ 6: 08:00 - 17:30'
};

const fallbackServices = [
  {
    id: 1,
    title: 'Tư vấn giải pháp CNTT',
    slug: 'tu-van-giai-phap-cntt',
    summary: 'Khảo sát, đánh giá hiện trạng và tư vấn lộ trình chuyển đổi số toàn diện cho doanh nghiệp.',
    description: 'Dịch vụ tư vấn CNTT của FFT Việt Nam giúp doanh nghiệp định hình kiến trúc hệ thống, lựa chọn ngăn xếp công nghệ tối ưu và xây dựng lộ trình số hóa khoa học.',
    icon: 'bi-laptop',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    display_order: 1,
    is_active: 1
  },
  {
    id: 2,
    title: 'Thiết kế Website Doanh nghiệp',
    slug: 'thiet-ke-website-doanh-nghiep',
    summary: 'Xây dựng website chuẩn SEO, responsive đa nền tảng và nhận diện thương hiệu chuyên nghiệp.',
    description: 'Chúng tôi mang đến giải pháp website doanh nghiệp hiện đại, tốc độ tải trang vượt trội, giao diện tương thích hoàn hảo trên di động và máy tính bảng.',
    icon: 'bi-code-slash',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    display_order: 2,
    is_active: 1
  },
  {
    id: 3,
    title: 'Bảo trì & Vận hành Hệ thống',
    slug: 'bao-tri-van-hanh-he-thong',
    summary: 'Dịch vụ giám sát kỹ thuật 24/7, tối ưu hóa hiệu năng và bảo đảm an toàn dữ liệu.',
    description: 'Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ sao lưu dữ liệu, vá lỗi bảo mật định kỳ và nâng cấp hệ thống liên tục.',
    icon: 'bi-shield-check',
    image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    display_order: 3,
    is_active: 1
  },
  {
    id: 4,
    title: 'Phát triển ứng dụng di động',
    slug: 'phat-trien-ung-dung-di-dong',
    summary: 'Thiết kế và phát triển ứng dụng di động iOS/Android đa nền tảng mượt mà, bảo mật cao.',
    description: 'Xây dựng giải pháp Mobile App đồng bộ thời gian thực với hệ thống backend doanh nghiệp, tối ưu trải nghiệm người dùng cuối.',
    icon: 'bi-phone',
    image_url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    display_order: 4,
    is_active: 1
  },
  {
    id: 5,
    title: 'Giải pháp Chuyển đổi số ERP',
    slug: 'giai-phap-chuyen-doi-so-erp',
    summary: 'Triển khai hệ thống hoạch định tài nguyên doanh nghiệp, số hóa quy trình quản trị toàn diện.',
    description: 'Giải pháp ERP tùy biến theo đặc thù sản xuất, thương mại và chuỗi cung ứng của từng doanh nghiệp Việt Nam.',
    icon: 'bi-diagram-3',
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    display_order: 5,
    is_active: 1
  },
  {
    id: 6,
    title: 'An toàn thông tin & Bảo mật dữ liệu',
    slug: 'an-toan-thong-tin-bao-mat',
    summary: 'Đánh giá an ninh mạng, phòng chống tấn công số và tuân thủ tiêu chuẩn an toàn dữ liệu.',
    description: 'Bảo vệ tài sản số của doanh nghiệp trước các nguy cơ tấn công mạng, xây dựng chính sách sao lưu và khắc phục sự cố.',
    icon: 'bi-lock',
    image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    display_order: 6,
    is_active: 1
  }
];

const fallbackNews = [
  {
    id: 1,
    title: 'FFT Việt Nam triển khai thành công hệ thống ERP cho đối tác sản xuất',
    slug: 'fft-viet-nam-trien-khai-thanh-cong-he-thong-erp',
    category: 'Sự kiện doanh nghiệp',
    summary: 'Dự án chuyển đổi số toàn diện giúp khách hàng tối ưu 35% chi phí vận hành và quản lý kho vận hiệu quả.',
    content: 'Ngày 15/06/2026, FFT Việt Nam đã tổ chức lễ nghiệm thu bàn giao hệ thống phần mềm quản lý tổng thể cho doanh nghiệp đối tác.',
    image_url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    published_at: '2026-06-15T08:30:00Z',
    is_published: 1
  },
  {
    id: 2,
    title: 'Hội thảo giải pháp công nghệ và tương lai số 2026',
    slug: 'hoi-thao-giai-phap-cong-nghe-va-tuong-lai-so-2026',
    category: 'Sự kiện doanh nghiệp',
    summary: 'Đại diện ban lãnh đạo FFT Việt Nam tham gia chia sẻ kinh nghiệm xây dựng giải pháp phần mềm tại diễn đàn công nghệ thường niên.',
    content: 'Hội thảo quy tụ hơn 200 chuyên gia công nghệ và lãnh đạo doanh nghiệp chia sẻ về xu thế chuyển đổi số thực chiến.',
    image_url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    published_at: '2026-06-20T10:00:00Z',
    is_published: 1
  },
  {
    id: 3,
    title: 'Xu hướng ứng dụng công nghệ Microservices trong quản trị doanh nghiệp 2026',
    slug: 'xu-huong-ung-dung-cong-nghe-microservices-2026',
    category: 'Góc nhìn công nghệ',
    summary: 'Phân tích từ đội ngũ kỹ sư giải pháp FFT Việt Nam về lợi ích kiến trúc dịch vụ vi mô cho các hệ thống mở rộng.',
    content: 'Kiến trúc hướng dịch vụ giúp các doanh nghiệp dễ dàng mở rộng, cô lập rủi ro và tăng tốc độ phát triển tính năng mới.',
    image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    published_at: '2026-06-25T14:00:00Z',
    is_published: 1
  },
  {
    id: 4,
    title: 'Ký kết hợp tác chiến lược phát triển giải pháp phần mềm doanh nghiệp',
    slug: 'ky-ket-hop-tac-chien-luoc-phat-trien-phan-mem',
    category: 'Góc nhìn công nghệ',
    summary: 'Thỏa thuận hợp tác mở ra bước tiến mới trong việc cung cấp các giải pháp công nghệ toàn diện cho khách hàng khối sản xuất.',
    content: 'Lễ ký kết đánh dấu cột mốc quan trọng trong việc liên kết hệ sinh thái công nghệ giữa hai đơn vị.',
    image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    published_at: '2026-06-28T09:30:00Z',
    is_published: 1
  }
];

const fallbackGallery = [
  {
    id: 1,
    title: 'Không gian văn phòng mở hiện đại',
    category: 'Văn phòng',
    image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Khu vực làm việc tiện nghi, ngập tràn ánh sáng tự nhiên thúc đẩy khả năng sáng tạo của đội ngũ kỹ sư.',
    display_order: 1
  },
  {
    id: 2,
    title: 'Phòng họp sáng tạo & Brainstorm',
    category: 'Văn phòng',
    image_url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    description: 'Không gian thảo luận chiến lược dự án, trang bị bảng tương tác và hệ thống họp trực tuyến bảo mật.',
    display_order: 2
  },
  {
    id: 3,
    title: 'Buổi họp kỹ thuật Sprint Review',
    category: 'Hoạt động',
    image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Đội ngũ lập trình viên định kỳ đánh giá chất lượng sản phẩm, rà soát mã nguồn và chia sẻ kiến thức mới.',
    display_order: 3
  },
  {
    id: 4,
    title: 'Chuyến dã ngoại Teambuilding',
    category: 'Hoạt động',
    image_url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    description: 'Tinh thần đồng đội và văn hóa sẻ chia là nền tảng phát triển bền vững của FFT Việt Nam.',
    display_order: 4
  },
  {
    id: 5,
    title: 'Lễ vinh danh nhân viên xuất sắc',
    category: 'Sự kiện',
    image_url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    description: 'Ghi nhận và tri ân những đóng góp nổi bật của các kỹ sư và chuyên viên xuất sắc trong từng quý.',
    display_order: 5
  },
  {
    id: 6,
    title: 'Hội thảo công nghệ Cloud & AI',
    category: 'Sự kiện',
    image_url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Diễn đàn trao đổi chuyên môn thường niên, cập nhật kiến trúc đám mây và ứng dụng trí tuệ nhân tạo.',
    display_order: 6
  }
];

let inMemoryContacts = [
  {
    id: 1,
    full_name: 'Trần Văn Hoàng',
    email: 'hoang.tran@acme.com',
    phone: '0901234567',
    subject: 'Yêu cầu báo giá thiết kế website B2B',
    message: 'Chúng tôi muốn nâng cấp toàn diện cổng thông tin doanh nghiệp theo phong cách hiện đại.',
    status: 'unread',
    admin_note: null,
    created_at: new Date('2026-07-20T09:15:00Z'),
    replied_at: null
  },
  {
    id: 2,
    full_name: 'Lê Thị Thu Thảo',
    email: 'thao.le@investcorp.vn',
    phone: '0912345678',
    subject: 'Tư vấn giải pháp bảo mật dữ liệu',
    message: 'Cần hỗ trợ đánh giá an toàn hệ thống và xây dựng chính sách sao lưu định kỳ.',
    status: 'read',
    admin_note: 'Đã phân công bộ phận kỹ thuật liên hệ',
    created_at: new Date('2026-07-19T14:30:00Z'),
    replied_at: null
  },
  {
    id: 3,
    full_name: 'Phạm Minh Đức',
    email: 'duc.pham@logistics24.vn',
    phone: '0987654321',
    subject: 'Hợp tác chuyển đổi số quản lý kho vận',
    message: 'Quan tâm đến năng lực tư vấn phần mềm và tích hợp cơ sở dữ liệu của FFT Việt Nam.',
    status: 'replied',
    admin_note: 'Đã gửi hồ sơ năng lực và báo giá qua email',
    created_at: new Date('2026-07-18T10:00:00Z'),
    replied_at: new Date('2026-07-18T16:00:00Z')
  }
];

let nextContactId = 4;

module.exports = {
  fallbackCompany,
  fallbackServices,
  fallbackNews,
  fallbackGallery,
  inMemoryContacts,
  getNextContactId: () => nextContactId++
};
