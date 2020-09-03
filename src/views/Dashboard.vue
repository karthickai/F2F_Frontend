<template>
  <div>
    <h6 class="px-10 pt-6 font-weight-light display-1 basil--text">
      Welcome
      <span class="font-weight-regular accent--text">Karthick</span>... Your Safe Movie Ai Assistant
    </h6>
    <div class="px-10 mt-15">
      <v-row>
        <v-col cols="7">
          <video-list></video-list>
          <v-row>
            <v-col>
              <div class="px-0 pt-0 font-weight-regular text-h6">Total: 10hrs Used: 2hrs</div>
            </v-col>
            <v-col>
              <v-progress-linear class="mx-0 mt-2 mb-6" v-model="skill" color="success" height="25">
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5">
          <v-row align="center" justify="center">
            <v-img
              src="@/assets/video.png"
              aspect-ratio="1"
              class="primary mt-16"
              max-width="600"
              max-height="350"
            ></v-img>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import VideoList from '@/components/VideoList.vue'
export default {
  components: {
    VideoList
  },
  data() {
    return {
      skill: 20
    }
  }
}
</script>

<style lang="scss" scoped></style>
