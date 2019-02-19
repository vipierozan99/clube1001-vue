<template>
  <div id="customCalendar">
    <v-card dark style="height:90%; width:90%;margin:auto; margin-top:30px">
      <v-card-title>
        <h1>{{viewedMonth}}</h1>
      </v-card-title>
    </v-card>
    <v-card dark style="height:90%; width:90%;margin:auto; margin-top:30px">
      <v-layout>
        <v-flex>
          <v-sheet height="500">
            <v-calendar ref="calendar" v-model="today" :value="today" color="primary">
              <template slot="day" slot-scope="{ date }">
                <template v-for="event in eventsMap[date]">
                  <v-menu :key="event.title" v-model="event.open" full-width offset-x>
                    <div
                      v-if="!event.time"
                      slot="activator"
                      v-ripple
                      class="my-event"
                      v-html="event.title"
                    ></div>
                    <v-card color="grey lighten-4" min-width="350px" flat>
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title v-html="event.title"></v-toolbar-title>
                        <v-spacer></v-spacer>
                      </v-toolbar>
                      <v-card-title primary-title>
                        <span v-html="event.details"></span>
                      </v-card-title>
                    </v-card>
                  </v-menu>
                </template>
              </template>
            </v-calendar>
          </v-sheet>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs6 class="text-sm-left text-xs-center">
          <v-btn @click="$refs.calendar.prev()">
            <v-icon dark left>keyboard_arrow_left</v-icon>Prev
          </v-btn>
        </v-flex>
        <v-flex xs6 class="text-sm-right text-xs-center">
          <v-btn @click="$refs.calendar.next()">Next
            <v-icon right dark>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
function firstToday() {
  var todayDate = new Date();

  return (
    todayDate.getFullYear() +
    "-" +
    (todayDate.getMonth() + 1) +
    "-" +
    todayDate.getDate()
  );
}

export default {
  name: "CustomCalendar",
  data: () => ({
    today: firstToday(),
    events: [
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2018-12-30",
        open: false
      },
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2018-12-31",
        open: false
      },
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2019-01-01",
        open: false
      },
      {
        title: "Meeting",
        details: "Spending time on how we do not have enough time",
        date: "2019-01-07",
        open: false
      },
      {
        title: "30th Birthday",
        details: "Celebrate responsibly",
        date: "2019-01-03",
        open: false
      },
      {
        title: "New Year",
        details: "Eat chocolate until you pass out",
        date: "2019-01-01",
        open: false
      },
      {
        title: "Conference",
        details: "Mute myself the whole time and wonder why I am on this call",
        date: "2019-01-21",
        open: false
      },
      {
        title: "Hackathon",
        details: "Code like there is no tommorrow",
        date: "2019-02-01",
        open: false
      }
    ]
  }),
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    },

    viewedMonth() {
      const allMonths = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];
      try {
        return allMonths[this.today.getMonth()];
      } catch {}
      try {
        var month = Number(this.today.split("-")[1]) - 1;
        return allMonths[month];
      } catch {}
      try {
        this.today = this.today.date;
        var month = Number(this.today.split("-")[1]) - 1;
        return allMonths[month];
      } catch {}
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>
