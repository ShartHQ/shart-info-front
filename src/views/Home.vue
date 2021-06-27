<template>
  <section>
    <v-row>
      <v-col cols="12">
        <section id="jalali-date" class="mb-10">
          <div class="d-flex align-center text-uppercase text--darken-3">
            <v-icon>mdi-calendar-blank-multiple</v-icon>
            <span class="ml-2 text-h5 ">jalali date</span>
          </div>
          <div dir="rtl" class="d-flex justify-space-between mt-6 mb-5 py-6 px-8 elevation-3 rounded persian-font">
            <span>{{ jalali.locale('fa').format('dddd | MMMM') }}</span>
            <span>{{ jalali.locale('fa').format('YYYY/MM/DD') }}</span>
          </div>
        </section>

        <section id="original-date">
          <div class="d-flex align-center text-uppercase text--darken-3">
            <v-icon>mdi-calendar-blank-multiple</v-icon>
            <span class="ml-2 text-h5 ">miladi date</span>
          </div>
          <div class="d-flex justify-space-between mt-6 mb-5 py-6 px-8 elevation-3 rounded text-h5">
            <span>{{ miladi.format('YYYY/MM/DD') }}</span>
            <span>{{ miladi.format('MMMM | dddd') }}</span>
          </div>
        </section>

      </v-col>
    </v-row>
  </section>
</template>

<script>
import moment from 'moment';
import jMoment from 'jalali-moment';

export default {
  name: 'Home',
  data() {
    return {
      fetchedDate: '',
    }
  },
  computed: {
    jalali() {
      return this.fetchedDate.length ? jMoment(this.fetchedDate) : jMoment();
    },
    miladi() {
      return this.fetchedDate.length ? moment(this.fetchedDate) : moment();
    }
  },
  created() {
    this.$store.dispatch('FETCH_ISO');
    this.fetchedDate = this.$store.state.iso;
  }
}
</script>

<style>
.persian-font {
  font-family: 'Vazir FD WOL', sans-serif !important;
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
}
</style>