document.addEventListener("DOMContentLoaded", function () {
  let accordion = document.querySelectorAll(".faq__accordion");

  accordion.forEach((item) => {
    item.addEventListener("click", () => {
      const targetTitle = item.querySelector(".faq__accordion-content");
      const targetIcon = item.querySelector(".faq__accordion-icon");

      targetIcon.classList.toggle("faq__accordion-icon--mod");
      targetTitle.classList.toggle("show-content");
      if (targetTitle.style.maxHeight) {
        targetTitle.style.maxHeight = null;
      } else {
        targetTitle.style.maxHeight = targetTitle.scrollHeight + "px";
      }
    });
  });

  let tabsParrent = document.querySelector(".license__tabs");
  let tabs = document.querySelectorAll(".license__tabs-toggle");
  let tabsContent = document.querySelectorAll(".license__tabs-content");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove("license__tabs-toggle--active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("license__tabs-toggle--active");
  }

  hideTabContent();
  showTabContent();

  tabsParrent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("license__tabs-toggle")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
