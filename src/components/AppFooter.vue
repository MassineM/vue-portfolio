<template>
  <footer
    id="contact"
    class="flex flex-col md:flex-row justify-between items-center bg-darkbg p-8 gap-4"
  >
    <a
      href="https://instagram.com/thetechlady"
      target="_blank"
      rel="noopener noreferrer"
      class="flex gap-2 items-center text-white"
    >
      <img
        :src="require('@/assets/instagram.svg')"
        class="w-6"
        alt="instagram"
      />
      @said_aitaddi
    </a>
    <div class="text-white">
      <a href="mailto:test@test.com" target="_blank" rel="noopener noreferrer">
        test@test.com
      </a>
    </div>
    <div class="text-white">
      <small>&copy; 2023</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  components: {},
};
</script>

<style lang="scss" scoped>
</style>
