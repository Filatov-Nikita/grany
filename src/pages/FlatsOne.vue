<template>
  <app-page class="page-pb">
    <div class="wrapper xl:tw-p-0">
      <section v-if="flat" class="content">
        <div class="first tw-mb-20 md:tw-text-right xl:tw-text-left">
          <a
            class="button-back"
            href="javascript:void(0)"
            @click.prevent="$router.back()">
            Вернуться назад
          </a>
        </div>

        <div
          class="tw-flex tw-flex-wrap tw-mb-20 second xl:tw-mb-30 2xl:tw-mb-80">
          <div
            class="tw-font-extrabold tw-text-lg tw-mr-20 xl:tw-text-xl 2xl:tw-text-xl10">
            №{{ flat.number }}
          </div>
          <div
            class="tw-font-extrabold tw-text-lg tw-text-orange 2xl:tw-text-xl">
            {{ flat.total_area }} <span>м<sup>2</sup></span>
          </div>
          <p class="tw-w-full">
            {{ flat.house_name }} литер • {{ flat.storey_number }} этаж •
            {{ flat.rooms_number }} комнаты
          </p>
        </div>

        <div
          class="tw-relative tw-mb-40 tw-min-h-[500px] -tw-mx-16 md:tw-mx-0 third xl:tw-pl-30 xl:tw-min-h-0 xl:tw-border-l xl:tw-border-dark xl:-tw-mt-30 xl:-tw-mb-40 xl:tw-py-30 tw-content-center tw-bg-white">
          <!-- <iframe width="100%" height="100%" :src="flat.video_clip" allowfullscreen /> -->
          <div class="tw-flex tw-gap-2 tw-absolute tw-top-20 tw-right-40">
            <button
              @click="tab = 1"
              class="tw-bg-dark hover:tw-bg-secondary tw-text-base tw-p-6 tw-rounded-md"
              :class="{ 'tw-bg-secondary': tab === 1 }">
              С мебелью
            </button>
            <button
              @click="tab = 2"
              class="tw-bg-dark hover:tw-bg-secondary tw-text-base tw-p-6 tw-rounded-md"
              :class="{ 'tw-bg-secondary': tab === 2 }">
              Без мебели
            </button>
          </div>
          <div class="tw-p-40 tw-flex tw-justify-center" v-show="tab === 1">
            <img :src="flat.images[2]" alt="" />
          </div>
          <div class="tw-p-40 tw-flex tw-justify-center" v-show="tab === 2">
            <img :src="flat.images[0]" alt="" />
          </div>
          <!-- <img :src="flat.images[2]" alt=""/> -->
        </div>

        <div class="forth">
          <p
            class="tw-text-lg tw-font-extrabold tw-text-secondary tw-mb-20 xl:tw-text-md xl:tw-font-normal xl:tw-mb-10 2xl:tw-font-extrabold">
            особенности
          </p>
          <div class="tw-relative">
            <div
              class="tw-flex tw-flex-wrap -tw-ml-20 -tw-mt-10 tw-mb-30 md:tw-max-w-[300px] md:tw-mr-20 xl:tw-max-full">
              <p
                class="tw-w-1/2 tw-pl-20 tw-pt-10 tw-leading-100 xl:tw-w-full xl:tw-pt-8"
                v-for="(value, key) in $store.getters['flats/featuresHas'](
                  flat
                )"
                :key="key">
                {{ value }}
              </p>
            </div>
            <div class="tw-mb-40 md:tw-mb-30">
              <AppButton class="tw-w-full" @click="showedBook = true">
                Заявка на бронь
              </AppButton>
            </div>
            <div
              class="tw-space-y-20 md:tw-flex md:tw-justify-center md:tw-space-x-60 md:tw-space-y-0 md:tw-mb-30 xl:tw-mb-0 xl:tw-flex-wrap xl:tw-space-x-0 xl:tw-justify-start xl:tw-space-y-8 2xl:tw-space-y-20">
              <div>
                <button class="control" @click="createPDF">
                  <AppIcon
                    class="tw-mr-20 xl:tw-hidden 2xl:tw-block"
                    size="24px"
                    name="pdf"
                    fill="white" />
                  <span class="control__text">Скачать pdf</span>
                </button>
              </div>
              <!-- <div>
                <button class="control" v-if="hasView" @click="showView">
                  <AppIcon class="tw-mr-20 xl:tw-hidden 2xl:tw-block" size="24px" name="flat-adv-vid" fill="white"/>
                  <span class="control__text">Посмотреть виды из окон</span>
                </button>
              </div> -->
            </div>
            <div
              class="tw-flex tw-flex-wrap tw-mt-15 -tw-ml-30 md:tw-w-[300px] md:tw-absolute md:tw-top-[-30px] md:tw-right-[0] xl:tw-static xl:tw-w-auto xl:tw-top-auto xl:tw-right-auto">
              <div class="tw-w-[94px] tw-pl-30 tw-pt-15">
                <img
                  width="370"
                  height="350"
                  src="@/assets/images/compas.png"
                  alt="компас" />
              </div>
              <div
                v-if="hasPlace"
                class="tw-pl-30 tw-pt-15 tw-grow tw-basis-[192px]">
                <img
                  width="192"
                  height="60"
                  :src="images.plan"
                  alt="срез этажа" />
              </div>
            </div>
          </div>
        </div>

        <teleport to="body">
          <DialogBook v-model:showed="showedBook" :flatNumber="flat.number" />
        </teleport>
      </section>

      <div v-if="$store.getters['loaders/is']('loading flat')">
        <Spinner size="100px" />
      </div>

      <GDialog
        v-model="showedView"
        background="transparent"
        content-class="tw-h-screen tw-flex tw-items-center tw-justify-center tw-relative">
        <template #default="{ onClose }">
          <button class="tw-absolute tw-right-30 tw-top-0" @click="onClose">
            <AppIcon name="close" size="36px" fill="white" />
          </button>
          <div
            class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 -tw-z-10">
            <Spinner size="100px" />
          </div>
          <img
            v-if="hasView"
            class="tw-w-auto tw-max-h-full"
            :src="images.view"
            alt="вид из окна" />
        </template>
      </GDialog>
    </div>
  </app-page>
