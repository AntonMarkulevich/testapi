<template>
  <div class="parrent">
    <object-list :objects="things" :types="types" />
    <description
      :types="types"
      :currentName="currentName"
      :currentType="currentType"
      :currentObject="currentObject"
      @save="saveData"
    />
  </div>
</template>

<script>
import ObjectList from "@/components/ObjectList";
import { createNamespacedHelpers } from "vuex";
import Description from "@/components/Description";

const { mapGetters, mapActions } = createNamespacedHelpers("getData");

export default {
  components: {
    ObjectList,
    Description,
  },

  computed: {
    ...mapGetters(["things", "types"]),
    currentObject() {
      return this.things.find((thing) => thing.id == this.$route.params.id);
    },
    currentName() {
      return this.$route.params.id
        ? this.things.find((thing) => thing.id == this.$route.params.id).name
        : "";
    },
    currentTypeId() {
      return this.things.find((thing) => thing.id == this.$route.params.id)
        .typeId;
    },
    currentType() {
      return this.$route.params.id
        ? this.types.find((item) => item.id == this.currentTypeId)
        : this.types[0];
    },
  },
  methods: {
    ...mapActions(["updateThing", "getThings"]),
    async saveData(name, typeId) {
      await this.updateThing({
        id: this.$route.params.id,
        name: name,
        typeId: typeId,
      });
      this.getThings();
    },
  },
};
</script>

<style>
.select {
  height: 20px;
}
.input {
  height: 20px;
}
.parrent {
  display: flex;
}
.description {
  display: grid;
  height: 8em;
}
</style>
