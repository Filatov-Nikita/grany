<template>
  <app-page>
    <SwiperGallery v-if="gallery" :sources="images" />
  </app-page>
</template>

<script>
import SwiperGallery from "@/components/SwiperGallery.vue";

export default {
  created() {
    return this.getGallery();
  },
  data() {
    return {
      gallery: null,
    };
  },
  methods: {
    async getGallery() {
      this.gallery = await this.$store.dispatch("galleries/galleriesOne", {
        id: 1,
      });
    },
  },
  computed: {
    images() {
      const servGallery = this.gallery?.images?.map((image) => image.url) || [];
      const locGallery = [
        "/gallery-new/1.jpg",
        "/gallery-new/2.jpg",
        "/gallery-new/3.jpg",
        "/gallery-new/4.jpg",
        "/gallery-new/5.jpg",
        "/gallery-new/6.jpg",
        "/gallery-new/7.jpg",
        "/gallery-new/8.jpg",
        "/gallery-new/9.jpg",
        "/gallery-new/10.jpg",
      ];
      console.log(locGallery);

      return [...servGallery, ...locGallery];
    },
  },
  components: {
    SwiperGallery,
  },
};
</script>
