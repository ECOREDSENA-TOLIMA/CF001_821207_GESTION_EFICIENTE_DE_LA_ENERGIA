<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-5 Apreciado aprendiz, bienvenido a esta experiencia de aprendizaje en donde se presentarán una serie de conceptos fundamentales sobre electricidad. A lo largo de este curso se comenzará la familiarización con lo que es la electricidad, cómo se genera y para qué sirve. Además, se aprenderán conceptos sobre unidades de medidas eléctricas, útiles en la práctica habitual dentro de las organizaciones. El siguiente vídeo ofrece más información al respecto.  
      .col-12.mt-2(data-aos="fade-up")
        figure.mt-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/NaoMfuuuJks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
