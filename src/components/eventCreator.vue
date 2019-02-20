<template>
  <div id="eventCreator" style="margin-bottom:30px">
    <v-container>
      <v-card flat style="margin:auto; max-width:1200px">
        <v-layout row wrap>
          <v-flex md3 xs12 style="padding:10px">
            <div style="text-align:center;;margin:auto; margin-bottom:30px">
              <v-date-picker dark header-color="primary" v-model="eventDate" :reactive="true"></v-date-picker>
            </div>
          </v-flex>
          <v-flex md3 xs12 style="padding:10px">
            <v-card dark height="418px" style="padding:10px">
              <v-card-title>
                <h1>Crie um evento</h1>
              </v-card-title>
              <v-form ref="eventCreateForm" @submit.prevent="createEvent">
                <v-text-field
                  v-model="eventTitle"
                  label="Título do evento"
                  :rules="requiredRule"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="eventDesc"
                  label="Descrcrição"
                  :rules="requiredRule"
                  required
                ></v-text-field>
                <v-text-field v-model="eventDate" label="Data" readonly></v-text-field>

                <div style="text-align:right; width:100%; padding:0; ">
                  <v-btn color="success" style="height:40px;" type="submit">Criar</v-btn>
                </div>
              </v-form>
            </v-card>
          </v-flex>
          <v-flex md6 xs12 style="padding:10px">
            <v-card dark height="418px" style="padding:10px">
              <v-card-title>
                <h1>Remova um evento</h1>
              </v-card-title>
              <v-card height="330px" class="scroll-y">
                <v-list light dense>
                  <v-template v-for="event in events" :key="event['.key']">
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          <font size="5px">{{event.title}}</font>
                        </v-list-tile-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn
                          color="error"
                          style="height:35px;width:35px;"
                          icon
                          @click="deleteEvent(event)"
                        >
                          <v-icon>close</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                    <v-divider width="97%" style="margin:auto"></v-divider>
                  </v-template>
                </v-list>
              </v-card>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { Datab } from "../firebase";
export default {
  name: "eventCreator",
  data() {
    return {
      requiredRule: [v => !!v || "This field is required"],
      eventTitle: null,
      eventDesc: null,
      eventDate: new Date().toISOString().substr(0, 10)
    };
  },
  firestore() {
    return {
      events: Datab.collection("events")
    };
  },
  methods: {
    createEvent() {
      if (!this.$refs.eventCreateForm.validate()) {
        return false;
      }
      Datab.collection("events").add({
        title: this.eventTitle,
        details: this.eventDesc,
        date: this.eventDate,
        open: false
      });
    },
    deleteEvent(event) {
      this.$firestore.events.doc(event[".key"]).delete();
      //event.ref();
    }
  },
  computed: {
    binding() {
      const binding = {};

      if (!this.$vuetify.breakpoint.mdAndUp) {
        binding.column = true;
        binding.style = "width:100%";
      }

      return binding;
    }
  }
};
</script>




<style>
</style>




