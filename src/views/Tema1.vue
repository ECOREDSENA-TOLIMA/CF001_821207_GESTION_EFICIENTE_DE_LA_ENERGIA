<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema de unidades
    .col-lg-10.mx-auto
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p El sistema de unidades es un conjunto de métodos relacionados que se utilizan para los cálculos. El sistema incluye unidades base, que representan dimensiones base, y unidades derivadas, que representan productos de potencias de dimensiones base. Algunas unidades existen en más de un sistema de unidades. 
          .col-lg-2.mb-4.mb-lg-0.mx-auto
            img(src='@/assets/curso/t1/f1.svg' alt='Batería')

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            p Cuando se necesite medir algo que puede variar, es decir que puede adoptar diferentes valores numéricos, se pueden utilizar las unidades de medida. Así, mediante el kilo, el metro, el grado de temperatura u otras unidades de medida identificamos cantidades, comparándolas con estas unidades.  
            p En electricidad también existen magnitudes que varían, que deben ser medidas y monitoreadas, por ejemplo, para tomar decisiones sobre los elementos a emplear en una |instalación.
          
          .col-md-6
            figure
              img(src='@/assets/curso/t1/f3.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p En la física, que es el campo que estudia los fenómenos naturales, existen unidades de medida para cuantificar cada magnitud. Por ejemplo, utilizamos el kilogramo para medir los alimentos, el metro para las distancias, el voltio para la tensión, entre otros. Sin embargo, frecuentemente se confunden los términos <b>"medición" y "medida de la cantidad".</b> Ver las siguientes definiciones: 

          .col-md-6
            figure
              img(src='@/assets/curso/t1/f4.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p <b>Medir</b> es comparar el número de veces o fracciones que cabe en cierta cantidad la unidad de medida, o también llamada patrón. 
            p <b>Patrón</b> es una <b>unidad de medida</b> aceptada internacionalmente que se usa para cuantificar una cantidad física. Por ejemplo, cuando se compran cinco (5) metros de tela, lo que ha hecho el vendedor es comparar cuántas veces cupo el metro o unidad patrón en toda la longitud de la tela que se desea. 
          .col-md-6
            figure
              img(src='@/assets/curso/t1/f5.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p Entonces, la medida de la cantidad es el número de veces que cupo la unidad patrón en la cantidad acompañada de la unidad de referencia.  
            p Por ejemplo, 5 es una medición, mientras que 5 m es una medida de la cantidad.

          .col-md-6
            figure
              img(src='@/assets/curso/t1/f6.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p El sistema de unidades reconocido y adoptado por muchos países es el <b>“Sistema internacional de unidades de medida”</b>, o de forma abreviada, S.I. Anteriormente se denominaba “Sistema métrico decimal”, sin embargo, durante la 11a Conferencia general de pesas y medidas en el año 1960 adoptó el nuevo nombre, que sigue aún vigente. 

          .col-md-6
            figure
              img(src='@/assets/curso/t1/f7.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p Las cantidades físicas se clasifican teniendo en cuenta la manera en que se definen. Estas pueden ser básicas, también llamadas “fundamentales” o derivadas. No es necesario expresarlas en función de otra magnitud. 
          .col-md-6
            figure
              img(src='@/assets/curso/t1/f8.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p Medir es una acción diaria, sin embargo, en electricidad se debe expresar adecuadamente cada magnitud, de lo contrario las confusiones pueden ser dañinas para todo un sistema. Por lo tanto, se debe prestar mucha atención a las mediciones. 
          .col-md-6
            figure
              img(src='@/assets/curso/t1/f9.png', alt='')

    p.mt-5 Las <b>magnitudes básicas o fundamentales</b> son aquellas definidas arbitrariamente, por convención entre países, organismos o la comunidad científica y no es necesario expresarlas en función de otra magnitud, como, por ejemplo: el tiempo, la temperatura, la longitud, la masa, la cantidad de sustancia y la intensidad luminosa. 

    .row.mt-5
      .col-8.mx-auto
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Magnitudes básicas o fundamentales.</i>
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr.text-center
                th Magnitud
                th Unidad 
                th Símbolo
            tbody
              tr.text-center
                td Longitud
                td metro
                td m
              tr.text-center
                td Masa
                td kilogramo
                td kg
              tr.text-center
                td Tiempo
                td Segundo
                td s
              tr.text-center
                td Temperatura
                td Kelvin
                td K
              tr.text-center
                td Corriente eléctrica
                td Ampere
                td A
              tr.text-center
                td Intensidad luminosa
                td Candela
                td cd
              tr.text-center
                td Cantidad de sustancia
                td mol
                td mol

    p.mt-5 Por su parte las <b>magnitudes derivadas</b> son aquellas que se definen en función de las magnitudes básicas y son variadas dependiendo del campo de acción al que referimos. En electricidad se encuentran magnitudes derivadas comunes como:  la carga eléctrica, la intensidad de campo eléctrico o magnético, la resistencia, resistividad, conductividad y capacidad entre los más comunes.  

    .row.mt-5
      .col-8.mx-auto
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Magnitudes derivadas comunes.</i>
        figure
          img(src='@/assets/curso/t1/f10.png', alt='')

    Separador
    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1 Prefijos del Sistema Internacional 
    
    p Cuando se mide una cantidad física, la unidad de medida que se utiliza puede resultar muy grande o muy pequeña con respecto a la cantidad. En estos casos, para poder expresar la medida, es necesario utilizar los múltiplos y submúltiplos de la unidad de medida. Para ello se utilizan los prefijos del Sistema Internacional de Unidades (SI). 
    p Los prefijos permiten que las cifras puedan expresarse de una manera más sencilla, cuando estas se encuentran en valores muy grandes o muy pequeños. Por ejemplo, no se justifica expresar el peso de una sustancia como 0.000000000001 g debido a la dificultad para interpretar mentalmente esa medida. Es más comprensible escribir que pesa 1pg (1 picogramo) o 1000 ng (1000 nanogramos). Así pues, al nombre de la unidad fundamental se le antepone un prefijo, cuyo símbolo y significado se muestran en la siguiente tabla. 

    .titulo-sexto.color-acento-contenido
      p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Prefijos del Sistema Internacional (SI).</i>
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. Centro Español de Metrología, 2013.
        thead
          tr.text-center
            th Factor
            th Nombre
            th Símbolo
            th Factor
            th Nombre
            th Símbolo
        tbody
          tr.text-center
            td 10<span class="exponent">1</span>
            td deca
            td da
            td 10<span class="exponent">-1</span>
            td deci
            td d
          tr.text-center
            td 10<span class="exponent">2</span>
            td hecto
            td h
            td 10<span class="exponent">-2</span>
            td centi
            td c
          tr.text-center
            td 10<span class="exponent">3</span>
            td kilo
            td k
            td 10<span class="exponent">-3</span>
            td mili
            td m
          tr.text-center
            td 10<span class="exponent">6</span>
            td mega
            td M
            td 10<span class="exponent">-6</span>
            td micro
            td &micro;
          tr.text-center
            td 10<span class="exponent">9</span>
            td giga
            td G
            td 10<span class="exponent">-9</span>
            td nano
            td n
          tr.text-center
            td 10<span class="exponent">12</span>
            td tera
            td T
            td 10<span class="exponent">-12</span>
            td pico
            td p
          tr.text-center
            td 10<span class="exponent">15</span>
            td peta
            td P
            td 10<span class="exponent">-15</span>
            td femto
            td f
          tr.text-center
            td 10<span class="exponent">18</span>
            td exa
            td E
            td 10<span class="exponent">-18</span>
            td atto
            td a
          tr.text-center
            td 10<span class="exponent">21</span>
            td zetta
            td Z
            td 10<span class="exponent">-21</span>
            td zepto
            td z
          tr.text-center
            td 10<span class="exponent">24</span>
            td yotta
            td Y
            td 10<span class="exponent">-24</span>
            td yocto
            td y

    .col-lg-8.mx-auto.mb-5
      .bloque-texto-d.color-secundario.p-4
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left.cab
          h3.text-regular Con excepción de da (deca), h (hecto) y k (kilo), todos los símbolos de prefijos de múltiplos se escriben con mayúsculas y todos los símbolos de prefijos de submúltiplos se escriben con minúsculas.
          i.fas.fa-quote-right.cab
        .bloque-texto-d__autor
          .h6.mb-0 (Centro Español de Metrología, 2013, p. 32).

    h3 Conversión de unidades con prefijos del Sistema Internacional de Unidades

    p Para convertir una unidad en otra, sea mayor o menor, se utilizan los múltiplos y submúltiplos de la unidad de medida. Normalmente se utilizan los múltiplos y submúltiplos de 10 en notación exponencial: 1000 es 103, 1/1000 es 10‐3, etc. Se observa, por ejemplo, que en la medida de masa, un kilogramo (1 kg) equivale a 1000 gramos y gramo (1 g) a 1000 miligramos. Esto se observa también en medidas de longitud, volumen, entre otros.
    p.mb-3 A continuación, se explican maneras sencillas de cómo realizar las conversiones de una unidad dada en otra más grande o más pequeña. 
    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-down")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right
            | Para pasar de una cantidad menor a una de mayor valor (inmediatamente superior): dividir por mil. Esto significa correr el punto decimal tres lugares a la izquierda. Hacerlo cada vez que se requiera.
          li.mb-0
            i.fas.fa-angle-right
            | Para pasar de una unidad mayor a otra de menor valor (inmediatamente inferior): multiplicar por mil. Esto es correr el punto decimal tres lugares a la derecha. Hacerlo cada vez que se requiera. 
    
    .tarjeta.g1.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/iconDescarga.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Sistema Internacional de Unidades - video
              p.mb-0 Se invita a explorar más sobre conversiones con prefijos del Sistema Internacional de Unidades en el video disponible en (Matemóvil, 2020).
            .col-sm-auto
              a.boton.color-acento-contenido(href='https://www.youtube.com/watch?v=fYbo4-g7-IY&t=13s' target='_blank')
                span Ver
                i.fas.fa-external-link-alt

    Separador
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2 Notación científica

    p Es una forma estandarizada de representar cualquier número como el producto de un número real y una potencia de 10. Para más detalle, se puede consultar en la siguiente infografía informativa. 

    SlyderF.mb-5(columnas="col-12")
      .tarjeta.color-acento-botones.p-4
        img(src='@/assets/curso/t1/f12.svg' alt='')
      .tarjeta.color-acento-botones.p-4
        img(src='@/assets/curso/t1/f13.svg' alt='')
      .tarjeta.color-acento-botones.p-4
        img(src='@/assets/curso/t1/f14.svg' alt='')
      .tarjeta.color-acento-botones.p-4
        img(src='@/assets/curso/t1/f15.svg' alt='')

    Separador
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3 Simbología eléctrica
    p.mb-5 La simbología eléctrica es el conjunto de formas gráficas que representa cada componente de un circuito o instalación eléctrica. Esta simbología es importante cuando se transfiere información ya sea en la elaboración de un proyecto, ejecución, operación y mantenimiento. En esta sección se pretende una familiarización con los símbolos de los diferentes aparatos eléctricos, que son importantes para comprender la representación esquemática de los sistemas eléctricos y para explicar su funcionamiento. 
    .col-lg-8.mx-auto
      .cajon.color-primario.p-4.mb-4
        p.mb-0 Los símbolos eléctricos se rigen por la norma internacional IEC 60617. En Colombia, la organización encargada de revisar y concertar las normas internacionales con las nacionales se trata del ICONTEC (Instituto Colombiano de Normas Técnicas y Certificación). 
    p.mb-5 La siguiente tabla muestra los símbolos eléctricos más usados en Colombia. La simbología mostrada es extraída fundamentalmente de la resolución <b>Reglamento Técnico de Instalaciones Eléctricas (RETIE)</b> expedida por el Ministerio de Minas y Energía de Colombia. 
    .col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Principales símbolos eléctricos.</i>
      figure
        img(src='@/assets/curso/t1/f2.svg' alt='simbología eléctrica')
        figcaption Nota. Ministerio de Minas y Energía de Colombia (2013).
    .contenedor.fagc.p-mx_5
      .row
        .col-lg-4
          p Puede conocer el reglamento ANEXO GENERAL DEL RETIE RESOLUCIÓN 9 0708 DE AGOSTO 30 DE 2013 con sus ajustes con mayor detalle, consulte el siguiente enlace:
          a.anexo(href="https://sic.gov.co/sites/default/files/files/reglamentos%20tecnicos/ANEXO%20GENERAL%20RETIE%20Res%2090708%20de%202013%20actualizado%20a%20Res%202017-03-29.pdf " target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[b Enlace web.] ANEXO GENERAL DEL RETIE RESOLUCIÓN 9 0708 DE AGOSTO 30 DE 2013
        .col-lg-4
          p Se invita a incrementar los conocimientos sobre la simbología eléctrica, cuáles son los símbolos eléctricos normalizados en el Código Eléctrico Colombiano NTC2050 - CEC, en el siguiente enlace:
          a.anexo.mb-4(href="https://medicert.com.co/docs/NTC-2050.pdf" target="_blank")         
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[b Enlace web.] La simbología eléctrica
        .col-lg-4
          p Si desea consultar todos los símbolos con detalle así como la representación de nuevos símbolos, puede visitar los siguientes portales:
          a.anexo(href="https://www.simbologia-electronica.com/simbologia-electrica-electronica/simbolos-electricos-electronicos-pdf.htm" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[b Enlace web.] Consultar todos los símbolos
          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
