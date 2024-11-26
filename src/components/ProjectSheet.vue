<template>
  <div
    class="tw-pt-40 md:tw-pt-80 2xl:tw-pt-120 md:tw-max-w-[768px] lg:tw-max-w-[1200px] 2xl:tw-max-w-[1920px] tw-mx-auto">
    <section class="project-sheet md:tw-px-0">
      <article class="project-sheet__arc tw-mb-40 xl:tw-mb-0">
        <p class="project-sheet__index">01</p>
        <div>
          <h2 class="project-sheet__title">архитектура</h2>
          <div class="project-sheet__text">
            <AppLink class="tw-mb-20" external :to="{ name: 'location' }"
              >Расположение</AppLink
            >
            <p>{{ arc.text }}</p>
          </div>

          <div class="project-sheet__img">
            <img
              width="1440"
              height="720"
              class="tw-object-cover tw-object-center tw-w-full tw-h-full"
              src="@/assets/images/main/render-2.jpg"
              loading="lazy"
              alt="Архитектура" />
          </div>
        </div>
      </article>
      <article class="project-sheet__format tw-mb-40 xl:tw-mb-0">
        <p class="project-sheet__index">02</p>
        <div class="project-sheet__content">
          <h2 class="project-sheet__title">закрытый формат</h2>
          <div class="project-sheet__text">
            <p>{{ format.text }}</p>
          </div>

          <div class="project-sheet__img">
            <img
              width="1440"
              height="720"
              class="tw-object-cover tw-object-center tw-w-full tw-h-full"
              src="@/assets/images/about/format.jpg"
              loading="lazy"
              alt="Архитектура" />
          </div>
        </div>
      </article>

      <article class="project-sheet__commerce tw-mb-40 xl:tw-mb-0">
        <p class="project-sheet__index">03</p>
        <div>
          <h2 class="project-sheet__title">коммерция</h2>
          <div class="project-sheet__text">
            <p>{{ commerce.text }}</p>
          </div>

          <div class="project-sheet__img">
            <img
              width="1440"
              height="720"
              class="tw-object-cover tw-object-center tw-w-full tw-h-full"
              src="@/assets/images/about/commerce.jpg"
              loading="lazy"
              alt="Архитектура" />
          </div>
        </div>
      </article>

      <article class="project-sheet__flats tw-mb-40 xl:tw-mb-0">
        <p class="project-sheet__index">04</p>
        <div class="project-sheet__content">
          <h2 class="project-sheet__title">квартиры</h2>
          <div class="project-sheet__text">
            <p>{{ flats.text }}</p>
          </div>

          <div class="project-sheet__img">
            <img
              width="395"
              height="360"
              class="tw-object-cover tw-object-center tw-w-full tw-h-full"
              src="@/assets/images/about/flats.jpg"
              loading="lazy"
              alt="Архитектура" />
          </div>
        </div>
      </article>

      <article class="project-sheet__parking tw-mb-40 xl:tw-mb-0">
        <p class="project-sheet__index">05</p>
        <div>
          <h2 class="project-sheet__title">паркинг</h2>
          <div class="project-sheet__text">
            <p>{{ parking.text }}</p>
          </div>

          <div class="project-sheet__img">
            <img
              width="1440"
              height="720"
              class="tw-object-cover tw-object-center tw-w-full tw-h-full"
              src="@/assets/images/about/parking.jpg"
              loading="lazy"
              alt="Архитектура" />
          </div>
        </div>
      </article>
      <article class="project-sheet__eng">
        <div class="tw-px-16 tw-mb-20 md:tw-mb-40 md:tw-px-0">
          <h2 class="project-sheet__title">инженерия</h2>
        </div>
        <ul
          class="tw-px-16 tw-flex tw-flex-wrap -tw-ml-10 -tw-mt-30 md:tw-px-0 lg:-tw-ml-20 lg:-tw-mt-40 lg:tw-px-0">
          <li
            class="tw-w-1/2 tw-pl-10 tw-pt-30 md:tw-w-1/3 lg:tw-w-1/4 lg:tw-pl-20 lg:tw-pt-40 2xl:tw-pl-30"
            style="--color: #ff6b00"
            v-for="(item, i) in eng.items"
            :key="i">
            <span
              class="before:tw-mb-10 list-marker tw-flex tw-flex-wrap md:before:tw-shrink-0 md:tw-flex-nowrap">
              <span class="tw-basis-full md:tw-basis-auto">{{ item }}</span>
            </span>
          </li>
        </ul>
      </article>
      <div class="project-sheet__form md:tw-mb-[60px] lg:tw-mb-0">
        <FormCallBack
          class="cover lg:tw-max-w-[590px] lg:tw-ml-auto 2xl:tw-max-w-[905px] 2xl:tw-mr-0" />
      </div>
      <!-- <div class="project-sheet__form md:tw-mb-[60px] lg:tw-mb-0">
        <FormCallBack
          class="cover lg:tw-max-w-[590px] lg:tw-ml-auto 2xl:tw-max-w-[905px] 2xl:tw-mr-[-45px]" />
      </div> -->
    </section>
  </div>
