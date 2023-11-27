<template>
  <section
    id="about"
    ref="about"
    class="flex flex-col md:flex-row justify-center items-center min-h-screen gap-8"
  >
    <figure
      :class="
        animateItem.pic
          ? 'animate-fade-in-down lg:animate-fade-in-left'
          : 'opacity-0'
      "
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s"
        alt="a foking alt"
      />
    </figure>
    <div class="flex flex-col items-center gap-6">
      <h1
        class="text-darkitem"
        :class="
          animateItem.title
            ? 'animate-fade-in lg:animate-fade-in-down'
            : 'opacity-0'
        "
      >
        PORTFOLIO TITLE
      </h1>
      <p
        class="max-w-xs md:max-w-md text-justify"
        :class="animateItem.text ? 'animate-fade-in-up' : 'opacity-0'"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        dolorem aliquid modi ratione est voluptates dicta corporis ex amet sunt,
        repellat neque quo et iste at atque voluptatem alias dolore!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  components: {},
  data() {
    return {
      animateItem: { pic: false, title: false, text: false },
    };
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener("scroll", this.handleScroll);
    }, 500);
  },
  methods: {
    handleScroll() {
      if (this.$parent.selectedSection > 0) {
        this.animateItems();
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
    animateItems() {
      this.animateItem.pic = true;
      setTimeout(() => {
        this.animateItem.title = true;
        setTimeout(() => {
          this.animateItem.text = true;
        }, 500);
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
