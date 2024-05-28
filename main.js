const triggerOpen = document.querySelectorAll("[trigger-button]");
const triggerClose = document.querySelectorAll("[close-button]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < triggerOpen.length; i++) {
  let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`);

  const openData = function () {
    targetEl.classList.remove("active");
    overlay.classList.remove("active");
  };

  triggerOpen[i].addEventListener("click", function () {
    targetEl.classList.add("active");
    overlay.classList.add("active");
  });

  targetEl.querySelector("[close-button]").addEventListener("click", openData);
  overlay.addEventListener("click", openData);
}

// mobile-menu submenu

const submenu = document.querySelectorAll(".child-trigger");
submenu.forEach((menu) =>
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    submenu.forEach((item) =>
      item != this
        ? item.closest(".has-child").classList.remove("active")
        : null
    );
    if (this.closest(".has-child").classList != "active") {
      this.closest(".has-child").classList.toggle("active");
    }
  })
);

// sorter

const sorter = document.querySelector(".sort-list");
if (sorter) {
  const sortLi = sorter.querySelectorAll("li");
  sorter.querySelector(".opt-trigger").addEventListener("click", function () {
    sorter.querySelector("ul").classList.toggle("show");
  });

  Array.from(sortLi).forEach((item) =>
    item.addEventListener("click", function () {
      Array.from(sortLi).forEach((li) =>
        li != this ? li.classList.remove("active") : null
      );

      this.classList.add("active");
      sorter.querySelector(".opt-trigger span.value").textContent =
        this.textContent;
      sorter.querySelector("ul").classList.toggle("show");
    })
  );
}

// tabbed

const trigger = document.querySelectorAll(".tabbed-trigger");
const content = document.querySelectorAll(".tabbed > div");

trigger.forEach((btn) => {
  btn.addEventListener("click", function () {
    const dataTarget = this.dataset.id;
    const body = document.querySelector(`#${dataTarget}`);

    trigger.forEach((b) => b.parentNode.classList.remove("active"));
    trigger.forEach((s) => s.classList.remove("active"));
    content.forEach((c) => c.classList.remove("active"));

    this.parentNode.classList.add("active");
    if (body) {
      body.classList.add("active");
    } else {
      console.error(`Element with ID #${dataTarget} not found`);
    }
  });
});

// slider

const swiper = new Swiper(".sliderbox", {
  loop: true,
  effect: "fade",
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// carousel

const carousel = new Swiper(".carouselbox", {
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,

  // If we need pagination
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    421: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: false,
    },
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      centeredSlides: false,
    },
  },
});

// Product image

const thumbImage = new Swiper(".thumbnail-image", {
  // loop: true,
  direction: "vertical",
  spaceBetween: 15,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});

const mainImage = new Swiper(".main-image", {
  loop: true,
  autoHeight: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: thumbImage,
  },
});
