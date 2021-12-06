<template>
  <div class="description">
    <label>Name</label>
    <input class="input" type="text" v-model="objectName" />
    <label>Type</label>
    <select class="select" v-model="typeName">
      <option v-for="type in types" :key="type.id">
        {{ type.name }}
      </option>
    </select>
    <button class="save" @click="saveData">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: this.currentName,
      newType: { name: this.currentType.name, id: this.currentType.id },
      newObject: this.currentObject,
    };
  },
  computed: {
    typeName: {
      get() {
        return this.currentType.name;
      },
      set(newValue) {
        this.newType.name = newValue;
        this.newType.id = this.types.find((item) => item.name === newValue).id;
      },
    },
    objectName: {
      get() {
        return this.currentName;
      },
      set(newValue) {
        this.newName = newValue;
      },
    },
  },
  props: {
    types: {
      type: Array,
      required: true,
    },
    currentObject: {
      type: Object,
      required: true,
    },
    currentType: {
      type: Object,
    },
    currentName: {
      type: String,
    },
  },
  methods: {
    saveData() {
      this.$emit("save", this.newName, this.newType.id);
    },
  },
};
</script>

<style>
.description {
  text-align: left;
}
.save {
  height: 2.2em;
  width: 4em;
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
