<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Formas de onda de energía eléctrica
    .col-lg-10.mx-auto
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p El movimiento de electrones produce un flujo o corriente, pero cuando en algunas circunstancias este desplazamiento no es siempre en la misma dirección, se puede decir que hay dos tipos de corriente: <b><em>corriente continua y corriente alterna</em></b>.
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src='@/assets/curso/t4/f1.svg' alt='Torres eléctricas, generadores eólicos y paneles solares')
    Separador
    #t_4_1.titulo-segundo.color-acento-botones
      h2 4.1 Corriente continua
    .col-lg-10.mx-auto.mb-5
      p.mb-5 Si el flujo de electrones se desplaza continuamente en la misma dirección, se indica que la corriente es una corriente continua o directa. El sentido del flujo de la corriente continua va siempre de negativo (-) a positivo (+) como se ve en la figura a continuación. 
      .col-lg-7.mx-auto.mb-4
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Dirección del flujo de electrones y Nivel D.C.</i>  
        figue 
          img(src='@/assets/curso/t4/f2.svg' alt='Imagen relacionada')
          figcaption Nota. SENA (2021). 
    p La expresión corriente directa (C.D.) se utiliza para decir corriente continua. A la corriente continua o directa se le determinan las abreviaturas C.D, D.C. y C.C dependiendo del contexto en que se maneje. 
    p Aunque usualmente se conoce la corriente directa como una corriente constante, en realidad es continua toda corriente que mantiene constante su polaridad, así se reduce su flujo acorde como se vaya consumiendo la carga, por ejemplo, al momento en que se descarga una batería eléctrica. De igual forma se dice corriente continua cuando los electrones se mueven constantemente en el mismo sentido, el flujo se llama corriente continua y va (por concordancia) del polo positivo al negativo.
    p.mb-5 Las fuentes de corriente continua que más se usan son: generadores de corriente directa o dinamos, baterías o acumuladores, pilas voltaicas o pilas secas.
    .row.align-items-center
      .col-lg-4
        img(src='@/assets/curso/t4/f3.svg' alt='Imagen relacionada')
      .col-lg-8
        h3 Problemas con la polaridad en corriente continua:
        p Ante un imprevisto cambio de polaridad, los aparatos electrónicos de corriente continua no están protegidos, esto conlleva a daños irreparables en estos. Una solución a esto, ya que una de las causas más relevantes es la acomodación inapropiada de las baterías, es que los aparatos adicionen un gráfico de instalación de estas; Igualmente, los terminales se diferencian ya que vienen usualmente un resorte metálico de contacto para la polaridad negativa y una placa de contacto para la polaridad positiva. En aquellos aparatos que usan baterías recargables, la etapa de Transformación-Rectificación tiene una salida cuya conexión con el aparato sólo se hace de una forma, imposibilitando así una mala conexión de polaridad. En Europa la norma técnica de colores indica que Negro: Negativo (-) y Rojo: Positivo (+).
    hr
    .row.align-items-center
      .col-lg-8
        h3 Aplicaciones:
        p Los usos de la corriente directa son numerosos, habitualmente es utilizada en: fuentes de luz portátiles o linternas, fuentes de luz de emergencia en fábricas y almacenes, plantas telefónicas, vehículos automotores, etc. 
        p La manipulación de la C.C es de mucho cuidado, ya que el usuario está en la obligación, de tener muy en cuenta, la conexión de la polaridad, ya que ciertos equipos pueden llegar a dañarse definitivamente al no energizarse de la manera adecuada.
      .col-lg-4
        img(src='@/assets/curso/t4/f4.svg' alt='Imagen relacionada')
    Separador
    #t_4_2.titulo-segundo.color-acento-botones
      h2 4.2 Corriente alterna
    p La variación periódica de la dirección del flujo de electrones es lo que comúnmente se denomina corriente eléctrica alterna. Es decir, la dirección del flujo y magnitud de la corriente alterna sufren inversiones cíclicas.
    p La forma de onda o de alternancia de la corriente alterna usualmente utilizada es la de onda seno, con esta se logra una eficiente transmisión de la energía, a tal punto que cuando se habla de corriente alterna se hace referencia a corriente alterna senoidal. Figura 7.
    p.mb-5 Sin embargo, hay algunas aplicaciones especiales donde se manejan otros tipos de formas de ondas periódicas, como son las triangulares o la rectangulares.
    .col-lg-6.mx-auto.mb-4
      .titulo-sexto.color-acento-contenido
        p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Señal de Corriente alterna Senoidal.</i> 
      figure
        img(src='@/assets/curso/t4/f5.svg' alt='Imagen relacionada')
        figcaption Nota. Generatuluz. (2021).
    p La corriente alterna es la que habitualmente se utiliza, esta es la electricidad que llega a los hogares y a las industrias. Sin embargo, hay otros tipos de señales también consideradas del tipo de corriente alterna como las señales de audio y de radio transmitidas por los cables eléctricos. Pero ya en este tipo de aplicaciones la finalidad es totalmente diferente pues solo se basa en la transmisión y recepción de la información codificada (o modulada) sobre la señal de la corriente alterna.
    p Un generador de corriente alterna está cambiando constantemente su polaridad, así que, no se puede considerar que haya un terminal positivo y otro negativo asignado.
    p La frecuencia es una de las características más importantes de la corriente alterna, y consiste en el número de veces que la corriente cambia de dirección en un segundo, se da en ciclos por segundo (C/seg.) o Hertz (Hz). Las abreviaturas de corriente alterna son las siguientes: A.C, C.A. La fuente de corriente alterna comúnmente utilizada es el generador de corriente alterna o alternador.
    p.mb-5 Por lo anterior, queda claro que la corriente alterna es la corriente que venden las empresas de energía, o electrificadoras. Es la corriente que llega a los hogares y a todos los sectores en Colombia, a una frecuencia de 60 C/seg (ciclos por segundo) o 60 Hertz. 
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.fcab
          span a
        | #[b Corriente alterna senoidal]
    p.mb-5 No todas las formas de onda tienen determinada su expresión matemática, esto, no permite que estas se puedan modelar matemáticamente para su análisis. Por el contrario, la onda seno no tiene esta incertidumbre matemática y presenta las siguientes prelaciones:
    .row.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/t4/f6.png' alt='Imagen relacionada')
      .col-lg-6
        ul.lista-ul
          li 
            i.fas.fa-angle-right.cab
            spam.mb-0 La expresión analítica y gráfica de la función seno está perfectamente determinada. Permitiendo que sea analizada mediante la teoría de los números complejos en las prácticas de circuitos alternos.
          li 
            i.fas.fa-angle-right.cab
            spam.mb-0 Mediante el estudio directo de las series de Fourier, se sustenta que con la sumatoria de una serie de ondas senoidales, de desiguales frecuencias, se puede obtener cualquier onda periódica no senoidal, estas ondas senoidales son llamados armónicos.
          li 
            i.fas.fa-angle-right.cab
            spam.mb-0 Para proporcionar el transporte de la energía eléctrica se logran concebir con facilidad y en magnitudes de valores superiores.
          li 
            i.fas.fa-angle-right.cab
            spam.mb-0 Mediante el uso de transformadores se hace posible su transformación en otras señales de distinta magnitud.
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.fcab
          span b
        | #[b Modelamiento matemático de una onda Sinoidal]
    p.mb-5 Una onda seno, a(t), de Voltaje, v(t), y corriente, i(t), se puede formular matemáticamente según sus características, ver la figura a continuación, como una función del tiempo por medio de la siguiente ecuación:
    .col-lg-6.mx-auto.mb-5
      .fagc.p-4
        .col-lg-7.mx-auto
          figure.mb-4
            img(src='@/assets/curso/t4/f8.png' alt='Imagen relacionada')
        p Donde:
        p <b>Aₒ:</b> amplitud en voltios o amperios, también llamado valor máximo o de pico.
        p <b>W:</b> oscilación o velocidad angular en radianes/segundo.
        p <b>t:</b> tiempo en segundos.
        p.mb-0 <b>β:</b> ángulo de fase inicial en radianes.
    .contenedor.fagc.p_m-5
      .col-lg-10.mx-auto
        .row
          .col-lg-6
            p Para los matemáticos la velocidad angular es más llamativa que para ingenieros, dado esto la fórmula anterior también puede expresar como:
            .col-lg-8.mx-auto.mb-4
              img(src='@/assets/curso/t4/f8.png' alt='Imagen relacionada')
            p Donde f es la frecuencia en hercios (Hz) y es igual al período T a la menos uno (T-1).  Los valores más empleados en la distribución son 50 Hz y 60 Hz. Dependiendo del país.
            .col-lg-4.mx-auto
              img(src='@/assets/curso/t4/f10.png' alt='Imagen relacionada')
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Onda Sinusoidal.</i> 
            figure
              img(src='@/assets/curso/t4/f11.svg' alt='Imagen relacionada')
              figcaption Nota. Wikimedia (31 de diciembre de 2008). 
    Separador
    #t_4_3.titulo-segundo.color-acento-botones
      h2 4.3 Valores medio (A<span class="text-small">med</span>) y eficaz (A) o RMS
    p.mb-5 La corriente alterna se puede medir en diferentes formas, como lo son valores medios o valores eficaces que también son llamados RMS, a continuación se detalla cada uno de ellos. 
    .col-lg-11.mx-auto
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta.fcab
            span a
          | #[b Valor medio o Amed]
          div.mt-3
            .row
              .col-lg-7
                p Algunos lo describen como el componente de corriente continua o directa de la señal sinusoidal. Si el área está por encima del eje de abscisas se toma positiva y si está por debajo se toma como negativa. En una onda sinusoidal, el semiciclo positivo es idéntico, pero invertido, al semiciclo negativo, dado que su valor medio es nulo. Por esta razón, en una señal sinusoidal el valor medio solo se representa en medio ciclo. Mediante cálculo integral se puede explicar que su expresión es la siguiente:
              .col-lg-5.fagc.p-4
                .col-lg-6.mx-auto.mb-4
                  img(src='@/assets/curso/t4/f12.png')
                p Donde
                p Aₒ: amplitud en voltios o amperios (también llamado valor máximo o de pico).
                p π: pi.
      hr
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta.fcab
            span b
          | #[b Valor eficaz (A) o RMS]
          div.mt-3 
            p Cuando los mismos efectos caloríficos se originan con valores de una corriente o voltaje continuo o directo con respecto a su equivalente alterno, se dice que este es el valor eficaz. En otras palabras, para una corriente alterna dada, su valor eficaz (Ief) será la corriente continua o directa que provoca la misma disipación de potencia (P) o calor en una resistencia (R). Matemáticamente, se especifica que la raíz cuadrada de la media de los cuadrados de los valores instantáneos alcanzados durante un período es el valor eficaz de una cantidad variable con el tiempo:
            .col-lg-3.mx-auto.mb-4
              img(src='@/assets/curso/t4/f13.png')
            p También se conoce como el valor cuadrático medio de una función o <b>valor RMS</b>. En el ámbito industrial, el valor eficaz es muy importante, ya que la mayoría de las operaciones de magnitud energética se realizan con este valor. Por este motivo se simboliza con la letra mayúscula de la magnitud en cuestión (I, V, P, etc.). 
            p.mb-5 Matemáticamente, el valor eficaz de una corriente alterna senoidal se expresa mediante la expresión:
            .col-lg-8.fagc.p-4.mx-auto
              .col-lg-4.mx-auto.mb-4
                img(src='@/assets/curso/t4/f14.png')
              p Donde
              p <b>Aₒ:</b> amplitud en voltios o amperios (también llamado valor máximo o de pico).
              p El valor de A representa un voltaje o una corriente. Es muy útil para calcular la potencia consumida por las cargas. Entonces, si un voltaje alterno genera una potencia P en una carga resistiva dada, un voltaje directo de <b>Vrms</b> generará la misma potencia P en la misma carga, por lo tanto, <b>Vrms x I = VCA x I</b>.
</template>

<script>
export default {
  name: 'Tema4',
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
