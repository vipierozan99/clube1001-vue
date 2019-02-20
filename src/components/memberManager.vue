<template>
  <v-container id="memberManager">
    <v-card flat style="margin:auto; max-width:1200px">
      <v-layout row wrap>
        <v-flex md4 xs12 style="padding:10px">
          <v-card dark height="418px" style="padding:10px">
            <v-card-title>
              <h1>Adicione um sócio</h1>
            </v-card-title>
            <div style="height:60px"></div>
            <v-form ref="memberAddForm" @submit.prevent="addMember">
              <v-text-field
                v-model="memberName"
                label="Nome do sócio"
                :rules="requiredRule"
                required
              ></v-text-field>
              <div style="height:80px"></div>

              <div style="text-align:right; width:100%; padding:0; ">
                <v-btn color="success" style="height:40px;" type="submit">Adicionar</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-flex>
        <v-flex md8 xs12 style="padding:10px">
          <v-card dark height="418px" style="padding:10px">
            <v-card-title>
              <h1>Remova um sócio</h1>
            </v-card-title>
            <v-card height="330px" class="scroll-y">
              <v-list light dense>
                <v-template v-for="member in members" :key="member['.key']">
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <font size="5px">{{member.name}}</font>
                      </v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-btn
                        color="error"
                        style="height:35px;width:35px;"
                        icon
                        @click="deleteMember(member)"
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
</template>

<script>
import { Datab } from "../firebase";
import oldMembers from "@/assets/members";
export default {
  name: "memberManager",
  data() {
    return {
      memberName: null,
      requiredRule: [v => !!v || "This field is required"]
    };
  },
  firestore() {
    return {
      members: Datab.collection("members")
    };
  },
  methods: {
    addMember() {
      if (!this.$refs.memberAddForm.validate()) {
        return false;
      }
      Datab.collection("members").add({
        name: this.memberName
      });
    },
    deleteMember(member) {
      this.$firestore.members.doc(member[".key"]).delete();
    },
    addOldMembers() {
      for (var member in oldMembers) {
        Datab.collection("members").add({
          name: oldMembers[member]
        });
      }
    }
  }
};
</script>

<style>
</style>
