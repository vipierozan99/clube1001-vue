<template>
  <div class="members">
    <v-card>
      <v-card-title>
        <h1>Sócios</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="(member, num) in members" :key="num" xs6 sm4>
              <div class="subheading">{{member}}</div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import members from "@/assets/members";
export default {
  data() {
    return {
      members: members
    };
  }
};
</script>

<style>
.members {
  max-width: 1200px;
  margin: auto;
}
.singleMember {
  max-width: 800px;
}
.column {
  float: left;
  width: 50%;
}
.list-group-item {
  padding: 0.25rem 0.75rem !important;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.list-group {
  margin: auto;
}
</style>



