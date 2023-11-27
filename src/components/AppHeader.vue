<template>
  <header
    id="home"
    ref="home"
    class="bg-darkbg flex justify-center items-center h-screen"
  >
    <figure class="absolute h-full w-full z-0">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s"
        alt="a foking alt"
        class="object-cover h-full w-full py-16 md:p-16"
        :class="animateItem.bgPic ? 'animate-fade-in' : 'opacity-0'"
      />
    </figure>
    <div class="z-10 flex flex-col items-center gap-8">
      <h1
        class="text-darkitem"
        :class="animateItem.title ? 'animate-fade-in-up' : 'opacity-0'"
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
      <div :class="animateItem.arrows ? 'animate-fade-in-up' : 'opacity-0'">
        <home-arrows />
      </div>
    </div>
  </header>
</template>

<script lang="js">
import HomeArrows from "./HomeArrows.vue";

export default {
  name: "AppHeader",
  components: {
    HomeArrows,
  },
  data() {
    return {
      animateItem: { bgPic: false, title: false, text: false, arrows: false },
    };
  },
  mounted() {
    this.animateItem.bgPic = true;
    setTimeout(() => {
      this.animateItem.title = true;
      setTimeout(() => {
        this.animateItem.text = true;
        setTimeout(() => {
          this.animateItem.arrows = true;
        }, 500);
      }, 500);
    }, 1000);
  },
};
</script>

<style lang="scss" scoped></style>
