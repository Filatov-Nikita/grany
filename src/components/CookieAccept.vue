<template>
  <Transition class="tw-transition-opacity tw-duration-300" leave-active-class="tw-opacity-0">
    <div v-if="show" class="tw-rounded-md tw-bg-primary tw-p-16">
      <p class="tw-text-md">Мы используем файлы cookie!</p>
      <p class="tw-mt-8">
        Они нужны, чтобы обеспечить вам максимальное удобство на нашем веб-сайте.
        Вы можете запретить передачу этих данных в настройках вашего браузера.
        Продолжая, вы соглашаетесь с нашей <a class="tw-underline" href="/policy.pdf" target="_blank">Политикой конфедициальности</a>.
      </p>
      <AppButton class="tw-mt-16" @click="accept">Принять</AppButton>
    </div>
  </Transition>
</template>

<script>
export default {
  mounted() {
    this.check();
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    check() {
      const value = localStorage.getItem('cookieAccepted');
      if(!value) this.show = true
    },
    accept() {
      localStorage.setItem('cookieAccepted', true);
      this.show = false;
    }
  }
}
</script>

<style>

</style>
