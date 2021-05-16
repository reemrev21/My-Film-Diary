<template>
  <div>
    <BoxOffice />
    <Popular />
    <TopRated />
    <Upcoming />
  </div>
</template>

<script>
import BoxOffice from '@/components/home/BoxOffice'
import Popular from '@/components/home/Popular'
import TopRated from '@/components/home/TopRated'
import Upcoming from '@/components/home/Upcoming'




export default {
  components : {
    BoxOffice,
    Popular,
    TopRated,
    Upcoming
  }
}
</script>