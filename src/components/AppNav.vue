<template>
  <nav
    class="z-100 sticky top-0 transition-opacity duration-500 ease"
    :class="showNav ? 'animate-fade-in-down' : 'opacity-0'"
  >
    <div
      class="absolute z-100 w-full h-screen bg-darkbg overflow-hidden"
      :class="
        menuOpen
          ? 'animate-fade-in-nav opacity-80'
          : 'animate-fade-out-nav opacity-0'
      "
    ></div>
    <button class="absolute z-110 top-4 right-4" @click="menuOpen = !menuOpen">
      <svg
        class="w-8 h-8"
        :class="menuOpen ? 'fill-white1' : 'fill-darkbg'"
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :class="
            menuOpen
              ? 'animate-fade-out-zoom opacity-0'
              : 'animate-fade-in-zoom'
          "
          d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
          fill-rule="nonzero"
        />
        <path
          :class="
            menuOpen
              ? 'animate-fade-in-zoom'
              : 'animate-fade-out-zoom opacity-0'
          "
          d="m12 10.93 5.719-5.72a.7495.7495 0 0 1 .531-.219c.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75a.7495.7495 0 0 1-.531-.219L12 13.053l-5.719 5.719a.7495.7495 0 0 1-.531.219c-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719A.7518.7518 0 0 1 5 5.74c0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
        />
      </svg>
    </button>
    <ul
      v-if="menuOpen"
      class="absolute z-110 flex flex-col items-center justify-center gap-24 w-full h-screen"
    >
      <li
        v-for="(item, index) in menu"
        :key="index"
        :class="
          menuOpen ? 'animate-fade-in-zoom' : 'animate-fade-out-zoom opacity-0'
        "
      >
        <a
          :href="item.link"
          class="font-roboto font-semibold text-lg text-white1 lg:hover:text-white2 transition-colors duration-500"
          :class="[index === $parent.selectedSection ? 'text-white3' : '']"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AboutSection",
  components: {},
  data() {
    return {
      showNav: false,
      menuOpen: false,
      menu: [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Gallery", link: "#gallery" },
        { name: "Contact", link: "#contact" },
      ],
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("click", this.handleClick);
  },
  methods: {
    handleScroll() {
      this.showNav = this.$parent.selectedSection > 0;
      if (this.menuOpen) {
        this.menuOpen = false;
      }
    },
    handleClick(event) {
      if (this.menuOpen && !event.target.closest("svg")) {
        this.menuOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
