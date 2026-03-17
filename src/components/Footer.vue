<template>
  <footer class="tw-border-t tw-border-dark tw-py-[13px] md:tw-py-20 xl:tw-py-25">
    <div class="wrapper 2xl:tw-max-w-none 2xl:tw-px-40">
      <div class="tw-flex tw-flex-wrap tw-items-center">
        <a href="#" class="logo tw-block tw-mr-30 tw-mb-8 xl:tw-mb-0">
          <img class="tw-w-full" width="152" height="30" src="@/assets/images/logo2.svg" alt="логотип агидель-инвест-строй">
        </a>
        <div class="tw-mb-12 xl:tw-mb-0 tw-basis-full xl:tw-basis-[300px] tw-text-[8px] xl:tw-text-xxs tw-leading-100 tw-mr-20">
          © 2003-{{ currentYear }}, ООО СЗ «Агидель-ИнвестСтрой». Опубликованная на сайте информация носит рекламный характер и не является публичной офертой.
          Проектная декларация на&nbsp;сайте <a class="tw-text-orange tw-underline" :href="$store.state.domrf" target="_blank">наш.дом.рф </a>
        </div>

        <div class="tw-hidden 2xl:tw-block tw-grow"></div>

        <div class="tw-text-white tw-text-xxs tw-self-end tw-w-full tw-mb-12 xl:tw-mb-0 xl:tw-w-auto xl:tw-mr-40 2xl:tw-mr-[82px]">
          <a
            class="tw-underline tw-block tw-w-fit"
            href="/policy.pdf"
            download>
            Политика конфиденциальности
          </a>
          <a class="tw-underline tw-block tw-w-fit tw-mt-4" href="/sogl.pdf" target="_blank">
            Cогласие на обработку персональных данных
          </a>
        </div>

        <div class="tw-flex tw-mr-8 lg:tw-mr-40 tw-space-x-8">
          <a
            v-for="item in soc"
            :key="item.name"
            :href="item.link"
            class="tw-h-32 tw-w-32 tw-block"
            v-html="item.svg"
          >
            
          </a>
        </div>

        <div class="tw-hidden 2xl:tw-block tw-grow"></div>

        <div class="tw-grow xl:tw-hidden"></div>

        <div class="tw-basis-[108px] lg:tw-basis-[126px] tw-mr-6 tw-pr-6 lg:tw-mr-20 lg:tw-pr-20 tw-py-2 tw-text-xxs tw-leading-120 tw-border-r tw-border-r-white tw-border-solid">
          3Д-визуализация, дизайн и разработка
        </div>

        <a href="#" class="tw-w-[78px] tw-h-[25px]">
          <img width="78" height="25" class="tw-w-full" src="@/assets/images/logo-yes.svg" alt="логотип yes idea">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      soc: [
        {
          name: '#max2',
          link: 'https://max.ru/id0278093946_bot',
          svg: '<svg class="tw-w-full tw-h-full"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="url(#paint0_radial_655_1028)"/><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="url(#paint1_linear_655_1028)"/><g clip-path="url(#clip0_655_1028)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1502 22.9298C14.859 22.9298 14.2174 22.7527 13.2236 22.0654C13.1137 21.9894 12.9637 22.0113 12.8681 22.1047C12.0386 22.9152 10.0966 23.4543 10.0062 22.3281C10.0062 21.4222 9.80561 20.6567 9.5783 19.821C9.30754 18.7915 9 17.6449 9 15.9835C9 12.0156 12.2559 9.03052 16.1134 9.03052C19.9744 9.03052 22.9996 12.1627 22.9996 16.0203C23.0125 19.8182 19.9481 22.9096 16.1502 22.9298ZM16.207 12.4619C16.207 12.461 16.2063 12.4602 16.2054 12.4601C14.3275 12.3641 12.8642 13.6642 12.54 15.7027C12.2726 17.3908 12.7473 19.4466 13.1517 19.5536C13.3162 19.5933 13.6923 19.3155 13.9884 19.0446C14.0767 18.9637 14.209 18.9521 14.3114 19.0142C14.7735 19.2944 15.2954 19.4635 15.836 19.5068C17.7826 19.6004 19.4459 18.1185 19.5766 16.1741C19.6526 14.226 18.1548 12.576 16.2087 12.4637C16.2078 12.4636 16.207 12.4628 16.207 12.4619Z" fill="white"/></g><defs><radialGradient id="paint0_radial_655_1028" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.761305 -14.0539) rotate(51.356) scale(38.8325 16)"><stop stop-color="#0000FF"/><stop offset="1" stop-opacity="0"/></radialGradient><linearGradient id="paint1_linear_655_1028" x1="3.7711" y1="24.3372" x2="32" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#44CCFF"/><stop offset="0.662" stop-color="#5533EE"/><stop offset="1" stop-color="#9933DD"/></linearGradient><clipPath id="clip0_655_1028"><rect width="16" height="16" fill="white" transform="translate(8 8)"/></clipPath></defs></svg>'
        },
        // {
        //   name: '#tg',
        //   link: 'https://wa.me/73472242041'
        // },
        {
          name: '#vk',
          link: 'https://vk.com/agidelinvest',
          svg: '<svg class="tw-w-full tw-h-full"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#0077FF"/><path d="M16.7151 20.9949C11.2451 20.9949 8.12512 17.2449 7.99512 11.0049H10.7351C10.8251 15.5849 12.8451 17.5249 14.4451 17.9249V11.0049H17.0251V14.9549C18.6051 14.7849 20.2649 12.9849 20.825 11.0049H23.405C22.975 13.4449 21.175 15.2449 19.895 15.9849C21.175 16.5849 23.2251 18.1549 24.0051 20.9949H21.165C20.555 19.0949 19.0351 17.6249 17.0251 17.4249V20.9949H16.7151Z" fill="white"/></svg>'
        },
        {
          name: '#tg',
          link: 'https://t.me/+79279302886',
          svg: ' <svg class="tw-w-full tw-h-full"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#30A7DE"/><path d="M22.8054 9.63676C22.7279 9.56987 22.6337 9.52538 22.5328 9.50808C22.4319 9.49079 22.3282 9.50136 22.2329 9.53864L9.56665 14.4955C9.38714 14.5653 9.23517 14.6915 9.1336 14.8552C9.03204 15.0188 8.98639 15.2111 9.00352 15.4029C9.02066 15.5947 9.09964 15.7758 9.2286 15.9189C9.35755 16.0619 9.52949 16.1592 9.71853 16.1961L13.0004 16.8405V20.4999C12.9998 20.6992 13.059 20.8941 13.1704 21.0594C13.2819 21.2247 13.4404 21.3526 13.6254 21.4268C13.8101 21.5022 14.0133 21.5203 14.2085 21.4787C14.4037 21.4372 14.5818 21.3378 14.7198 21.1936L16.3023 19.5524L18.8129 21.7499C18.994 21.9106 19.2277 21.9995 19.4698 21.9999C19.5759 21.9998 19.6813 21.9831 19.7823 21.9505C19.9472 21.8982 20.0956 21.8035 20.2126 21.676C20.3296 21.5485 20.4112 21.3925 20.4492 21.2236L22.986 10.1874C23.0087 10.0879 23.0039 9.98402 22.9721 9.88702C22.9403 9.79002 22.8826 9.70351 22.8054 9.63676ZM19.471 20.9999L14.3035 16.4686L21.741 11.138L19.471 20.9999Z" fill="white"/></svg>'
        }
      ],
      currentYear: this.getCurrentYear(),
    }
  },
  methods: {
    getCurrentYear() {
      const dt = new Date();
      return dt.getFullYear();
    }
  },
};
</script>

<style scoped>
  .logo {
    width: 152px;
    height: 30px;
  }
</style>