</template>

<script>
import DialogBook from "@/components/DialogBook.vue";
import { GDialog } from "gitart-vue-dialog";
export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  created() {
    this.getFlat();
  },
  data() {
    return {
      flat: null,
      showedBook: false,
      showedView: false,
      tab: 1,
    };
  },
  methods: {
    async getFlat() {
      this.$store.dispatch("loaders/start", "loading flat");
      this.flat = await this.$store.dispatch("flats/flatsOne", { id: this.id });
      this.$store.dispatch("loaders/end", "loading flat");
    },
    showView() {
      this.showedView = true;
    },
    async createPDF() {
      const path = await this.$store.dispatch("flats/createPDF", {
        pdf_info_rooms_count: this.flat.rooms_number,
        pdf_info_kv_num: this.flat.number,
        pdf_info_kv_etazh: this.flat.storey_number,
        pdf_info_kompleks: this.flat.house_name,
        pdf_info_kv_sq: this.flat.total_area,
        pdf_info_image: this.images.plan,
        pdf_info_storey_plan_image: this.images.place,
      });

      this.downloadPDF(path);
    },
    downloadPDF(path) {
      window.location.href = path;
    },
  },
  computed: {
    images() {
      const list = { plan: null, view: null, place: null };

      if (!(this.flat?.images && Array.isArray(this.flat?.images))) return list;

      // this.flat.images.forEach(src => {
      //   if(src.indexOf('/plans/') !== -1) list.plan = src;
      //   else if(src.indexOf('/windows_view/') !== -1) list.view = src;
      //   else if(src.indexOf('storey_places')) list.place = src;
      // });
      list.plan = this.flat.images[1];
      list.view = this.flat.images[2];
      list.place = this.flat.images[0];

      return list;
    },
    hasView() {
      return this.images.view !== null;
    },
    hasPlace() {
      return this.images.place !== null;
    },
  },
  components: {
    DialogBook,
    GDialog,
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto;
}

.control {
  @apply tw-flex tw-items-center;
}

.control__text {
  @apply tw-leading-100 tw-underline;
}

@screen md {
  .first {
    grid-row: 1 / 2;
  }

  .second {
    grid-row: 2 / 3;
  }

  .forth {
    grid-row: 3 / 4;
  }
}

@screen xl {
  .content {
    grid-template-columns: 210px 1fr;
    grid-template-rows: auto auto auto 1fr;
    min-height: calc(100vh - 252px);
    column-gap: 30px;
  }

  .first,
  .second,
  .forth {
    grid-column: 1 / 2;
    grid-row: auto;
  }

  .third {
    grid-column: 2 / 3;
    grid-row: 1 / 5;
  }
}

@screen 2xl {
  .content {
    grid-template-columns: 150px 278px 1fr;
  }

  .first {
    grid-column: 1 / 2;
  }

  .second,
  .forth {
    grid-column: 2 / 3;
  }

  .third {
    grid-column: 3 / 4;
  }
}

.gallery-swiper {
  width: 100%;
  height: 100%;
}

.swiper-next,
.swiper-prev {
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  background: #081924;
  border-radius: 50%;
}

.swiper-prev {
  left: 16px;
}

.swiper-next {
  right: 16px;
  transform: translateY(-50%) rotate(180deg);
}

@screen lg {
  .swiper-next,
  .swiper-prev {
    width: 48px;
    height: 48px;
  }

  .swiper-prev {
    left: 40px;
  }

  .swiper-next {
    right: 40px;
    transform: translateY(-50%) rotate(180deg);
  }
}
</style>
