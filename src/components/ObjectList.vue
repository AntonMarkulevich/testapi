<template>
  <div class="objects">
    <div class="row" v-for="(object, idx) in objects" :key="object.id">
      <div
        @click="onRowClick(object.id)"
        :class="{ active: idx + 1 == isActive }"
      >
        <span class="object-name">
          {{ object.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: null,
    };
  },
  props: {
    objects: {
      type: Array,
      required: true,
    },
    types: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRowClick(id) {
      this.$router.push(`/${id}`);
      this.isActive = id;
    },
  },
};
</script>

<style>
.objects {
  text-align: left;
  color: #007bff;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}
.row {
  margin: 3px;
}
.active {
  background: lightgrey;
}
.object-name {
  cursor: pointer;
}
</style>
