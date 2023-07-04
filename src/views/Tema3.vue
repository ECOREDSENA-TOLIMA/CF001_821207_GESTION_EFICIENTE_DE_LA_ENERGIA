<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Definición de magnitudes eléctricas
    .col-lg-8.mx-auto
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p A continuación se conocerán las principales magnitudes eléctricas, como son la diferencia de potencial, la corriente eléctrica y la resistencia.
          .col-lg-3.mb-4.mb-lg-0.mx-auto
            img(src='@/assets/curso/t3/f1.svg' alt='Bombillo')
    Separador
    #t_3_1.titulo-segundo
      h2 3.1 Diferencia de potencial
    p.mb-5 El potencial es el estado eléctrico en que se encuentra un cuerpo. Todos los cuerpos en estado natural poseen átomos eléctricamente neutros. Cuando se altera el estado de equilibrio se genera un potencial negativo o positivo, esta diferencia es lo que se conoce como diferencia de potencial, que también es conocido como tensión o voltaje.
    .contenedor.fagc.p_m-5
      .col-lg-10.mx-auto
        h3.text-center 
        .row.mb-5
          .col-lg-6
            p Todos los átomos de los cuerpos o materiales en estado natural se encuentran en equilibrio o eléctricamente neutros, es decir, poseen igual número de protones que electrones.
          .col-lg-3
            img(src='@/assets/curso/t3/f2.svg' alt='Protones')
          .col-lg-3
            img(src='@/assets/curso/t3/f3.svg' alt='Electrones')
        h3.text-center.mb-5 Se puede alterar si sustraemos o añadimos electrones a los átomos de un cuerpo
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            h4.text-center Potencial positivo
            p.text-center Se conoce como potencial positivo cuando el átomo pierde electrones, entonces el cuerpo se encuentra con mayor número de protones que de electrones, es decir está cargado positivamente.
            figure.px-5.py-4.fblanco.tarjeta
              img(src='@/assets/curso/t3/f4.svg' alt='Potencial positivo')
          .col-md.tarjeta.color-acento-botones.p-5
            h4.text-center Potencial negativo
            p.text-center Se conoce como potencial negativo cuando el átomo gana electrones, el cuerpo tiene mayor número de electrones que de protones y por lo tanto se encuentra cargado negativamente.
            figure.px-5.py-4.fblanco.tarjeta
              img(src='@/assets/curso/t3/f5.svg' alt='Potencial negativo')
        p.text-center El átomo en estado natural se denomina átomo sin carga, es decir, de potencia neutra.
        h3 Tipos de potenciales
        .row.br26.p-5.align-items-center.mb-4
          .col-lg-6
            img(src='@/assets/curso/t3/f6.svg' alt='Caso 1')
          .col-lg-6
            p La diferencia entre protones y neutrones es 0. En otras palabras, su potencial es 0, el cuerpo se encuentra en <b>estado natural</b> o sin carga eléctrica.
        .row.br26.p-5.align-items-center.mb-4
          .col-lg-6
            img(src='@/assets/curso/t3/f7.svg' alt='Caso 2')
          .col-lg-6
            p La diferencia entre protones y neutrones es 2 cargas positivas, es decir que le sobran 2 protones. Entonces, el potencial es (+2), se encuentra <b>cargado positivamente</b>.
        .row.br26.p-5.align-items-center.mb-4
          .col-lg-6
            img(src='@/assets/curso/t3/f8.svg' alt='Caso 3')
          .col-lg-6
            p La diferencia entre protones y neutrones es 2 cargas negativas, es decir le sobran 2 electrones, entonces, tenemos una diferencia de (-2), por lo tanto su potencial es <b>negativo</b>.
      hr
      h3 Diferencia de potencial
      .row.mb-4.align-items-center
        .col-lg-6
          p Se tiene dos átomos con distinto potencial. El átomo A busca su equilibrio tomando 2 electrones del átomo B. El átomo busca su equilibrio cediendo 2 electrones al átomo A. Entonces, entre los átomos A y B existe una diferencia de potencial de 4 electrones.
          .cajon.color-acento-contenido.p-4
            p.mb-0 Esta diferencia es el impulso que necesitan las cargas para poder fluir del punto A al punto B y es lo que en electricidad se conoce como una <b>DIFERENCIA DE POTENCIAL</b> (d.d.p.), también llamada Tensión, Voltaje, Fuerza Electromotriz.<br>Se representa con las letras U, V, E, F.E.M.
        .col-lg-6.fblanco.p-4.br26
          img(src='@/assets/curso/t3/f10.svg' alt='Diferencia de potencial')
      hr
      .row.mb-4.align-items-center
        .col-lg-6
          p Cuando se escribe UAB = 110 V
          p Esto significa que entre los puntos A y B, existe una tensión de 110 Voltios.
          p Para mantener la tensión entre los dos puntos se necesita un generador, que puede ser una pila o batería, un dínamo, entre otros. Los dos puntos reciben el nombre de terminales o bornes.
        .col-lg-6.fblanco.p-4.br26
          img(src='@/assets/curso/t3/f11.png' alt='A | U AB = 110V | B')
      hr
      .col-lg-10.mx-auto.mb-5
        img(src='@/assets/curso/t3/f12.png' alt='Tips')
    Separador
    #t_3_2.titulo-segundo
      h2 3.2 Corriente eléctrica
    p.mb-5 Si se conecta un alambre conductor entre dos terminales con diferente potencial, se tiene un flujo de electrones desde el punto con potencial negativo hacia el punto con potencial positivo. Este movimiento se conoce como corriente eléctrica.
    .contenedor.fagc.p_m-5
      .col-lg-10.mx-auto
        h3.text-center Corriente Eléctrica
        .row.mb-5.align-items-center
          .col-lg-6
            p La CORRIENTE ELÉCTRICA es el movimiento de electrones a través de un conductor eléctrico; dicho movimiento no es posible sin la aplicación, a dicho conductor, de la FUERZA ELECTROMOTRIZ (F.E.M.)
            .fcab25.p-4
              p.mb-0 Así pues, cuando en un conductor hay movimiento de electrones, existe corriente eléctrica. Para que exista la corriente eléctrica se necesita:
          .col-lg-5.mx-auto
            img(src='@/assets/curso/t3/f13.svg' alt='Imagen relacionada')
        .row.mb-5
          .col-lg-5.mx-auto
            img(src='@/assets/curso/t3/f14.svg' alt='Imagen relacionada')
          .col-lg-6
            .row.align-items-center
              .col-lg-3.mx-auto
                img(src='@/assets/curso/c1.svg' alt='1')._4rem
              .col-lg-9
                p Una trayectoria ininterrumpida que deben seguir los electrones para desplazarse entre los terminales de la fuente. Este camino es el conductor.
            hr
            .row.align-items-center.mb-5
              .col-lg-3.mx-auto
                img(src='@/assets/curso/c2.svg' alt='2')._4rem
              .col-lg-9
                p La fuerza electromotriz (F.E.M), suministrada por un generador o también llamado fuente de energía eléctrica. La fuente de energía permite el movimiento de electrones, y puede ser, por ejemplo, una pila.
            p El flujo de electrones que recorre el conductor cada segundo se puede medir y se llama INTENSIDAD DE CORRIENTE, comúnmente llamada corriente eléctrica.
        h3.text-center Unidad de medida de la intensidad de corriente
        .br26.fpm.p-5.mb-4
          p.mb-0 La unidad de medida de la corriente es el Amperio y se representa con la letra A.
        .br26.fcab25.p-5.mb-5
          p <b>¿Sabías qué?</b><br>Recibe su nombre en honor al físico francés André-Marie Ampère, uno de los principales científicos ilustres del electromagnetismo.
          p.mb-0 El instrumento para medir la intensidad o corriente eléctrica es el Amperímetro.
        .row.mb-5.align-items-center
          .col-lg-7
            p 1 amperio es una corriente con un caudal de 1 Culombio por segundo. Una carga de 1 Culombio equivale a 6,25×10<span class="exponent">18</span> electrones (1C = 6,25×10<span class="exponent">18</span>  e).
          .col-lg-5
            img(src='@/assets/curso/t3/f15.svg' alt='Imagen relacionada')
      p.mb-5 La siguiente tabla contiene los múltiplos y submúltiplos del amperio habituales en electricidad.
      .col-lg-6.mx-auto
        img(src='@/assets/curso/t3/f16.svg' alt='Imagen relacionada')
    Separador
    #t_3_3.titulo-segundo
      h2 3.3 Resistencia eléctrica	
    .tarjeta.fagc.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/infografias.svg")
        .col-md.col-lg-6
          h3 Resistencia eléctrica
          p.mb-4 Todo material se resiste a que una corriente lo recorra. Esta resistencia variará de acuerdo con el tipo de material, temperatura, longitud y grosor del conductor por el que transiten los electrones.
          a.boton.color-secundario(:href="obtenerLink('downloads/grafico2.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    Separador
    #t_3_4.titulo-segundo
      h2 3.4 Efecto Joule
    .col-lg-10.mx-auto
      SlyderE(indicadores="derecha")
        .row
          .col-md-6.mb-4.mb-md-0
            p Para poder comprender el efecto Joule, primero se debe comprender el concepto de calor. 
            p El calor es la liberación de energía por parte de un sistema, originada por el movimiento de las partículas atómicas que lo componen. Este fenómeno se puede apreciar en nuestra cotidianidad y tiene diversas aplicaciones. Se presenta en aparatos como planchas de ropa, hornos, tostadores de pan, etc. Por ejemplo, se emplea para generar calor a partir de la electricidad mediante calefactores eléctricos; o se reconoce como un motor eléctrico se calienta después de un tiempo de estar en operación. Una parte de la corriente que consume se desprende en forma de calor y la otra parte se convierte en energía mecánica.
          .col-md-6
            img(src='@/assets/curso/t3/f17.png' alt='bombillo')
        .row
          .col-md-6.mb-4.mb-md-0
            p Para el caso de los sistemas eléctricos, la corriente eléctrica que circula a través de un conductor produce efectos caloríficos. Esto ocurre debido a que los electrones en movimiento chocan contra los átomos del conductor y elevan su energía cinética. Parte de la energía cinética se transforma en calor, lo que hace que aumente la temperatura del conductor. Mientras más corriente fluya, mayor calor se disipará. Este fenómeno se llama efecto Joule. El nombre es en honor a su descubridor, el físico británico James Prescott Joule, quien estudió el comportamiento de la corriente eléctrica y realizó investigaciones en termodinámica.
          .col-md-6
            img(src='@/assets/curso/t3/f18.png' alt='resistencia')
        .row
          .col-md-6.mb-4.mb-md-0
            p Así pues, el calor disipado debido al flujo de la corriente eléctrica a través de un conductor, es evidencia del trabajo hecho por la corriente al vencer la resistencia del conductor; la energía que se necesita para realizar el trabajo la obtiene de una fuente. Cuanto mayor sea el calor producido, mayor será el trabajo hecho por la corriente, que por lo tanto requiere más energía de la fuente. A partir del cálculo del calor producido se puede obtener la energía entregada por la fuente, y viceversa. 
          .col-md-6
            img(src='@/assets/curso/t3/f19.png' alt='calentador')
    p.mb-5 El calor generado por el efecto descrito se puede calcular utilizando la Ley de Joule. Esta ley dice que: "El calor producido por una corriente eléctrica es directamente proporcional a la RESISTENCIA del conductor, a la INTENSIDAD elevada al cuadrado y al tiempo que dure circulando esta corriente". Matemáticamente se expresa de la siguiente manera:
    .col-lg-6.mx-auto.fagc.p-4.mb-5
      .col-lg-6.mx-auto
        img(src='@/assets/curso/t3/f20.png' alt='Q = I^2 * R * t').mb-4
      p Donde:
      p <b>Q</b> es la energía calorífica producida por la corriente, en Joules.
      p <b>I</b> es la intensidad de la corriente que circula, en Amperios.
      p <b>R</b> es la resistencia eléctrica del conductor, en Ohmios.
      p.mb-0 <b>t</b> es el tiempo, en segundos.
    p.mb-5 En la práctica el calor producido se expresa en calorías, las restantes magnitudes en las unidades del Sistema Internacional. Para que el resultado quede expresado en calorías, se necesita multiplicar por 0.24. Este es el factor de conversión.
    .col-lg-10.mx-auto
      .tarjeta.g1.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/iconDescarga.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0.texto-blanco
                h3.mb-1 La ley de Joule y sus efectos - Video
                p.mb-0 Te invitamos a ver el siguiente video sobre la ley de Joule y sus efectos
              .col-sm-auto
                a.boton.color-acento-contenido(href='https://www.youtube.com/watch?v=3dwNzK1fiJ8' target='_blank')
                  span Ver
                  i.fas.fa-external-link-alt









</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
