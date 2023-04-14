<template>
  <PtView class="ViewSliders">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>Sliders</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page “Sliders” goes here.</p>

      <PtSlider ref="slider" v-model:value="sliderIndex" autoplay loop>
        <PtSliderItem>
          <a href="javascript:void(0);"><img src="@/assets/img/slide01.jpg" /></a>
        </PtSliderItem>
        <PtSliderItem>
          <a href="javascript:void(0);"><img src="@/assets/img/slide02.jpg" /></a>
        </PtSliderItem>
        <PtSliderItem>
          <a href="javascript:void(0);"><img src="@/assets/img/slide03.jpg" /></a>
        </PtSliderItem>
        <PtSliderItem>
          <a href="javascript:void(0);"><img src="@/assets/img/slide04.jpg" /></a>
        </PtSliderItem>
        <PtSliderItem>
          <a href="javascript:void(0);"><img src="@/assets/img/slide05.jpg" /></a>
        </PtSliderItem>
        <PtSliderItem>
          <a href="javascript:void(0);"><img src="@/assets/img/slide06.jpg" /></a>
        </PtSliderItem>
        <PtSliderItem>
          <a href="javascript:void(0);"><img src="@/assets/img/slide07.jpg" /></a>
        </PtSliderItem>
      </PtSlider>

      <p>
        <a href="javascript:void(0);" @click="$refs.slider.slidePrev()">Prev</a>
        <input v-model.number="sliderIndex" type="number" step="1" min="0" max="6" style="width: 2em; text-align: center;">
        <a href="javascript:void(0);" @click="$refs.slider.slideNext()">Next</a>
      </p>
    </PtViewContent>
  </PtView>
</template>

<script>
export default {
  data () {
    return {
      sliderIndex: 0
    }
  }
}
</script>

<style lang="scss">
.ViewSliders {
  .PtSliderItem {
    a {
      display: block;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
