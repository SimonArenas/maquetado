<template>
  <v-row no-gutters align="center">
    <v-col cols="12" class="no-space">
      <v-switch
        v-model="switchContact"
        label="switch 1"
        class="no-space"
        value="1"
      ></v-switch>
      <v-switch
        v-model="switchContact"
        label="switch 2"
        class="no-space"
        value="2"
      ></v-switch>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      switchContact: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