</template>

<script>
import FormCallBack from "@/components/FormCallBack.vue";

export default {
  data() {
    return {
      arc: {
        text: "Современный жилой комплекс «Грани» находится в историческом центре Уфы, в тихом районе с готовой инфраструктурой. Уникальные архитектурные особенности выделяют комплекс в квартале улиц Гафури, Красина, Султанова и Чернышевского. Комплекс состоит из 5 зданий от 18 до 25 этажей. Доминанту «Грани» составляют 3 ромбовидных дома-близнеца. Стильные, современные и стремительные они задают настроение и создают особую атмосферу комплекса",
      },
      views: {
        text: "Увеличенные оконные проемы на верхних этажах домов открывают удивительную панораму лесного массива и реки Белой",
      },
      format: {
        text: "Комплекс закрыт для проезда автомобилей и доступа посторонних. Юные жители могут спокойно играть на детских площадках с безопасным покрытием, зонированных с учетом интересов самых разных возрастов. Внутри квартала расположены спортивные и прогулочные пространства с местами для уединенного отдыха.",
      },
      commerce: {
        text: "Первые этажи комплекса предназначены для коммерческих помещений, которые сделают инфраструктуру района еще богаче и насыщеннее за счет магазинов формата «у дома», помещений для кружков и секций, тренажерного зала и салонов сферы обслуживания",
      },
      parking: {
        text: "Для автомобилей жителей комплекса предусмотрены подземный и наземный паркинги. Проектируя подземный паркинг, мы предусмотрели его функциональность и безопасность: передовые инженерные системы, спуск в паркинг на лифте, система видеонаблюдения",
      },
      flats: {
        text: "В ассортименте планировок комплекса от студий до 4-комнатных с высотой потолка 2,7 м. Уникальные форматы: квартиры с окнами на 3 стороны света ",
      },
      eng: {
        items: getEng(),
      },
    };
  },
  components: {
    FormCallBack,
  },
};

function getEng() {
  return [
    "Технология строительства: «монолит-каркас» с заполнением стен керамическим кирпичом",
    "Наружная отделка стен: вентилируемый фасад с повышенными характеристиками теплосбережения, шумоизоляции и пожаробезопасности",
    "Отделка первых этажей: клинкерный кирпич",
    "Внутренние перегородки из гипсолита",
    "Звукоизоляция пола",
    "Окна увеличенные 1,75 м в высоту из ламинированного профиля, энергоэффективные, с улучшенной шумоизоляцией",
    "Стояки тепла, холодного и горячего водоснабжения и электроснабжения находятся вне квартир",
    "Потолки: 2,7 метра",
    "Отделка: черновая",
    "Разводка инженерных коммуникаций: лучевая по полу",
    "Система пожаротушения и дымоудаления",
    "Для кондиционеров предусмотрены корзины на фасаде",
  ];
}
</script>

<style lang="scss" scoped>
.project-sheet {
  @apply tw-grid;

  min-height: 100vh;
  @screen xl {
    padding: 0 40px;
    grid-template-columns: 85.25px 400px 40px 50px 115px 180px 250px;
  }
  @screen 2xl {
    padding: 0;
    grid-template-columns: 155px 660px 40px 80px 150px 295px 410px;
    padding-right: 90px;
    padding-left: 40px;
  }
}

