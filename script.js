
/* ==================================================
   THÔNG TIN 7 THÀNH VIÊN BTS
================================================== */

const memberData = {

    rm: {
        name: "RM",
        realName: "Kim Namjoon",
        birthDate: "12/09/1994",
        image: "images/RM.png",
        text: "RM (Kim Namjoon) là trưởng nhóm của BTS, nổi bật với khả năng rap, sáng tác và tư duy sâu sắc. Anh đóng vai trò quan trọng trong việc định hướng âm nhạc của nhóm và thường đại diện BTS trong nhiều hoạt động quốc tế. Với phong cách điềm đạm, khả năng diễn đạt tốt và tinh thần luôn muốn học hỏi, RM là một trong những thành viên góp phần tạo nên màu sắc riêng của BTS."
    },

    jin: {
        name: "JIN",
        realName: "Kim Seokjin",
        birthDate: "04/12/1992",
        image: "images/JIN.jpg",
        text: "Jin là thành viên lớn tuổi nhất của BTS, được biết đến với giọng hát giàu cảm xúc cùng tính cách hài hước và ấm áp. Anh thường mang đến nguồn năng lượng vui vẻ cho các thành viên và ARMY. Bên cạnh âm nhạc, Jin còn gây ấn tượng bởi sự chân thành, tinh thần tích cực và cách luôn quan tâm đến những người xung quanh."
    },

    suga: {
        name: "SUGA",
        realName: "Min Yoongi",
        birthDate: "09/03/1993",
        image: "images/SUGA.jpg",
        text: "SUGA là rapper, nhạc sĩ và nhà sản xuất âm nhạc của BTS. Anh được biết đến với phong cách âm nhạc chân thật, mạnh mẽ và khả năng truyền tải những câu chuyện cá nhân qua âm nhạc. SUGA cũng tham gia sâu vào quá trình sáng tác và sản xuất, góp phần tạo nên màu sắc đặc trưng trong nhiều sản phẩm của BTS."
    },

    jhope: {
        name: "J-HOPE",
        realName: "Jung Hoseok",
        birthDate: "18/02/1994",
        image: "images/J-HOPE.jpg",
        text: "j-hope nổi bật với năng lượng tích cực, khả năng vũ đạo và phong cách trình diễn đầy cuốn hút. Anh thường được xem là nguồn năng lượng của nhóm, luôn mang đến bầu không khí vui vẻ và tích cực. Với khả năng kiểm soát sân khấu cùng màu sắc nghệ thuật riêng, j-hope tạo nên dấu ấn đặc biệt trong các màn trình diễn của BTS."
    },

    jimin: {
        name: "JIMIN",
        realName: "Park Jimin",
        birthDate: "13/10/1995",
        image: "images/JIMIN.jpg",
        text: "Jimin sở hữu chất giọng giàu cảm xúc cùng phong cách biểu diễn tinh tế. Anh nổi bật với khả năng kết hợp giọng hát và vũ đạo để truyền tải cảm xúc trên sân khấu. Jimin cũng được yêu thích bởi sự nhẹ nhàng, chân thành và cách anh luôn dành nhiều tình cảm cho các thành viên cũng như ARMY."
    },

    v: {
        name: "V",
        realName: "Kim Taehyung",
        birthDate: "30/12/1995",
        image: "images/V.jpg",
        text: "V được biết đến với màu giọng trầm đặc trưng và phong cách nghệ thuật mang đậm dấu ấn cá nhân. Anh có khả năng thể hiện nhiều màu sắc khác nhau trong âm nhạc và luôn tạo được sự thu hút trên sân khấu. Bên cạnh âm nhạc, V còn thể hiện niềm yêu thích với nghệ thuật, nhiếp ảnh và những lĩnh vực sáng tạo khác."
    },

    jungkook: {
        name: "JUNG KOOK",
        realName: "Jeon Jungkook",
        birthDate: "01/09/1997",
        image: "images/JUNGKOOK.jpg",
        text: "Jung Kook là thành viên nhỏ tuổi nhất của BTS, nổi bật với khả năng hát, nhảy và trình diễn đa dạng. Anh được biết đến với giọng hát mạnh mẽ, khả năng làm chủ sân khấu và tinh thần luôn nỗ lực hoàn thiện bản thân. Qua nhiều năm hoạt động, Jung Kook đã phát triển thành một nghệ sĩ đa năng với màu sắc riêng."
    }

};


/* ================= MỞ THÔNG TIN ================= */

function openMember(member) {

    const data = memberData[member];

    if (!data) return;


    document.getElementById("memberDetailName").textContent =
        data.name;

    document.getElementById("memberDetailRealName").textContent =
        "Tên thật: " + data.realName;

    document.getElementById("memberDetailBirthDate").textContent =
        "Ngày sinh: " + data.birthDate;

    document.getElementById("memberDetailText").textContent =
        data.text;

    document.getElementById("memberDetailImage").src =
        data.image;

    document.getElementById("memberDetailImage").alt =
        data.name;


    document
        .getElementById("memberDropdown")
        .classList.add("show");


    setTimeout(function () {

        document
            .getElementById("memberDropdown")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    }, 100);

}


/* ================= ĐÓNG ================= */

function closeMember() {

    document
        .getElementById("memberDropdown")
        .classList.remove("show");

}


// =====================================================
    // 2. CHUÔNG - TÀI KHOẢN - VÉ CỦA TÔI
    // =====================================================

/* =========================================
   CHUÔNG - TÀI KHOẢN - VÉ
========================================= */

const dropdownItems = [
    {
        button: document.getElementById("notificationBtn"),
        menu: document.getElementById("notificationDropdown")
    },
    {
        button: document.getElementById("accountBtn"),
        menu: document.getElementById("accountMenu")
    },
    {
        button: document.getElementById("ticketBtn"),
        menu: document.getElementById("ticketDropdown")
    }
];

// Bấm icon để mở hoặc đóng menu
dropdownItems.forEach(function ({ button, menu }) {
    if (!button || !menu) return;

    button.addEventListener("click", function (event) {
        event.stopPropagation();

        const shouldOpen = !menu.classList.contains("show");

        // Đóng tất cả menu trước
        dropdownItems.forEach(function (item) {
            if (!item.button || !item.menu) return;

            item.menu.classList.remove("show");
            item.button.setAttribute("aria-expanded", "false");
        });

        // Chỉ mở menu vừa được bấm
        if (shouldOpen) {
            menu.classList.add("show");
            button.setAttribute("aria-expanded", "true");
        }
    });

    // Bấm bên trong hộp không làm hộp đóng
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

// Bấm ra ngoài để đóng tất cả menu
document.addEventListener("click", function () {
    dropdownItems.forEach(function ({ button, menu }) {
        if (!button || !menu) return;

        menu.classList.remove("show");
        button.setAttribute("aria-expanded", "false");
    });
});

// Nút đăng nhập chỉ tạo hiệu ứng bấm, chưa đăng nhập thật
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        loginBtn.classList.add("clicked");

        setTimeout(function () {
            loginBtn.classList.remove("clicked");
        }, 180);
    });
}








document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".menu a").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

