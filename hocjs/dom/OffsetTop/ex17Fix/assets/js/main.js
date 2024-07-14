/**
 * 1. build giao diện
 * 2. bấm vào section nào thì chuyển tới section đó
 */

// DOMContentLoaded ==> SỰ kiện fire khi DOM Tree được hình thành
// load ==> sự kiện fire khi tất cả các tài nguyên trên trang web được tải xong

var init = function () {
  var navbar = document.querySelector("nav");
  var navItems = navbar.children;
  var navHeight = navbar.clientHeight;
  var body = document.body;
  body.style.paddingTop = `${navHeight}px`;
  if (navItems.length) {
    Array.from(navItems).forEach(function (navItem) {
      navItem.addEventListener("click", function () {
        var sectionId = this.dataset.target;
        if (!sectionId) return;
        var sectionEl = document.querySelector(sectionId);
        console.log(sectionEl);
        var offsetTopSection = sectionEl.offsetTop - navHeight;
        window.scrollTo({ top: offsetTopSection, behavior: "smooth" });
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var sectionId = entry.target.id;
            var navItemActive = navbar.querySelector(".active");
            var navItem = navbar.querySelector(
              `button[data-target="#${sectionId}"]`
            );
            navItem.classList.add("active");
            if (navItemActive) {
              navItemActive.classList.remove("active");
            }
          }
        });
      },
      {
        threshold: [0.5], // Giữa màn hình
      }
    );

    var sectionList = document.querySelectorAll("section");
    if (sectionList.length) {
      sectionList.forEach(function (section) {
        observer.observe(section);
      });
    }
  }
};
document.addEventListener("DOMContentLoaded", init);

// Keyword: Intersection Observer API
// getBoundingClientRect()
