<template>
  <v-app>
    <v-container>
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-4">
          <h6 class="font-weight-semibold display-1 basil--text">
            Upload Video
          </h6>
        </v-card-title>

        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="blue lighten-5"
          grow
        >
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card
              height="220"
              color="basil"
              flat
              v-if="item === 'Drag\'n Drop'"
            >
              <v-sheet
                id="dropzone"
                ref="dzone"
                tabindex="0"
                title="Click to grap a file from your PC!"
                color="gray lighten-6"
                width="100%"
                height="95%"
                class="pa-2"
                @dragenter="dragover = true"
                @dragover="dragover = true"
                @dragleave="dragover = false"
                @drop="dropEvent"
                @click="$refs.upload.click()"
                @keypress.enter="$refs.upload.click()"
              >
                <v-row justify="center" class="mx-5 mt-5 mb-3">
                  <v-icon v-if="!dragover" color="accent" size="85"
                    >mdi-cloud-upload-outline
                  </v-icon>
                  <v-icon v-if="dragover" color="accent" size="85"
                    >mdi-book-plus
                  </v-icon>
                </v-row>
                <v-row justify="center" class="mx-5 mb-6 ">
                  <span class="title grey--text text--darken-2"
                    >Drag'n drop or click to upload file!</span
                  >
                </v-row>
              </v-sheet>
            </v-card>
            <v-card v-else>
              <v-sheet
                color="gray lighten-6"
                width="100%"
                height="220"
                class="pa-2"
              >
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="URL"
                          clearable
                          prepend-icon="mdi-link"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-sheet>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>

    <input
      ref="upload"
      id="fileUpload"
      type="file"
      :multiple="multiple"
      @change="changeEvent"
      :accept="accept"
      style=""
    />
  </v-app>
</template>

<script>
export default {
  // internal properties

  data() {
    return {
      accept: '',
      multiple: false,
      dragover: false,
      tab: null,
      items: ["Drag'n Drop", 'URL'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },

  methods: {
    changeEvent(e) {
      const target = e.target
      if (target.files) {
        this.filesSelected(target.files)
      }
    },
    dropEvent(dragevent) {
      if (dragevent.dataTransfer) {
        this.filesSelected(dragevent.dataTransfer.files)
      }
    },
    filesSelected(files) {
      this.$emit('files-selected', files)
      this.dragover = false
      return files
    }
  }
}
</script>
<style scoped>
#dropzone {
  cursor: pointer;
}
#fileUpload {
  display: none;
}
.basil {
  background-color: #2196f3 !important;
}
.basil--text {
  color: #ffffffdc !important;
}
</style>
