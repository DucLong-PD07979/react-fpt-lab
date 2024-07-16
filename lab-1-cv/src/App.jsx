import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div class="container-cv">
                <div class="cv-content">
                    <header class="cv-header">
                        <div class="cv-header-box">
                            <div class="cv-header-logo">
                                <img
                                    src="https://static.topcv.vn/cv-builder/assets/default-avatar.fc9c40ba.png"
                                    alt="logo"
                                />
                            </div>
                        </div>
                        <div class="cv-header-box">
                            <h1 class="cv-header-full-name">Nguyễn Văn A</h1>
                            <span class="cv-header-descript-job">
                                Nhân viên kinh doanh
                            </span>
                        </div>
                        <div class="cv-header-box">
                            <ul>
                                <li>
                                    <span class="cv-header-box-icon">
                                        <i class="ri-phone-line"></i>
                                    </span>
                                    (024) 6680 5588
                                </li>
                                <li>
                                    <span class="cv-header-box-icon">
                                        <i class="ri-mail-line"></i>
                                    </span>
                                    hotro@topcv.vn
                                </li>
                                <li>
                                    <span class="cv-header-box-icon">
                                        <i class="ri-facebook-box-line"></i>
                                    </span>
                                    <a href="https://fb.com/topcv.vn">
                                        facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="cv-header-box">
                            <ul>
                                <li>
                                    <span class="cv-header-box-icon">
                                        <i class="ri-user-line"></i>
                                    </span>
                                    Nam
                                </li>
                                <li>
                                    <span class="cv-header-box-icon">
                                        <i class="ri-calendar-line"></i>
                                    </span>
                                    19/05/1992
                                </li>
                                <li>
                                    <span class="cv-header-box-icon">
                                        <i class="ri-map-pin-2-line"></i>
                                    </span>
                                    Số 10, đường 10, TopCV
                                </li>
                            </ul>
                        </div>
                    </header>
                    <div class="cv-body-content">
                        <div class="cv-card-wrapper">
                            <div class="cv-card-icon-toppic">
                                <div class="cv-card-icon-topptipc-box">
                                    <span>
                                        <i class="ri-lightbulb-line"></i>
                                    </span>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <div class="cv-card-details-toppic">
                                <div class="cv-card-details-header">
                                    <h3 class="cv-card-details-title">
                                        Mục tiêu nghề nghiệp
                                    </h3>
                                </div>
                                <div class="cv-card-details-body">
                                    <p class="desciption-detiails">
                                        <span>
                                            Áp dụng những kinh nghiệm về kỹ năng
                                            bán hàng và sự hiểu biết về thị
                                            trường để trở thành một nhân viên
                                            bán hàng chuyên nghiệp, mang đến
                                            nhiều giá trị cho khách hàng. Từ đó
                                            giúp Công ty tăng số lượng khách
                                            hàng và mở rộng tập khách hàng.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cv-card-wrapper">
                            <div class="cv-card-icon-toppic">
                                <div class="cv-card-icon-topptipc-box">
                                    <span>
                                        <i class="ri-graduation-cap-line"></i>
                                    </span>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <div class="cv-card-details-toppic">
                                <div class="cv-card-details-header">
                                    <h3 class="cv-card-details-title">
                                        Học vấn
                                    </h3>
                                </div>
                                <div class="cv-card-details-body">
                                    <div class="cv-card-details-body-header">
                                        <h4 class="cv-card-details-body-header-title">
                                            ĐẠI HỌC TOPCV
                                        </h4>
                                        <p class="cv-card-details-body-header-time">
                                            10/2010 - 05/2014
                                        </p>
                                    </div>
                                    <div class="cv-card-details-body-role">
                                        Quản trị Doanh nghiệp
                                    </div>
                                    <p class="desciption-detiails">
                                        <span>
                                            Tốt nghiệp loại Giỏi, điểm trung
                                            bình 8.0
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cv-card-wrapper">
                            <div class="cv-card-icon-toppic">
                                <div class="cv-card-icon-topptipc-box">
                                    <span>
                                        <i class="ri-briefcase-line"></i>
                                    </span>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <div class="cv-card-details-toppic">
                                <div class="cv-card-details-header">
                                    <h3 class="cv-card-details-title">
                                        Kinh nghiệm làm việc
                                    </h3>
                                </div>
                                <div class="cv-card-details-body">
                                    <div class="cv-card-details-body-header">
                                        <h4 class="cv-card-details-body-header-title">
                                            Công ty TOPCV
                                        </h4>
                                        <p class="cv-card-details-body-header-time">
                                            10/2010 - 05/2014
                                        </p>
                                    </div>
                                    <div class="cv-card-details-body-role">
                                        Nhân viên bán hàng
                                    </div>
                                    <p class="desciption-detiails">
                                        <span>
                                            - Hỗ trợ viết bài quảng cáo sản phẩm
                                            qua kênh facebook, các forum,...
                                        </span>
                                        <span>
                                            - Giới thiệu, tư vấn sản phẩm, giải
                                            đáp các vấn đề thắc mắc của khách
                                            hàng qua điện thoại và email.
                                        </span>
                                    </p>
                                </div>
                                <div class="cv-card-details-body">
                                    <div class="cv-card-details-body-header">
                                        <h4 class="cv-card-details-body-header-title">
                                            Công ty TOPCV
                                        </h4>
                                        <p class="cv-card-details-body-header-time">
                                            10/2010 - 05/2014
                                        </p>
                                    </div>
                                    <div class="cv-card-details-body-role">
                                        Nhân viên bán hàng
                                    </div>
                                    <p class="desciption-detiails">
                                        <span>
                                            - Hỗ trợ viết bài quảng cáo sản phẩm
                                            qua kênh facebook, các forum,...
                                        </span>
                                        <span>
                                            - Giới thiệu, tư vấn sản phẩm, giải
                                            đáp các vấn đề thắc mắc của khách
                                            hàng qua điện thoại và email.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cv-card-wrapper">
                            <div class="cv-card-icon-toppic">
                                <div class="cv-card-icon-topptipc-box">
                                    <span>
                                        <i class="ri-walk-line"></i>
                                    </span>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <div class="cv-card-details-toppic">
                                <div class="cv-card-details-header">
                                    <h3 class="cv-card-details-title">
                                        Hoạt động
                                    </h3>
                                </div>
                                <div class="cv-card-details-body">
                                    <div class="cv-card-details-body-header">
                                        <h4 class="cv-card-details-body-header-title">
                                            NHÓM TÌNH NGUYỆN TOPCV
                                        </h4>
                                        <p class="cv-card-details-body-header-time">
                                            10/2010 - 05/2014
                                        </p>
                                    </div>
                                    <div class="cv-card-details-body-role">
                                        Tình nguyện viên
                                    </div>
                                    <p class="desciption-detiails">
                                        <span>
                                            Tập hợp các món quà và phân phát tới
                                            người vô gia cư.
                                        </span>
                                        <span>
                                            - Chia sẻ, động viên họ vượt qua
                                            giai đoạn khó khăn, giúp họ có những
                                            suy nghĩ lạc quan.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cv-card-wrapper">
                            <div class="cv-card-icon-toppic">
                                <div class="cv-card-icon-topptipc-box">
                                    <span>
                                        <i class="ri-team-line"></i>
                                    </span>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <div class="cv-card-details-toppic">
                                <div class="cv-card-details-header">
                                    <h3 class="cv-card-details-title">
                                        Người giới thiệu
                                    </h3>
                                </div>
                                <div class="cv-card-details-body">
                                    <div class="cv-card-details-body-role">
                                        Người giới thiệu
                                    </div>
                                    <p class="desciption-detiails">
                                        <span>
                                            Anh... - Trưởng phòng Marketing Công
                                            ty TOPCV
                                        </span>
                                        <span>Điện thoại: 0908333535</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
