<template>
  <div>
    <p class="tw-text-white tw-mb-6">Сколько будет {{ n1 }} * {{ n2 }}?</p>
    <AppInput
      class="tw-w-full"
      :rules="`required|secret:${n1},${n2}`"
      name="protector"
      label="Ваш ответ"
      :validateOnValueUpdate="false"
    />
  </div>

</template>

<script>
  export default {
    created() {
      this.n1 = this.getRandom();
      this.n2 = this.getRandom();
    },
    data() {
      return {
        n1: 0,
        n2: 0,
      };
    },
    methods: {
      getRandom() {
        return Math.floor(Math.random() * 10 + 1);
      },
    }
  }
</script>
