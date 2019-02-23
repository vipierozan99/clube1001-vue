<template>
  <div class="us">
    <members/>
    <db-tabs/>
  </div>
</template>

<script>
import DbTabs from "@/components/DbTabs";
import Members from "@/components/Members";

export default {
  name: "us",
  components: {
    DbTabs,
    Members
  }
};
</script>

<style>
</style>
