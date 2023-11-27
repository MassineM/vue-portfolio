<template>
  <div id="app" class="flex flex-col w-auto">
    <app-header />
    <app-nav />
    <about-section />
    <gallery-section />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import GallerySection from "./components/GallerySection.vue";
import AppFooter from "./components/AppFooter.vue";
import AppNav from "./components/AppNav.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AboutSection,
    GallerySection,
    AppFooter,
    AppNav,
  },
  data() {
    return {
      selectedSection: 0,
    };
  },
  mounted() {
    this.addSmoothScrolling;
    window.addEventListener("scroll", this.handleScroll);
    // scroll to top on refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  },
  methods: {
    addSmoothScrolling() {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const target = document.querySelector(link.getAttribute("href"));
          if (target) {
            window.scrollTo({
              top: target.offsetTop,
              behavior: "smooth",
            });
          }
        });
      });
    },
    handleScroll() {
      const aboutSection = document.getElementById("about");
      const gallerySection = document.getElementById("gallery");
      const contactSection = document.getElementById("contact");

      if (window.scrollY < aboutSection.offsetTop - 50) {
        this.selectedSection = 0;
      } else if (
        window.scrollY <
        gallerySection.offsetTop - (3 * window.innerHeight) / 4
      ) {
        this.selectedSection = 1;
      } else if (
        window.scrollY <
        contactSection.offsetTop - window.innerHeight + 50
      ) {
        this.selectedSection = 2;
      } else {
        this.selectedSection = 3;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
