
document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // 1. CAROUSEL - CÁC CHẶNG TOUR
    // =====================================================

    const cards = document.getElementById("mediaCards");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");

    if (cards && prevBtn && nextBtn) {
        const allCards = Array.from(
            cards.querySelectorAll(".media-card")
        );

        const cardsWindow = cards.closest(".cards-window");

        if (cardsWindow && allCards.length > 0) {

            let currentIndex = 0;
            let scrollTimer;

            // Kiểm tra đang dùng giao diện điện thoại hay máy tính
            function isMobile() {
                return window.matchMedia("(max-width: 850px)").matches;
            }

            // Tính số card tối đa có thể di chuyển đến
            function getMaxIndex() {
                if (isMobile()) {
                    return Math.max(0, allCards.length - 1);
                }

                const maxScroll =
                    cards.scrollWidth - cardsWindow.clientWidth;

                if (maxScroll <= 0) return 0;

                let lastIndex = 0;

                allCards.forEach(function (card, index) {
                    const distance =
                        card.offsetLeft - allCards[0].offsetLeft;

                    if (distance <= maxScroll + 2) {
                        lastIndex = index;
                    }
                });

                return lastIndex;
            }

            // Tìm vị trí cuộn tương ứng với từng card
            function getCardPosition(index) {
                const card = allCards[index];

                if (!card) return 0;

                return card.offsetLeft - allCards[0].offsetLeft;
            }

            // Cập nhật nút và dấu chấm
            function updateControls() {
                const maxIndex = getMaxIndex();

                currentIndex = Math.max(
                    0,
                    Math.min(currentIndex, maxIndex)
                );

                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex >= maxIndex;

                prevBtn.style.opacity =
                    currentIndex === 0 ? "0.4" : "1";

                nextBtn.style.opacity =
                    currentIndex >= maxIndex ? "0.4" : "1";

                dots.forEach(function (dot, index) {
                    dot.classList.toggle(
                        "active",
                        index === currentIndex
                    );
                });
            }

            // Chuyển đến card được chọn
            function goToCard(index, smooth = true) {
                const maxIndex = getMaxIndex();

                currentIndex = Math.max(
                    0,
                    Math.min(index, maxIndex)
                );

                if (isMobile()) {
                    // Điện thoại: cuộn thật để hỗ trợ vuốt tay
                    cards.style.transform = "none";

                    cardsWindow.scrollTo({
                        left: currentIndex * cardsWindow.clientWidth,
                        behavior: smooth ? "smooth" : "auto"
                    });

                } else {
                    // Máy tính: dịch chuyển từng card
                    cardsWindow.scrollLeft = 0;

                    cards.style.transform =
                        "translateX(-" +
                        getCardPosition(currentIndex) +
                        "px)";
                }

                updateControls();
            }

            // Bấm mũi tên phải: tiến đúng 1 card
            nextBtn.addEventListener("click", function () {
                if (currentIndex < getMaxIndex()) {
                    goToCard(currentIndex + 1);
                }
            });

            // Bấm mũi tên trái: lùi đúng 1 card
            prevBtn.addEventListener("click", function () {
                if (currentIndex > 0) {
                    goToCard(currentIndex - 1);
                }
            });

            // Bấm dấu chấm để đến card tương ứng
            dots.forEach(function (dot, index) {
                dot.style.cursor = "pointer";

                dot.addEventListener("click", function () {
                    goToCard(index);
                });
            });

            // Vuốt tay trên điện thoại
            cardsWindow.addEventListener("scroll", function () {
                if (!isMobile()) return;

                clearTimeout(scrollTimer);

                scrollTimer = setTimeout(function () {
                    const width = cardsWindow.clientWidth;

                    if (!width) return;

                    currentIndex = Math.round(
                        cardsWindow.scrollLeft / width
                    );

                    updateControls();
                }, 80);
            });

            // Khi đổi kích thước màn hình, căn lại card hiện tại
            let resizeTimer;

            window.addEventListener("resize", function () {
                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(function () {
                    goToCard(currentIndex, false);
                }, 100);
            });

            // Khởi tạo carousel
            goToCard(0, false);
        }
    }


    // =====================================================
    // 2. CHUÔNG - TÀI KHOẢN - VÉ CỦA TÔI
    // =====================================================

    const dropdownItems = [
        {
            button: document.getElementById("notificationBtn"),
            menu: document.getElementById("notificationMenu")
        },
        {
            button: document.getElementById("accountBtn"),
            menu: document.getElementById("accountMenu")
        },
        {
            button: document.getElementById("ticketBtn"),
            menu: document.getElementById("ticketMenu")
        }
    ];

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

            // Mở menu vừa được bấm
            if (shouldOpen) {
                menu.classList.add("show");
                button.setAttribute("aria-expanded", "true");
            }
        });

        // Bấm bên trong menu không đóng menu
        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // Bấm ra ngoài thì đóng các menu
    document.addEventListener("click", function () {
        dropdownItems.forEach(function ({ button, menu }) {
            if (!button || !menu) return;

            menu.classList.remove("show");
            button.setAttribute("aria-expanded", "false");
        });
    });


    // =====================================================
    // 3. GẠCH TÍM CHO MỤC ĐANG CHỌN
    // =====================================================

    const navLinks = document.querySelectorAll(
        ".navbar .nav-link"
    );

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });


    // =====================================================
    // 4. TỰ ĐỔI GẠCH TÍM KHI CUỘN TRANG
    // =====================================================

    const sections = [
        { id: "top" },
        { id: "ticket-terms" },
        { id: "faq" },
        { id: "tour" }
    ];

    function updateActiveLink() {
        let currentId = "top";

        sections.forEach(function (section) {
            const element = document.getElementById(section.id);

            if (
                element &&
                element.getBoundingClientRect().top <= 150
            ) {
                currentId = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentId
            );
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();


    // =====================================================
    // 5. NÚT ĐĂNG NHẬP
    // =====================================================

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            loginBtn.classList.add("clicked");

            setTimeout(function () {
                loginBtn.classList.remove("clicked");
            }, 400);
        });
    }

});
