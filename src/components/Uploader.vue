<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="8">
            <file-drop v-on:files-selected="logFiles"></file-drop>
          </v-col>
          <v-col
            cols="12"
            :key="file.name"
            v-for="(file, index) in fileList"
            class="text-center"
            >{{ index + 1 }}: {{ file.name }}</v-col
          >
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FileDrop from '@/components/FileDrop.vue'
export default {
  components: {
    FileDrop
  },
  data() {
    return {
      fileList: null
    }
  },
  methods: {
    logFiles(fileList) {
      for (const item of fileList) {
        this.fileList = fileList
        console.log(item.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
