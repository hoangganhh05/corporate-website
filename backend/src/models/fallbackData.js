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
    image_url: 'service-consulting.jpg',
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
    image_url: 'service-web.jpg',
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
    image_url: 'service-maintenance.jpg',
    display_order: 3,
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
    image_url: 'news-erp.jpg',
    published_at: '2026-06-15T08:30:00Z',
    is_published: 1
  },
  {
    id: 2,
    title: 'Xu hướng ứng dụng công nghệ Microservices trong quản trị doanh nghiệp 2026',
    slug: 'xu-huong-ung-dung-cong-nghe-microservices-2026',
    category: 'Góc nhìn công nghệ',
    summary: 'Phân tích từ đội ngũ kỹ sư giải pháp FFT Việt Nam về lợi ích kiến trúc dịch vụ vi mô cho các hệ thống mở rộng.',
    content: 'Kiến trúc hướng dịch vụ giúp các doanh nghiệp dễ dàng mở rộng, cô lập rủi ro và tăng tốc độ phát triển tính năng mới.',
    image_url: 'news-tech.jpg',
    published_at: '2026-06-20T10:00:00Z',
    is_published: 1
  }
];

const fallbackGallery = [
  {
    id: 1,
    title: 'Không gian làm việc sáng tạo FFT Việt Nam',
    category: 'Văn phòng',
    image_url: 'office-1.jpg',
    description: 'Văn phòng mở hiện đại khơi nguồn cảm hứng đổi mới sáng tạo.',
    display_order: 1
  },
  {
    id: 2,
    title: 'Hoạt động Team Building & Gắn kết nội bộ',
    category: 'Hoạt động',
    image_url: 'team-building.jpg',
    description: 'Tinh thần đồng đội và văn hóa sẻ chia là nền tảng phát triển bền vững.',
    display_order: 2
  },
  {
    id: 3,
    title: 'Hội thảo chia sẻ chuyên môn công nghệ',
    category: 'Công nghệ',
    image_url: 'tech-workshop.jpg',
    description: 'Đội ngũ kỹ sư FFT thường xuyên cập nhật và nghiên cứu các giải pháp phần mềm mới.',
    display_order: 3
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
