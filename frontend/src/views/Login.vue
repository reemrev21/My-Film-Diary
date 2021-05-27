<template>
  <div>
    <header>
  <!-- Hacker News header -->
</header>

<div v-for="(item, $index) in list" :key="$index">
  {{ item }}
</div>

<infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading'

const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

export default {
  data() {
    return {
      page: 1,
      list: [],
    };
  },

  components: {
    InfiniteLoading
  },
  
  methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.hits.length) {
          // console.log(data.hits)
          // console.log(data.hits.length) // 20
          this.page += 1;
          this.list.push(...data.hits);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
};
</script>