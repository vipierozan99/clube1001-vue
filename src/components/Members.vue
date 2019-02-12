<template>
  <div class="members">
    <b-jumbotron>
      <template slot="header">Sócios</template>
      <hr class="my-4">
      <div class="row">
        <div class="column">
          <b-list-group>
            <b-list-group-item
              class="singleMember"
              v-for="(member, num) in members1"
              :key="num"
              style="overflow:auto;"
            >{{member}}</b-list-group-item>
          </b-list-group>
        </div>
        <div class="column">
          <b-list-group>
            <b-list-group-item
              class="singleMember"
              v-for="(member, num) in members2"
              :key="num"
              style="overflow:auto;"
            >{{member}}</b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import members from "@/assets/members";
export default {
  data() {
    return {
      members1: members[0],
      members2: members[1]
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
