<template>
  <section
    class="overflow-hidden"
    style="background-color: rgba(255, 255, 255, 0.8);"
  >
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" cols="12" md="6">
        <v-img 
          :src="require('@/assets/ti.jpg')" 
          height="100%"
          cover
        />
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
        <div class="text-center mx-auto">
          <v-img
            contain
            :src="require('@/assets/Logo1.png')"
            class="hidden-sm-and-down mt-6"
            max-height="45"
            width="100%"
          />
          <p id="formatoLogo" class="font-weight-thin">
            Decafe<b id="formatoand" class="font-weight-thin ml-1 mr-1 font-italic">&</b>Tech
          </p>
          <p id="formatoSlogan" class="accent--text font-weight-thin">
            Technology Applications for Business
          </p>
          <hr>
        </div>
        <v-row>
          <v-col cols="12" md="12" class="d-flex flex-column" style="position: relative;">
            <BaseHeading class="mt-10 text-center">
              Bienvenidos!
            </BaseHeading> 
            <BaseText class="marginText">
              En Decafe & Tech, diseñamos, desarrollamos e implementamos soluciones tecnológicas 
              que impulsan la transformación digital de las empresas.
              <br>
              Nuestra metodología se basa en la automatización de procesos de gestión y en el fortalecimiento 
              de las relaciones comerciales con clientes y proveedores, ayudando a incrementar la eficiencia 
              y competitividad de las empresas y organizaciones.
              <br>
              Nuestras soluciones combinan un enfoque innovador, creativo y centrado en la experiencia del usuario, 
              permitiéndonos desarrollar herramientas eficaces y personalizadas que se ajustan a los requerimientos 
              específicos de cada empresa.
              <br>
              Respaldados por años de experiencia, ofrecemos soluciones adaptadas a las necesidades de cada cliente, 
              garantizando resultados tangibles y sostenibles.
              <br>
              En Decafe & Tech, entendemos que cada negocio es único y trabajamos para que tu empresa esté 
              siempre un paso adelante en el mundo digital.
            </BaseText>
            <v-img
              :src="require('@/assets/Tech.jpg')"
              class="imagen"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  components: {
    BaseHeading: () => import('@/components/base/Heading.vue'),
    BaseText: () => import('@/components/base/Text.vue'),
  },

}
</script>
<style scoped>
  #formatoand {
    font-family:Helvetica;
    font-size: 1.5rem;
  }
  #formatoLogo {
    font-family: 'Mina', sans-serif;
    font-size: 2rem;
    margin-top: 3%;
  }
  #formatoSlogan {
    font-family: 'Mina', sans-serif;
    font-size: 0.7rem;
    margin-top: -9%;
  }
  .marginText{
    margin-top: 10px;
    text-align: justify;
    padding-right: 120px;
    padding-bottom: 20px;
    padding-left: 120px;
  }
  .imagen{
    position: absolute;
    top: 85%;
    left: 75%;
    transform: translate(-50%, -50%) rotate(180deg);
    object-fit: cover;
    opacity: 0.1;
    width: 50%; 
    height: 50%;
  }
</style>
