<template>
  <button v-if="label" class="attachment-preview" @click="downloadFile">
    <img src="~/assets/img/atta.svg" alt="Attachment" class="ap__icon">
    <span class="ap__label">{{ name | truncate }}</span>

  </button>
  <article v-else class="attachment-preview">
    <span class="ap__label">{{ name | truncate }}</span>
    <button
      v-if="file"
      class="ap__button button__close"
      type="button"
      @click="$emit('delete', file)"
    >
      X
    </button>
  </article>
</template>

<script>
import { FETCH_FILE } from '@/store/user/consts';

export default {
  name: 'index',
  props: {
    label: {
      type: String,
      default: '',
    },
    file: {
      default: null,
    },
  },
  data() {
    return {
      name: this.label,
    };
  },
  created() {
    if (this.file) {
      this.loadFileName();
    }
  },
  filters: {
    truncate(value) {
      if (value.length > 10) {
        return `${value.slice(0, 3)}...${value.slice(-5)}`;
      }
      return value;
    },
  },

  methods: {
    loadFileName() {
      const reader = new FileReader();
      reader.fileName = this.file.name;
      reader.onload = (e) => {
        this.name = e.target.fileName;
      };
      reader.readAsText(this.file);
    },
    async downloadFile() {
      try {
        const resp = await this.$store.dispatch(`user/${FETCH_FILE}`, this.label);
        const url = window.URL.createObjectURL(new Blob([resp]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', this.label); // or any other extension
        document.body.appendChild(link);
        link.click();
      } catch (e) {
        console.dir(e);
      }
    }
    ,
  }
  ,
};
</script>

<style lang="scss" scoped>
.attachment-preview {
  font-size: 14px;
  padding: 15px;
  margin-right: 10px;
}

button.attachment-preview {
  @include btn-teal;
}
</style>
