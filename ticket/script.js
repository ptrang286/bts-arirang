
document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // 1. CAROUSEL - CÁC CHẶNG TOUR
    // =====================================================

    const cards = document.getElementById("mediaCards");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");

    if (cards && prevBtn && nextBtn) {
        const allCards = cards.querySelectorAll(".media-card");
        const cardsWindow = cards.closest(".cards-window");

        if (cardsWindow && allCards.length > 0) {
            let showingLastTwo = false;

            function updateCarousel() {
                const targetCard = showingLastTwo
                    ? allCards[Math.min(3, allCards.length - 1)]
                    : allCards[0];

                const distance =
                    targetCard.offsetLeft - allCards[0].offsetLeft;

                cards.style.transform = `translateX(-${distance}px)`;

                prevBtn.style.opacity = showingLastTwo ? "1" : "0.4";
                nextBtn.style.opacity = showingLastTwo ? "0.4" : "1";

                prevBtn.disabled = !showingLastTwo;
                nextBtn.disabled =
                    showingLastTwo || allCards.length < 4;

                dots.forEach((dot, index) => {
                    dot.classList.toggle(
                        "active",
                        index === (showingLastTwo ? 1 : 0)
                    );
                });
            }

            nextBtn.addEventListener("click", function () {
                if (allCards.length < 4 || showingLastTwo) return;

                showingLastTwo = true;
                updateCarousel();
            });

            prevBtn.addEventListener("click", function () {
                if (!showingLastTwo) return;

                showingLastTwo = false;
                updateCarousel();
            });

            window.addEventListener("resize", updateCarousel);

            updateCarousel();
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

            // Đóng tất cả các ô
            dropdownItems.forEach(function (item) {
                if (!item.button || !item.menu) return;

                item.menu.classList.remove("show");
                item.button.setAttribute("aria-expanded", "false");
            });

            // Chỉ mở ô vừa được bấm
            if (shouldOpen) {
                menu.classList.add("show");
                button.setAttribute("aria-expanded", "true");
            }
        });

        // Bấm bên trong ô không tự đóng
        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // Bấm ra ngoài thì đóng tất cả
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

    const navLinks = document.querySelectorAll(".navbar .nav-link");

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
        { id: "top", link: 'a[href="#top"]' },
        { id: "ticket-terms", link: 'a[href="#ticket-terms"]' },
        { id: "faq", link: 'a[href="#faq"]' },
        { id: "tour", link: 'a[href="#tour"]' }
    ];

    function updateActiveLink() {
        let currentId = "top";

        sections.forEach(function (section) {
            const element = document.getElementById(section.id);

            if (element && element.getBoundingClientRect().top <= 150) {
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

});


// =====================================================
    // nút đăng nhập
    // =====================================================
if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        loginBtn.classList.add("clicked");

        setTimeout(() => {
            loginBtn.classList.remove("clicked");
        }, 400);
    });
}
