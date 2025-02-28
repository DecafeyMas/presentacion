<template>
  <div>
    <v-app-bar
      v-scroll="onScroll"
      :color="!isScrolling ? 'transparent' : 'secondary'"
      fixed
      flat
    >
    <v-slide-y-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/Logo1.png')"
        class="shrink"
        contain
        max-height="35"
      />
    </v-slide-y-transition>
    <v-slide-y-transition>
        <tr
          v-if="showLogo"
          id="formatoLogo"
          class="primary--text hidden-sm-and-down"
        >
          Cafe<b id="formatoand" class="font-weight-thin ml-1 mr-1 font-italic">&</b>Tech
        </tr>
      </v-slide-y-transition>
      <v-spacer />
      <v-slide-y-transition>
        <tr
          v-if="showLogo"
          id="formatoSlogan"
          class="primary--text hidden-sm-and-down"
        >
        Aplicaciones Tecnológicas para Negocios
        </tr>
      </v-slide-y-transition>   
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu v-if="showLogo" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn   
              id="formatoApp"
              class="ml-3 white--text floating-sm-left font-weight-thin"
              medium
              rounded
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              Aplicaciones Web
              <icon class="mdi mdi-apps"></icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="openURL(item.url)" 
              class="list">
              <v-list-item-avatar>
                <v-icon
                  :class="item.color"
                  dark
                  v-text="item.icon"
                ></v-icon>
              </v-list-item-avatar>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar> 
  </div>
</template>

<script>
  export default {
    name: 'AppBar',
    data(){
      return {
        showLogo: false,
        isScrolling: false,
        value: 1,
        active: true,
        items:[
          { 
            name:'Chejampi Biomedical', 
            url:'https://chejampi.com/', 
            icon: 'mdi mdi-clipboard-text',
            color: 'blue'
          },
          { 
            name: 'El Gran Chef', 
            url:'http://komedor.elgranchef.com.pe/', 
            icon: 'mdi mdi-clipboard-text',
            color: 'light-green accent-4'
          },
          { 
            name: 'Páginaweb&App', 
            url:'http://proyectoweb.chejampi.com/', 
            icon: 'mdi mdi-clipboard-text',
            color: 'blue-grey darken-1'
          },
          { 
            name: 'Páginaweb Mejorada', 
            url:'http://paginaweb.chejampi.com/', 
            icon: 'mdi mdi-clipboard-text',
            color: 'primary'
          }
        ]
      }
    },
    methods: {
      onScroll () {
        const offset = window.scrollY
        this.isScrolling = offset > 50
        this.showLogo = offset > 50
      },
      openURL(url) {
        window.open(url, "_blank");
      }
    }
  }
</script>
<style scoped>
  #formatoand  {
      font-family:Helvetica;
      font-size: 1.5rem;
  }
  #formatoLogo {
      font-family: 'Mina', sans-serif;
      font-size: 1.8rem;
      margin-left: -3.7em;
      margin-top: 1%;
  }
  #formatoSlogan  {
      font-family: 'Mina', sans-serif;
      font-size: 1.2rem;
  }
  #formatoApp {
      font-family: 'Mina', sans-serif;
      font-size: 1rem;
  }
  .list{
    transition:background-color color 0.3s ease;
  }
  .list:hover{
    background-color: #122A3B;
    color: white !important;
  }

</style>