@media screen and (max-width: 768px) {
  .project-sheet__arc,
  .project-sheet__format,
  .project-sheet__commerce,
  .project-sheet__flats,
  .project-sheet__parking {
    padding-inline: 16px;
  }
  .project-sheet__img {
    margin-inline: -16px;
    margin-top: 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .project-sheet__arc,
  .project-sheet__format,
  .project-sheet__commerce,
  .project-sheet__flats,
  .project-sheet__parking {
    padding-inline: 34px;
  }
  .project-sheet__img {
    margin-top: 20px;
  }
}

.project-sheet__arc {
  @screen xl {
    display: grid;
    grid-template-columns: 85.25px 1fr;
    grid-column: 1/ 4;
  }
  @screen 2xl {
    grid-template-columns: 155px 1fr;
  }
  .project-sheet__title {
    @screen xl {
      padding-bottom: 44px;
    }
    @screen 2xl {
      padding-bottom: 80px;
    }
  }
  .project-sheet__text {
    @screen xl {
      width: 350px;
      margin: 0 0 0 auto;
      margin-bottom: 40px;
    }
    @screen 2xl {
      width: 410px;
      margin: 0 0 0 auto;
      margin-bottom: 30px;
    }
  }
  img {
    @screen xl {
      height: 240px;
    }
    @screen 2xl {
      height: 360px;
    }
  }
}

.project-sheet__format {
  @screen xl {
    display: grid;
    grid-template-columns: 100px 180px 265px;
    grid-column: 5/ 8;
  }
  @screen 2xl {
    grid-template-columns: 150px 295px 410px;
  }
  .project-sheet__content {
    grid-column: 2 span / 2 span;
  }
  .project-sheet__title {
    @screen xl {
      padding-bottom: 44px;
    }
    @screen 2xl {
      padding-bottom: 80px;
    }
  }
  .project-sheet__text {
    @screen xl {
      width: 300px;
      margin: 0 0 0 auto;
      margin-bottom: 30px;
      margin-right: 31.35px;
    }
    @screen 2xl {
      width: 353px;
      margin: 0 0 0 auto;
      margin-bottom: 40px;
      margin-right: 57px;
    }
  }
  .project-sheet__img {
    @screen xl {
      height: 403.7px;
      margin-left: -100px;
    }
    @screen 2xl {
      height: 582px;
      margin-left: -150px;
    }
  }
}

.project-sheet__commerce {
  @screen xl {
    display: grid;
    grid-template-columns: 85.25px 1fr;
    grid-column: 1/ 4;
    margin-top: -35px;
  }
  @screen 2xl {
    grid-template-columns: 155px 1fr;
    margin-top: -70px;
  }
  .project-sheet__title {
    @screen xl {
      padding-bottom: 30px;
    }
    @screen 2xl {
      padding-bottom: 40px;
    }
  }
  .project-sheet__text {
    @screen xl {
      width: 300px;
      margin: 0 0 0 auto;
      margin-bottom: 30px;
    }
    @screen 2xl {
      width: 410px;
      margin-bottom: 40px;
    }
  }
  img {
    @screen xl {
      height: 240px;
    }
    @screen 2xl {
      height: 360px;
    }
  }
}

.project-sheet__flats {
  @screen xl {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 100px 162.25px 250px;
    grid-column: 5 / 8;
  }
  @screen 2xl {
    margin-top: 265px;
    grid-template-columns: 150px 295px 410px;
  }
  .project-sheet__content {
    grid-column: 2 span / 2 span;
  }
  .project-sheet__title {
    @screen xl {
      padding-bottom: 60px;
    }
    @screen 2xl {
      padding-bottom: 80px;
    }
  }
  .project-sheet__text {
    @screen xl {
      width: 246.15px;
      margin: 0 0 0 auto;
      margin-bottom: 50px;
    }
    @screen 2xl {
      width: 353px;
      margin-bottom: 64px;
    }
  }
  .project-sheet__img {
    @screen xl {
      width: 217.25px;
      height: 198px;
      margin-left: -150px;
    }
    @screen 2xl {
      width: 395px;
      height: 360px;
      margin-left: -230px;
    }
  }
}

.project-sheet__parking {
  @screen xl {
    margin-top: -45px;
    display: grid;
    grid-template-columns: 85.25px 1fr;
    grid-column: 1/ 4;
  }
  @screen 2xl {
    margin-top: -220px;
    grid-template-columns: 155px 1fr;
  }
  .project-sheet__title {
    @screen xl {
      padding-bottom: 44px;
    }
    @screen 2xl {
      padding-bottom: 80px;
    }
  }
  .project-sheet__text {
    @screen xl {
      width: 320px;
      margin: 0 0 0 auto;
      margin-bottom: 30px;
    }
    @screen 2xl {
      width: 410px;
      margin-bottom: 40px;
    }
  }
  img {
    @screen xl {
      height: 240px;
    }
    @screen 2xl {
      height: 360px;
    }
  }
}

.project-sheet__eng {
  @apply lg:tw-mt-40 tw-mb-40 md:tw-mb-60 2xl:tw-max-w-[1272px];
  @screen xl {
    grid-column: 8 span / 8 span;
  }
}
.project-sheet__index {
  @apply tw-text-md lg:tw-text-md 2xl:tw-text-lg tw-leading-100 tw-text-orange tw-w-full md:tw-w-auto tw-mb-10;
}

.project-sheet__form {
  @screen xl {
    grid-column: 8 span / 8 span;
  }
}
.project-sheet__title {
  @apply tw-text-lg;
  font-weight: 800;
  margin-bottom: 20px;
  @screen 2xl {
    font-size: 72px;
    line-height: 100%;
    letter-spacing: -0.02em;
  }
}
</style>
