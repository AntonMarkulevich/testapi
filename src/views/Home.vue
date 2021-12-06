<template>
  <div class="home-objects">
    <object-list :objects="things" :types="types" />
    <description
      :types="types"
      :currentName="''"
      :currentType="''"
      :currentObject="{}"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import ObjectList from "@/components/ObjectList";
import Description from "@/components/Description";

const { mapGetters, mapActions } = createNamespacedHelpers("getData");

export default {
  name: "Home",
  components: {
    ObjectList,
    Description,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["things", "types"]),
  },
  methods: {
    ...mapActions(["getThings", "getTypes"]),
  },
  beforeMount() {
    this.getThings();
    this.getTypes();
  },
};
</script>

<style scoped>
.home-objects {
  display: flex;
}
</style>
