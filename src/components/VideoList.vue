<template>
  <v-data-table :headers="headers" :items="videos" sort-by="date" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="font-weight-light text-h5">Your Videos</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">Upload</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.title" label="Movie title"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.date" label="Date"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.size" label="Size"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.level" label="Level"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.action" label="Action"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Title',
        align: 'start',
        sortable: false,
        value: 'title'
      },
      { text: 'Uploaded Date', value: 'date' },
      { text: 'Size', value: 'size' },
      { text: 'Threshold Level', value: 'level' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    videos: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      date: 0,
      size: 0,
      level: 0,
      action: 0
    },
    defaultItem: {
      title: '',
      date: 0,
      size: 0,
      level: 0,
      action: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.videos = [
        {
          title: 'The_Pursuit_of_Happyness.mp4',
          date: '01/09/2020',
          size: '1.2GB',
          level: 'HIGH'
        },
        {
          title: "It's_a_Wonderful_Life.mp4",
          date: '02/09/2020',
          size: '0.7GB',
          level: 'MEDIUM'
        },
        {
          title: 'Cinderella_Man.mp4',
          date: '03/09/2020',
          size: '2.2GB',
          level: 'LOW'
        },
        {
          title: 'Star_Wars_V.mp4',
          date: '04/09/2020',
          size: '3.2GB',
          level: 'MEDIUM'
        },
        {
          title: 'Jack_the_Giant_Slayer.mp4',
          date: '05/09/2020',
          size: '5.0GB',
          level: 'HIGH'
        },
        {
          title: 'Seven_Samurai.mp4',
          date: '06/09/2020',
          size: '6.0GB',
          level: 'MEDIUM'
        }
      ]
    },

    editItem(item) {
      this.editedIndex = this.videos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.videos.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.videos.splice(index, 1)
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.videos[this.editedIndex], this.editedItem)
      } else {
        this.videos.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>