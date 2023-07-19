<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Elementos de circuito
    .col-lg-10.mx-auto
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Hay diferentes tipos de elementos que componen un circuito, cada uno de ellos tiene una forma diferente de comportarse ante el paso de la corriente eléctrica. A continuación se detalla cada una de las características de los elementos que pueden componer un circuito.
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src='@/assets/curso/t5/f1.svg' alt='Imagen relacionada')
    Separador
    #t_5_1.titulo-segundo.color-acento-botones
      h2 5.1 Resistencia
    p La resistencia es la propiedad que tiene un componente, o un trozo de conductor (canal que facilita el paso de electrones), de oponerse al paso de la corriente eléctrica. Mientras que el resistor es un componente físico mediante el cual se genera resistencia.
    h3 El Resistor
    .row.mb-5
      .col-12
        .cajon.color-acento-contenido.p-3.mb-3
          p.mb-0 #[b En circuitos eléctricos, comúnmente las resistencias se encuentran en forma de pequeños cilindros, que se conocen como resistores. Estos elementos están provistos de bandas de colores que indican su valor y precisión, como se observa en la siguiente figura.]
      .col-md-5
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 9. </b> <i>Resistor.</i> 
        figure
          img(src='@/assets/curso/t5/f2.png' alt='Resistores').mb-4
      .col-md-7
        p Además, según sea el material con el que se construyen, se tienen diferentes niveles de resistencias. 
        p El resistor se utiliza en algunos aparatos eléctricos como las planchas, estufas, calentadores, entre otros, en los que se utiliza el conductor como una fuente de calor. 
        p Este tipo de resistores es elaborado con diferentes técnicas donde cada una se centra en un tipo de material. Estos materiales son: Película de carbón, carbón prensado, metal vidriado, sustrato de alúmina (Resistores de montaje superficial SMD), película de óxido metálico, entre otros.  
        p Para aplicaciones de potencias superiores tanto en corriente directa como en alterna son utilizados resistores de hilo o alambre bobinado sobre porcelana y los encapsulados de Cerámico, entre otros.

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.fcab
          span a
        | #[b Codificación de valores en los resistores]
    p En los resistores existen tres formas diferentes para indicar los valores en Ohmios. La primera y la más simple de todas, se da en resistores de potencias medias y altas, donde se indica el valor en ohmios (Ω) o kilo Ohmios (kΩ), y la mayoría de las veces la potencia en Wattios, directamente estampado sobre el cuerpo del elemento. 
    p Una segunda es la codificación con franjas de colores llamado “Código de Colores en resistencias”. Una tercera y última codificación, la cual es aplicada en resistores de montaje superficial (SMD: Surface Mounted Device o SMT:Surface Mount Technology). 
    p.mb-5 A continuación, se explican con más detalle los dos últimos tipos de codificación. 
    .contenedor.p_mx-5.fagc
      .row
        .col-lg-1.ms-auto
          img(src='@/assets/curso/c1.svg' alt='1')._4rem
        .col-lg-9.me-auto
          h3 Código de colores
          p Para caracterizar un resistor hacen falta tres valores: resistencia eléctrica, disipación máxima y precisión o tolerancia. Estos valores se indican normalmente en el encapsulado dependiendo del tipo de éste; para el tipo de encapsulado axial, el que se observa en las fotografías, dichos valores van rotulados con un código de franjas de colores.
          p.mb-4 Estos valores se indican con un conjunto de rayas de colores sobre el cuerpo del elemento. Son tres, cuatro o cinco rayas; dejando la raya de tolerancia (normalmente plateada o dorada) a la derecha, se leen de izquierda a derecha.
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              //.titulo-sexto.color-acento-contenido
              //  p.titulo.pb-0.mb-0 <b>Figura 11. </b> <i>Código de franjas de colores.</i> 
              figure
                img(src='@/assets/curso/t5/f4.png', alt='Resistor')
                //figcaption <b>Fuente:</b> geekelectronica
            .fblanco.p-4(x="35%" y="57%")
              p.mb-0 <b>Primera banda:</b> dependiendo de su color obtiene su valor, en este caso es azul, su valor es 6.  
            .fblanco.p-4(x="43%" y="35%")
              p.mb-0 <b>Segunda banda:</b> dependiendo de su color obtiene su valor, en este caso es rojo, su valor es 2.  
            .fblanco.p-4(x="51%" y="55%")
              p.mb-0 <b>Banda multiplicadora:</b> dependiendo de su color obtiene su valor, en este caso es verde, su valor es 5.  
            .fblanco.p-4(x="61%" y="35%")
              p.mb-0 <b>Banda de tolerancia:</b> la última raya indica la tolerancia (precisión). Esta es el multiplicador de las restantes y las otras indican las cifras significativas del valor de la resistencia.
          //.row
            .col-lg-12
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/t5/e1.svg' alt='círculo azul')
                .tarjeta.tarjeta--blanca
                  .p-4
                    p.mb-0 Para caracterizar un resistor hacen falta tres valores: resistencia eléctrica, disipación máxima y precisión o tolerancia. Estos valores se indican normalmente en el encapsulado dependiendo del tipo de éste; para el tipo de encapsulado axial, el que se observa en las fotografías, dichos valores van rotulados con un código de franjas de colores.
          
          //.col-lg-9.mx-auto.mb-5.align-items-center.justify-content-center
          .titulo-sexto.color-acento-contenido.mt-3
            p.titulo.pb-0.mb-0 <b>Tabla 8. </b> <i>Valor de la resistencia eléctrica según su color.</i> 
          figure
            img(src='@/assets/curso/t5/f5.png', alt='Tabla de resistencias según color')
            figcaption 

        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/t5/e1.svg' alt='círculo azul')
              .tarjeta.tarjeta--blanca
                .p-4
                  p.mb-0 El valor de la resistencia eléctrica se obtiene leyendo las cifras como un número de una, dos o tres cifras; se multiplica por el multiplicador y se obtiene el resultado en Ohmios (Ω). El coeficiente de temperatura únicamente se aplica en resistencias de alta precisión o tolerancia menor del 1%.


        img(src='@/assets/curso/t5/f6.svg' alt='imagen relacionada' style="width:950px;").m-auto.mb-5

        .row.mb-5.align-items-center.text-center
          .col-lg-3.bordeR
            p El valor nominal en ohmios, es el obtenido al momento de descifrar el código de colores
            p En el caso de ejemplo sería:<br>62 x 10¹ = 620 Ω ± 5%
          .col-lg-3.bordeR
            p El valor de tolerancia en ohmios, es obtenido determinando, en este caso el 5%, del valor nominal
            p En el caso de ejemplo sería:<br>5% de 620 Ω = 31 Ω
          .col-lg-3.bordeR
            p El valor máximo en ohmios, es obtenido sumándole al valor nominal el valor de tolerancia en ohmios
            p En el caso de ejemplo queda:<br>620 Ω + 31 Ω = 651 Ω
          .col-lg-3
            p El valor mínimo en ohmios, es obtenido restándole al valor nominal, el valor de tolerancia en ohmios
            p En el caso de ejemplo sería:<br>620 Ω - 31 Ω = 589 Ω
        .col-lg-8.mx-auto.mb-5
          .cajon.color-primario.p-4
            p.mb-0 Para saber que un resistor está en buenas condiciones resistivas y eléctricas funcionales, su valor al medirlo con un óhmetro o multímetro debe estar entre el rango del valor máximo y el valor mínimo, si no cumple esta condición, se determina que este componente no cumple con los parámetros de tolerancia que se designa cuando fue fabricada; por tal razón se aconseja reemplazarla.
      hr
      .row
        .col-lg-1.ms-auto
          img(src='@/assets/curso/c2.svg' alt='2')._4rem
        .col-lg-9.me-auto
          h3 Codificación resistores de montaje superficial (<em>SMD: Surface Mounted Device</em> o <em>SMT: Surface Mount Technology</em>)
          p Este tipo de codificación está compuesto por dos subtipos que están orientados para trabajar con 3 y 4 cifras significativas. Las cuales se explican a continuación.
    .mb-5
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.fcab
          span b
        | #[b Codificación a tres cifras en resistencias #[i SMD] o #[i SMT]]
    .col-lg-10.mx-auto
      .row.align-items-center
        .col-lg-6
          p En la Figura 10. Se observa la codificación de tres cifras de un resistor. Los dos primeros dígitos indican el valor numérico de la resistencia. El tercer dígito es el multiplicador por 10. Esto significa que si el número es 5 el multiplicador es 100000 (o 105), por lo tanto se agregan cinco ceros. Si el tercer número es 2, el multiplicador es 100 y así, según sea el caso. 
          .fcab25.p-4.mb-4
            p Así pues, 
            p.mb-0 Código 350 = 35 * 10<span class="exponent">0</span> = 35 Ω
            p.mb-0 Código 521 = 52 * 10<span class="exponent">1</span> = 520 Ω
            p.mb-0 Código 405 = 40 * 10<span class="exponent">5</span> = 4 MΩ
        .col-lg-5.mx-auto
          .titulo-sexto.color-acento-contenido
            span #[b Figura 10.] #[i Codificación de tres dígitos en resistores SMD o SMT.]
          figure
            img(src='@/assets/curso/t5/f7.svg' alt='imagen relacionada')
            figcaption Nota. Mora, R. (2018, noviembre 4).  

      p.my-5 En la siguiente figura se observan más ejemplos de la codificación de tres cifras. 
      .row.align-items-center
        .col-lg-7
          .titulo-sexto.color-acento-contenido
            span #[b Figura 11.] #[i Codificación de tres dígitos de resistores SMD.]
          figure
            img(src='@/assets/curso/t5/f8.png' alt='imagen relacionada')
          figcaption Nota. Mora, R. (2018, noviembre 4).
        .col-lg-5
          p Esta codificación se utiliza cuando se tienen resistores cuyo valor de resistencia es mayor que 10 𝛀, que corresponde al código 100. 
          p Ahora bien, si se tienen resistencias menores que 10 𝛀, se utiliza la letra R en el código. Así, si la resistencia es de 4.7 𝛀, su código será entonces 4R7. La letra R se ubica en donde va el punto decimal del valor de la resistencia. 
          .fcab25.p-4.mb-4
            p Así pues,<br>
            p.mb-0 Código 5R3 = 5.3 Ω
            p.mb-0 Código 37R = 37 Ω
            p.mb-0 Código R39 = 0.39 Ω 
            p.mb-0 Codificación de cuatro cifras en resistencias SMD o SMT
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.fcab
          span c
        | <b>Codificación de cuatro cifras en resistencias <em>SMD</em> o <em>SMT</em> de precisión</b>
    .col-lg-10.mx-auto
      p.mb-5 Cuando se requiere mayor precisión, la codificación de las resistencias se hace de una manera distinta. Se utilizan cuatro cifras, en la que los tres primeros dígitos indican el valor numérico del elemento y el cuarto dígito es el multiplicador por 10. Esta codificación se utiliza para valores mayores que 100 𝛀, que corresponde al código 1000. En resistencias mayores que dicho valor, se utiliza la letra R, similar al caso de la codificación a 3 cifras.
      .col-lg-7.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          span <b>Figura 12.</b> <em>Codificación de cuatro cifras en resistencias SMD o SMT de precisión.</em>
        figure 
          img(src='@/assets/curso/t5/f9.png' alt='imagen relacionada')
        figcaption Nota. Mora, R. (2018, noviembre 4).
    h3 Resistencia Equivalente
    p La resistencia eléctrica equivalente consiste simplemente en simplificar un circuito resistivo cualquiera, de más de una resistencia a una sola resistencia, que sustituye a las otras para facilitarnos los cálculos dentro de un circuito. En definitiva, es un artificio matemático por medio del cual se consigue estudiar el comportamiento de un circuito por medio de otro más simple con una sola resistencia.
    p El circuito equivalente obtenido, no es igual que el original, pero si serán iguales los parámetros totales como: voltaje total, corriente total y resistencia total o equivalente. Por ejemplo, en un circuito con varias resistencias, si se calcula la resistencia total del circuito, esta sería la resistencia equivalente, es decir, equivale a todas las resistencias del circuito.
    p.mb-5 Existen diferentes formas de circuitos resistivos que difieren según a como están conectadas las resistencias entre sí, estos son: circuito resistivo serie, circuito resistivo paralelo y circuito resistivo mixto.
    
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Circuito resistivo serie:
            p Un circuito con dos o más resistencias en serie es equivalente a otro con una sola resistencia cuyo valor se obtiene sumando todas las resistencias que forman parte del circuito y que se llamará resistencia total o equivalente. 
            p.mb-0 Según esto, para calcular la resistencia equivalente del circuito resistivo serie, solo hay que sumar el valor de cada una de las resistencias R1, R2 y R3.
            p Sí R1=10Ω, R2=20Ω y R3=30Ω.
            h5 Entonces,  
            p 𝑹𝒆𝒒= 𝑹𝟏+𝑹𝟐+𝑹𝟑= 𝟏𝟎Ω+𝟐𝟎Ω+𝟑𝟎Ω= 𝟔𝟎Ω
          .col-md-6
            figure
              img(src='@/assets/curso/t5/f-s1.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Circuito resistivo paralelo:
            p Un circuito con dos resistencias en serie es equivalente a otro con una sola resistencia cuyo valor se obtiene multiplicando el valor las dos resistencias y este resultado dividiéndolo por la suma de las mismas dos resistencias que forman parte del circuito y que se llamará resistencia total o equivalente. 
            p.mb-0 Según esto, para calcular la resistencia equivalente del circuito resistivo serie, solo hay que sumar el valor de cada una de las resistencias R1, R2 y R3.
            p Sí R1=10Ω y R2=20Ω.
            h5 Entonces,  
            div
              img(src='@/assets/curso/t5/f-auto.svg', alt='', style="width: auto")
          .col-md-6
            figure
              img(src='@/assets/curso/t5/f-s2.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Un circuito con dos o más resistencias en paralelo es equivalente a otro con una sola resistencia cuyo valor se obtiene sumando las conductancias (1/R) de cada uno de los valores de las resistencias del circuito y finalmente invirtiendo este resultado. 
            div
              img(src='@/assets/curso/t5/f-a2.svg', alt='', style="width: auto")
          .col-md-6
            figure
              img(src='@/assets/curso/t5/f-s3.svg', alt='')
        .row
          .col-12.mb-4.mb-md-0
            h4 Circuito resistivo mixto:
            p Un circuito con más dos resistencias, una en serie y otras en paralelo es equivalente a otro con una sola resistencia cuyo valor se obtiene desarrollando escalonadamente los grupos de resistencias que evidentemente están en serie y/o paralelo, bajo los métodos anteriormente enunciados, obteniendo de cada grupo resistencias equivalentes temporales que poco a poco van reduciendo el circuito hasta que se logre un único valor de resistencia total o equivalente al circuito resistivo inicial. En la figura se observa cómo se va reduciendo un circuito mixto resistivo de forma escalonada hasta llegar a una sola resistencia equivalente.
          .col-12
            figure
              img(src='@/assets/curso/t5/f-s4.svg', alt='')
    
    //SlyderB.mb-5(:datos="datosSlyder")
    
    Separador
    #t_5_2.titulo-segundo.color-acento-botones
      h2 5.2 Inductancia
    p Es el efecto que se genera en un conductor ante el paso de la corriente eléctrica, llamado reactancia inductiva. Igualmente, es la relación entre la cantidad de flujo magnético y el flujo de electrones que fluye a través de un inductor o bobina. 
    p La inductancia es representada con la letra L y la unidad de medida es el Henry o Henrio, el cual se representa con la letra H, se suelen emplear los submúltiplos miliHenrio (mH) y microHenrio (μH). y equivale a la inductancia que produce una tensión autoinducida de 1 voltio al variar constantemente su corriente a razón de 1 amperio en cada 1 segundo, como se indica en la siguiente expresión:
    .col-lg-5.mx-auto.mb-5
      img(src='@/assets/curso/t5/f18.png' alt='Imagen relacionada')
    .col-lg-10.mx-auto.mb-5
      h3 Inductor o bobina
      .row.mb-5
        .col-lg-6
          p Componente pasivo de un circuito eléctrico que almacena energía en forma de campo magnético debido al fenómeno de autoinducción. Por lo general, está constituido por una cabeza hueca de una bobina de material conductor, generalmente hilo o alambre de cobre esmaltado. Existe una gran variedad de inductores, entre los más conocidos, los de núcleo de aire que, para aumentar su capacidad de magnetismo, agregan un núcleo de material ferroso.
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            span <b>Figura 13.</b> <em>Bobina con núcleo.</em>
          figure
            img(src='@/assets/curso/t5/f19.png' alt='Bobina con núcleo')
          figcaption Nota. Freepng.es. (2020).
      p Los inductores se oponen a los cambios bruscos en la corriente que circula a través de ellos, generando una tensión (fem) de sentido contrario a su polaridad intentando contrarrestar ese cambio. Cuando un inductor es conectado a una corriente eléctrica continua o directa, este presenta inicialmente una resistencia, solo mientras el campo magnético se crea, y posteriormente no presenta prácticamente oposición al paso de corriente. El inductor mantendrá una tensión autoinducida para intentar mantener la corriente, cuando por una circunstancia se disminuye la tensión.
      p En un inductor la inductancia depende de:
      .row.mb-5
        .col-lg-6
          ul.lista-ul
            li 
              i.fas.fa-angle-right.cab
              span.mb-0 Cantidad de vueltas o número de arrollamientos o espiras en el inductor, entre más espiras mayor será su valor en Henrios ósea mayor inductancia.
            li 
              i.fas.fa-angle-right.cab
              span.mb-0 El tamaño o diámetro de los arrollamientos, a mayor diámetro de estos, mayor valor en Henrios ósea mayor inductancia.
            li 
              i.fas.fa-angle-right.cab
              span.mb-0  La longitud del alambre con el que está diseñada la bobina.
            li 
              i.fas.fa-angle-right.cab
              span.mb-0 El material con el que está constituido el núcleo, si lo hay.
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            span <b>Figura 14.</b> <em>Longitud de bobinas.</em>
          figure
            img(src='@/assets/curso/t5/f20.svg' alt='Bobina con núcleo')
            figcaption Nota. Torres, J. (2021). 
      .cac25.p-5
        p Para obtener el valor de inductancia de un inductor o bobina se debe de recurrir a la siguiente expresión:
        h3 <b>L = N<span class="exponent">2</span> &micro; S / l</b>
        p Donde,
        p <b>L:</b> valor de la inductancia (H).
        p <b>N:</b> número de espiras del inductor.
        p <b>μ:</b> permeabilidad del núcleo (Wb/A.m).
        p <b>S:</b> sección del núcleo (m²).
        p <b>𝑙:</b> longitud de líneas de flujo (m).
        p Si el inductor no posee núcleo, será la permeabilidad del aire.
        p Dependiendo de la intensidad que recorre la bobina, se creará proporcionalmente un campo de flujo magnético.
        p En este caso se puede decir que:
        p <b>Φ = L x I</b>
        p Donde,
        p <b>Φ:</b> es el flujo magnético.
        p <b>I:</b> la intensidad de la bobina.
        p <b>L:</b> la inductancia.
        p Esta es otra representación que se tiene para el cálculo de la inductancia (L).
      p Es importante tener en cuenta que cualquier conductor tiene una inductancia, incluso cuando este no forma una parte de un inductor. La inductancia de un simple hilo o alambre recto es pequeña, pero no despreciable si la corriente que pasa por él cambia con rapidez, ya que el voltaje inducido puede ser apreciable.
      h3 Aplicaciones de los inductores
      ul.lista-ul.mb-5
        li 
          i.fas.fa-angle-right.cab
          span.mb-0 Una gran aplicación de los inductores es la creación de transformadores para permitir aumentar o disminuir voltajes de corriente alterna.
        li 
          i.fas.fa-angle-right.cab
          span.mb-0 Una aplicación interesante es la utilización como inductor en los autos, el cual forma parte del sistema de ignición.
        li 
          i.fas.fa-angle-right.cab
          span.mb-0 Como elemento adicional el cual está junto al tubo y que usualmente se llama balastro en los sistemas de iluminación con tubos fluorescentes.
        li 
          i.fas.fa-angle-right.cab
          span.mb-0 Para filtrar voltajes rizo restantes de corriente alterna AC rectificada y solo adquirir corriente continua o directa CC en la salida, en las fuentes de alimentación.
        li 
          i.fas.fa-angle-right.cab
          span.mb-0 Se usan inductores en paralelo con un capacitor, para crear sintonizadores por medio de circuitos resonantes como sintonizadores en receptores de radio o televisión, el cual permite la sintonía de emisoras o canales de televisión.
      h3 Tipos de bobinas
      //.titulo-sexto.color-acento-contenido
      //  span <b>Figura 17.</b> <em>Bobinas alambradas, impresas y con código de colores.</em>
      figure
        img(src='@/assets/curso/t5/f21.png' alt='Imagen relacionada')
      .cajon.color-primario.p-3.mb-3.mt-3
        p.mb-0 Son varios los tipos de bobina que existen. Principalmente se encuentran alambradas, impresas y con código de colores. 
      hr.my-4 
      h3 Inductores o bobinas en serie
      .row.mb-5
        .col-lg-8
          p En la siguiente figura, se observan tres bobinas conectadas en serie.
          p La suma de los valores de inductancias equivale a la inductancia total (o bobina equivalente) del arreglo, que en este caso es:
          p LT = L1 + L2 + L3
          p En general, para calcular el valor de la inductancia total (o bobina equivalente) de un arreglo de inductores o bobinas en serie, se deben sumar los valores de inductancia individuales. La expresión matemática es:
          p LT = L1 + L2 + L3 +…+ LN		
          p donde N es el número de bobinas o inductores conectados.
        .col-lg-4
          .titulo-sexto.color-acento-contenido
            span <b>Figura 15.</b> <em>Arreglo de Bobinas en serie.</em>
          figure
            img(src='@/assets/curso/t5/f22.svg' alt='Imagen relacionada')
            figcaption Nota. Componentes pasivos (s.f).
      hr 
      h3 Inductores o bobinas en paralelo
      .row.mb-5
        .col-lg-6
          p Para obtener valores de bobina o inductor equivalente de varios inductores conectados en paralelo, se hace un procedimiento similar al que se hace cuando se trabaja con resistencias igualmente en paralelo. En este ejemplo se presentan 3 bobinas en paralelo, pero el procedimiento se puede realizar para un sinnúmero de inductores conectados, con la siguiente expresión:
          p 1/LT = 1/L1 + 1/L2 + 1/L3 + … 1/LN		
          p donde N es el número de bobinas conectadas en paralelo.
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            span <b>Figura 16.</b> <em>Inductores o bobinas en paralelo.</em>
          figure
            img(src='@/assets/curso/t5/f23.svg' alt='Imagen relacionada')
    Separador
    #t_5_3.titulo-segundo.color-acento-botones
      h2 5.3 Capacitancia
    p.mb-5 Reactancia capacitiva en la corriente eléctrica. Capacidad que tiene un componente, cuerpo, circuito, etc., para acumular y mantener energía en forma de carga eléctrica. La capacitancia es una magnitud que expresa la cantidad de energía eléctrica almacenada para un voltaje proporcionado. El componente más habitual que acumula energía es el capacitor o condensador.
    .col-lg-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span <b>Figura 17.</b> <em>Capacitor sencillo.</em>
      figure
        img(src='@/assets/curso/t5/f24.svg' alt='Imagen relacionada')
        figcaption Nota. Magallanes Sandoval, J. (2010). 
    p.mb-5 La correlación entre el voltaje, o tensión, que existe entre las placas de un capacitor y la carga eléctrica acumulada en este, se detalla con la siguiente fórmula matemática:
    .col-lg-10.mx-auto
      .fcab25.p-5.mb-5
        .col-lg-2.mx-auto.mb-4
          img(src='@/assets/curso/t5/f24.png' alt='Imagen relacionada')
        p donde:
        p <b>C:</b>	es la capacidad, medida en faradios; esta unidad es relativamente grande y suelen utilizarse submúltiplos como el microfaradio (μf), nanofaradio (nf) o picofaradio (pf).
        p <b>q:</b>	es la carga eléctrica almacenada, medida en culombios.
        p <b>V:</b>	la diferencia de potencial (o tensión), medida en voltios.
    h3 Condensador o capacitor
    .col-lg-10.mx-auto
      p El primer capacitor en la historia de la electricidad es la botella de Leyden.
      .row.mb-5
        .col-lg-4
          .titulo-sexto.color-acento-contenido
            span <b>Figura 18.</b> <em>Botella de Leyden.</em>
          figure
            img(src='@/assets/curso/t5/f25.png' alt='Imagen relacionada')
            figcaption Nota. CIENCIA FÁCIL (s.f). 
        .col-lg-8
          p Un condensador o capacitor es un componente que acumula carga eléctrica. El capacitor se constituye de dos placas, usualmente metálicas, que están apartadas por un material dieléctrico o aislante, el cual puede ser aire u otro material que no permita que estas partes metálicas tengan contacto. Tiene una similitud a una batería simple, pero el capacitor únicamente acumula energía, ya que no puede generarla. Los capacitores se miden en faradios (f), pudiéndose encontrar capacitores que se dan en microfaradios (uf), picofaradios (pf) y nanofaradios (nf).
          p Cabe recalcar que la capacitancia siempre será una magnitud positiva y esta depende de la contextura del condensador o capacitor ya sea de las láminas paralelas, si es cilíndrico o esférico. Otra variable del que depende este es del material dieléctrico que se utiliza entre las dos placas del capacitor. Entre más alta sea la constante dieléctrica del material aislante utilizado, mayor es la capacitancia. En la práctica, el comportamiento eléctrico del capacitor se enuncia mediante la siguiente ecuación diferencial, la cual se obtiene derivando respecto al tiempo la ecuación anterior.
      .row.mb-5
        .col-lg-6.cac25.p-4
          .col-lg-5
            img(src='@/assets/curso/t5/f26.png' alt='Imagen relacionada')
          p Donde I equivale a corriente dada en amperios.
          .col-lg-4
            img(src='@/assets/curso/t5/f27.png' alt='Imagen relacionada')
          p Donde,
          p <b>C:</b> es la capacidad, en faradios.
          p <b>A:</b> es el área de las placas, en metros cuadrados.
          p <b>ε:</b> es la permitividad.
          P <b>d:</b> es la separación entre las placas, en metros.
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            span <b>Figura 19.</b> <em>Capacitor excitado.</em>
          figure
            img(src='@/assets/curso/t5/f28.svg' alt='Imagen relacionada')
          figcaption Nota. AREATECNOLOGIA (s.f.). 
    h3 Aplicaciones de un capacitor
    ul.lista-ul.mb-5
      li 
        i.fas.fa-angle-right.cab
        span.mb-0 Descargas rápidas, como un Flash, en donde el capacitor se tiene que evacuar su carga a gran velocidad para generar un flasheo necesario, esto se logra con facilidad mediante la conexión en paralelo con una resistencia de bajo ohmiaje.
      li 
        i.fas.fa-angle-right.cab
        span.mb-0 Para eliminar el "rizado" que se crea en el proceso de la rectificación de voltaje en la conversión de voltaje alterno Vac a voltaje continuo o directo Vdc
      li 
        i.fas.fa-angle-right.cab
        span.mb-0 Un capacitor, idealmente, tiene un comportamiento como el de un corto circuito ante una señal de corriente alterna AC y como un circuito abierto para señales de corriente continua o directa CC. Este comportamiento lo hace óptimo para aislar etapas o áreas de un circuito.
    h3 Condensadores en serie
    .row.mb-5
      .col-lg-6
        p En la figura puede observarse que se conectan cuatro capacitores en serie, con el fin de obtener el condensador o capacitor equivalente, mediante la utilización de la expresión:
        p 1/CT = 1/C1 + 1/C2 + 1/C3 + 1/C4 
        p Si se desea realizar el cálculo de más de dos capacitores conectados en serie, se puede hacer con ayuda de la siguiente fórmula: 1 / CT = 1 / C1 + 1 / C2 + ...+ 1 / CN
        p donde N es el número de capacitores.
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          span <b>Figura 20.</b> <em>Condensadores en serie.</em>
        figure
          img(src='@/assets/curso/t5/f29.svg' alt='Imagen relacionada')
          figcaption  Nota. SENA (2021). 

    h3 Condensadores en paralelo
    .row.align-items-center
      .col-lg-6.mb-5
        .titulo-sexto.color-acento-contenido
          span <b>Figura 21.</b> <em>Condensadores en paralelo.</em>
        figure
          img(src='@/assets/curso/t5/f30.svg' alt='Imagen relacionada')
      .col-lg-6
        p En la figura se puede observar que se conectan 4 condensadores en paralelo, para obtener el condensador o capacitor equivalente se utiliza la siguiente expresión:
        p CT = C1 + C2 + C3 + C4
        p Si se desea realizar el cálculo para cualquier número de capacitores en paralelo, se puede obtener esto con la ayuda de la siguiente expresión:
        p CT = C1 + C2 + ...+ CN		donde N es el número de condensadores.
        p.mb-5 Para obtener el capacitor equivalente de conexión de condensadores en paralelo, solo basta con sumar cada uno de sus valores de capacitancia.

    h3 Tipos de capacitores o condensadores
    .col-lg-5.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span <b>Figura 22.</b> <em>Tipos de capacitores.</em>
      figure
        img(src='@/assets/curso/t5/f31.svg' alt='Imagen relacionada')
        figcaption Nota. Circuitos Listos (2002, agosto 22). 
    .col-lg-10.mx-auto.mb-5
      h4 Capacitores fijos
      p Son de capacidad fija, cuyo valor no se puede modificar y está determinado por el fabricante. El tipo de dieléctrico utilizado para su construcción define sus características principales y el tipo tales como:
      .col-lg-8.mx-auto.mb-5
        ul.lista-ul
          li 
            i.fas.fa-angle-right.cab
            span.mb-0 Cerámicos
          li 
            i.fas.fa-angle-right.cab
            span.mb-0 Plástico
          li 
            i.fas.fa-angle-right.cab
            span.mb-0 Mica
          li 
            i.fas.fa-angle-right.cab
            span.mb-0 Electrolíticos
          li 
            i.fas.fa-angle-right.cab
            span.mb-0 De doble capa eléctrica
    hr.my-5
    .col-lg-10.mx-auto.mb-5
      h3 Capacitores cerámicos
      p La cerámica creada a partir del dióxido de titanio es el dieléctrico comúnmente utilizado por estos Capacitores. Este material le da características de inestabilidad al condensador por lo que en base al material se hace la clasificación de dos grupos:
      .col-lg-8.mx-auto.mb-5
        p Grupo I: coeficiente de temperatura mejor definido y casi constante y caracterizados por una alta estabilidad.
        p Grupo II: de características no lineales, coeficiente de temperatura prácticamente no definido, los valores de capacitancia varían considerablemente con la temperatura, el voltaje y uso. Tiene una elevada permitividad.
      p Tiene amplias posibilidades de diseño mecánico y eléctrico gracias a las altas constantes dieléctricas que permite las características de la cerámica.
    hr.my-5
    .col-lg-10.mx-auto.mb-5
      h3 Capacitores de plástico
      .row.align-items-center
        .col-lg-6
          p Son condensadores con altas resistencias de aislamiento y elevadas temperaturas de trabajo. Se pueden diferenciar entre los de tipo k y tipo MK, el cual es determinado por el proceso de fabricación que está regido por el material utilizado para su armadura, en el caso uno de metal y en el caso dos metal vaporizado.
          p Se pueden distinguir estos tipos comerciales según el dieléctrico utilizado:
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            span #[b Tabla 9.] #[i Características típicas de los capacitores de plástico.] 
          figure
            img(src='@/assets/curso/t5/f32.png' alt='Imagen relacionada')
      .col-lg-10.mx-auto.mt-4
        p En donde se definen las siguientes siglas:
      .col-lg-10.mx-auto.mb-5.fcab25.p-4
        p #[b KS.]	Styroflex. Compuesto por un dieléctrico es de poliestireno más láminas de metal.
        p #[b KP.]	Compuesto por dieléctrico de polipropileno más láminas de metal.
        p #[b MKP.]	Compuesto por dieléctrico de polipropileno y armaduras de metal vaporizado.
        p #[b MKY.]	Compuesto por dieléctrico de polipropileno de alta eficiencia y láminas de metal vaporizado.
        p #[b MKT.]	Compuesto por dieléctrico de teraftalato de polietileno (poliéster), más láminas de metal vaporizado.
        p #[b MKC.]	Makrofol. Compuesto por dieléctrico de policarbonato más metal vaporizado para las armaduras.
      //p.mb-5 A nivel orientativo en la figura anterior se pueden observar las características típicas de los capacitores de plástico: 
    
    .col-lg-10.mx-auto.mb-5
      p.mb-5 Las características típicas de los capacitores de plástico se relacionan a continuación:  
      .row.mb-5
        .col-12.mb-5.mb-md-0
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Capacitores de Mica") 
              .col-12
                p El dieléctrico utilizado es la mica o silicato de aluminio y potasio para este tipo de capacitores. Estos se destacan por sus pequeñas pérdidas, ancho rango de frecuencias y estabilidad alta ante la temperatura y el tiempo de uso.
            .row(numero="2" titulo="Capacitores electrolíticos") 
              .col-12
                p Capacitores donde una de las armaduras está constituida por un conductor iónico o electrolito y la otra es de metal. Son de altos valores capacitivos respecto al tamaño y regularmente vienen polarizados. Se pueden distinguir dos tipos:
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right.cab
                    span.mb-0 Electrolíticos de aluminio: el electrolito de tetraborato armónico con una armadura metálica de aluminio.
                  li 
                    i.fas.fa-angle-right.cab
                    span.mb-0 Electrolíticos de tántalo: son de valores capacitivos más altos respecto a los anteriores para un mismo tamaño. El dieléctrico está constituido por óxido de tántalo. Por otra parte, su costo es más elevado y las tensiones nominales que soportan son menores que los de aluminio.
            .row(numero="3" titulo="Capacitores de doble capa eléctrica") 
              .col-12
                p  Capacitores de gran capacidad por unidad de volumen a esto se le debe el nombre de súper capacitores o CAEV y no usan dieléctrico por lo que son muy delgados. Desde el punto de su aplicación como fuente acumulada de energía dentro de sus características eléctricas más significativas se tiene: Altos valores capacitivos tamaños reducidos, bajas corrientes de fugas, alta resistencia serie, y pequeños valores de tensión.
    hr.my-5
    .col-lg-10.mx-auto.mb-5  
      h3 Capacitores variables
      p Capacitores con la particularidad de poder variar su capacitancia. Hay capacitores variables cuya aplicación conlleva a variaciones de frecuencias en un circuito de manera frecuente, por ejemplo, sintonizadores; y Capacitores de ajuste, comúnmente llamados trimmers, que normalmente son ajustados una sola vez en la placa para aplicaciones de reparación y puesta a punto. El desplazamiento mecánico entre las placas enfrentadas es lo que permite esta variación de la capacitancia.
      p La forma constructiva de las placas enfrentadas es la que determina la relación con que varían su capacidad respecto al ángulo de rotación viene determinada, obedeciendo diferentes leyes de variación como la lineal, logarítmica y cuadrática corregida.
      .col-lg-10.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          span <b>Figura 23.</b> <em>Capacitores variables.</em>
        img(src='@/assets/curso/t5/f33.png' alt='Imagen relacionada').mb-5
    Separador
    #t_5_4.titulo-segundo.color-acento-botones
      h2 5.4 Fuentes independientes
    p.mb-5 Las fuentes de corriente son aquellas que suministran una corriente constante al circuito o resistencia que se les conecte. Por tanto, si cambia el valor de la resistencia de carga, la fuente aumenta o disminuye la diferencia de potencial entre sus terminales, de tal forma para conservar constante la corriente por esa resistencia. 
    SlyderE.mb-5(indicadores="derecha")
      .row
        .col-md-5.mb-4.mb-md-0
          h5 Fuentes de tensión o voltaje,  independientes
          p Son las fuentes de alimentación más habituales que hallamos en prácticamente la mayoría de circuitos. Entre sus terminales se suministra un voltaje, o tensión, constante, por tal razón la corriente que suministra depende del valor de la resistencia del circuito o de la resistencia de carga que se conexione.
          p Un ejemplo claro de esto es que si  poseemos una fuente de voltaje de 12 V y le conectamos una resistor de 2 Ω, circularán por el resistor 6 amperios. Si por el contrario se conecta un resistor de 6 ohm, circularán 2 amperios. Pero siempre la tensión entre los terminales de la fuente es constante. 
          p El valor de voltaje suministrado es independiente del valor de la carga que se conecte. Las fuentes de tensión se simbolizan con dos líneas de diferente tamaño, correspondiendo la más grande al polo positivo.
        .col-md-7
          figure
            img(src='@/assets/curso/t5/f34.svg', alt='')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 Fuentes de corriente independientes
          p Las fuentes de corriente son aquellas que suministran un flujo de electrones constante al circuito o resistor que se les conecte. Por lo tanto, si cambia el valor del resistor de carga, la fuente aumenta o disminuye el voltaje entre sus terminales, de tal forma, para conservar constante la corriente por esa resistencia.
          p El valor de corriente relacionado por la fuente es constante independientemente del valor de la carga conectada.
        .col-md-7
          figure
            img(src='@/assets/curso/t5/f35.svg', alt='')
    //SlyderB.mb-5(:datos="datosSlyder2")
    Separador
    #t_5_5.titulo-segundo.color-acento-botones
      h2 5.5 Fuentes dependientes
    SlyderE.mb-5(indicadores="derecha")
      .row
        .col-md-5.mb-4.mb-md-0
          h5 Fuente de voltaje dependiente
          p Una fuente de voltaje dependiente o controlada es aquella cuyo voltaje entre sus terminales depende de, o la controlan, un voltaje o una corriente existentes en algún otro lugar del circuito. Una fuente de voltaje controlada por voltaje (FVCV) es una fuente de voltaje controlada por un voltaje determinado y una fuente de voltaje controlada por corriente (FVCC) es una fuente controlada por una corriente ya establecida.
        .col-md-7
          figure
            img(src='@/assets/curso/t5/f36.svg', alt='')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 Fuente de corriente dependiente
          p Una fuente de corriente dependiente o controlada es aquella cuya corriente depende de un voltaje o una corriente existente en un lugar cualquiera del circuito. Una fuente de corriente controlada por voltaje (FCCV) está controlada por un voltaje determinado y una fuente corriente controlada por corriente (FCCC) está controlada por una corriente ya establecida.
        .col-md-7
          figure
            img(src='@/assets/curso/t5/f37.svg', alt='')
    //SlyderB.mb-5(:datos="datosSlyder3")
    p Las cantidades μ y β son constantes adimensionales, llamadas habitualmente ganancia en voltaje o corriente respectivamente. Las constantes r y g tienen unidades de Ohm y Mho respectivamente.
    p Las fuentes dependientes son componentes fundamentales en el análisis de circuitos amplificadores. También desempeñan otras funciones, tales como aislar una etapa determinada de un circuito del resto de la red o entregar una resistencia negativa.
    p Como se sabe, el resistor es un elemento pasivo con resistencia positiva. Sin embargo, por medio de las fuentes dependientes se pueden fabricar resistencias negativas.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Capítulo 1 (artículos 1 al 8)',
        texto:
          '<p>Disposiciones generales.</p><p>En este capítulo se establecen el campo de aplicación y excepciones del reglamento así como las definiciones, simbología y unidades usadas.</p><p>También se determinan los requisitos mínimos que deben incluir el plan de comunicaciones y el programa de seguridad y salud ocupacional de cualquier persona natural o jurídica que desarrolle actividades relacionadas con la construcción, operación y mantenimiento de instalaciones de energía eléctrica sin perjuicio de lo establecido en la resolución 5018 de 2019 expedida por el ministerio de trabajo posterior a la publicación del RETIE.</p>',
        imagen: require('@/assets/curso/t5/f10.png'),
      },
      {
        titulo: 'Capítulo 2 (artículos 9 al 19)',
        texto:
          '<p>Requisitos técnicos esenciales.</p><p>En este capítulo se describe una metodología para evaluar los riesgos de origen eléctrico y las competencias laborales requeridas para intervenir instalaciones eléctricas, se clasifican por niveles las magnitudes de las tensiones de servicio, se establecen las distancias de seguridad de acuerdo a cada nivel, se especifican los valores límites de exposición a campos electromagnéticos y los componentes del sistema de protección contra rayos, se determina la organización y el procedimiento de trabajo tanto para redes energizadas y desenergizadas (Reglas de oro).</p>',
        imagen: require('@/assets/curso/t5/f11.png'),
      },
      {
        titulo: 'Capítulo 3 (artículos 20.1 al 20.29)',
        texto:
          '<p>Requisitos de productos</p><p>En este capítulo se establece el listado de productos objeto del RETIE, es decir los de mayor utilización en instalaciones eléctricas, y los criterios y requisitos que deben cumplir y demostrar cada uno de ellos mediante certificado de conformidad de producto expedido por un organismo de certificación acreditado.</p>',
        imagen: require('@/assets/curso/t5/f12.png'),
      },
      {
        titulo: 'Capítulo 4 (artículos 21.1 al 21.7)',
        texto:
          '<p>Requisitos para el proceso de generación</p><p>En este capítulo se define Central o planta de generación como el conjunto de instalaciones que contienen máquinas, generadores, motores, aparatos de control, maniobra, protección y medida, que sirven para la producción de energía eléctrica, distintas a las consideradas como plantas de emergencia y se establecen los requisitos aplicables exclusivamente al proceso de generación propiamente dicho.</p><p>Sin embargo, al definirse de esta manera, una central de generación tiene implícitos los procesos de transmisión, transformación, distribución y uso final y por lo tanto debe cumplir adicionalmente con los requisitos de cada proceso que le sean aplicables.</p>',
        imagen: require('@/assets/curso/t5/f13.png'),
      },
      {
        titulo: 'Capítulo 5 (artículos 22.1 al 22.13)',
        texto:
          '<p>Requisitos para el proceso de transmisión</p><p>En este capítulo se establecen los requisitos que deben cumplir las líneas eléctricas aéreas de alta y extra alta tensión de corriente alterna trifásica a 60 Hz de frecuencia nominal.</p><br><h3>Capítulo 6 (artículos 23 al 24)</h3><p>Requisitos para el proceso de transformación (subestaciones)</p><p>En este capítulo se establecen los requisitos que deben cumplir las subestaciones con tensiones nominales superiores a 1 kV, entendiéndose por subestación a el conjunto de equipos utilizados para transferir el flujo de energía en un sistema de potencia, garantizar la seguridad del sistema por medio de dispositivos automáticos de protección y para redistribuir el flujo de energía a través de rutas alternas durante contingencias.</p>',
        imagen: require('@/assets/curso/t5/f14.png'),
      },
      {
        titulo: 'Capítulo 7 (artículos 25 al 26)',
        texto:
          '<p>Requisitos para el proceso de distribución</p><p>En este capítulo se establecen los requisitos que deben cumplir las redes de distribución definidas como todo conjunto de aparatos y de circuitos asociados para transporte y transformación de la energía eléctrica, cuyas tensiones nominales sean iguales o superiores a 120 V y menores a 57,5 kV.</p><br><h3>Capítulo 8 (artículos 27 al 30)</h3><p>Requisitos para instalaciones de uso final</p><p>En este capítulo se establecen los requisitos que deben cumplir las instalaciones eléctricas destinadas a la conexión de equipos o aparatos para el uso final de la electricidad y en todo tipo de construcciones, ya sean de carácter público o privado.</p><br><a href="downloads/grafico3.pdf" class="anexo"><div class="anexo__icono"><img class="iconoPdf"></div><div data-v-a692d57c="" class="anexo__texto"><p data-v-a692d57c="">Anexo. Notación científica</p></div></a>',
        imagen: require('@/assets/curso/t5/f15.png'),
      },
      {
        titulo: 'Capítulo 9 (artículos 31.1 al 31.4)',
        texto:
          '<p>Prohibiciones</p><p>En este capítulo por considerarse contrario a los principios y objetivos del RETIE, se prohíbe la comercialización y uso de pararrayos radiactivos y productos que contengan compuestos orgánicos persistentes, el uso de materiales o artefactos reutilizados o remanufacturados en instalaciones de uso final y el uso de la tierra como único conductor de retorno. </p><br><h3>Capítulo 10 (artículos 32 al 35)</h3><p>Demostración de la conformidad</p><p>En este capítulo se establecen y describen los mecanismos de evaluación de conformidad de las instalaciones eléctricas con el RETIE</p>',
        imagen: require('@/assets/curso/t5/f16.png'),
      },
      {
        titulo: 'Capítulo 11 (artículos 36 al 37)',
        texto:
          '<p>Vigilancia, control y régimen sancionatorio</p><p>En este capítulo se establecen las entidades encargadas de la vigilancia y control del cumplimiento del RETIE y las sanciones aplicables en caso de incumplimiento</p><br><h3>Capítulo 12 (artículos 38.1 al 38.4)</h3><p>Disposiciones transitorias. Aquí, se establecen los periodos de tiempo a partir de la entrada en vigencia del RETIE para la exigencia del cumplimiento de algunos requisitos.</p><br><h3>Capítulo 13 (artículo 39)</h3><p>Revisión y actualización. Se establece que el Ministerio de Minas y Energía de Colombia es el órgano competente para la elaboración, revisión, actualización, interpretación y modificación del RETIE, lo cual lo podrá hacer de oficio o por solicitud de terceros.</p>',
        imagen: require('@/assets/curso/t5/f17.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Fuentes de tensión o voltaje,  independientes',
        texto:
          '<p>Son las fuentes de alimentación más habituales que hallamos en prácticamente la mayoría de circuitos. Entre sus terminales se suministra un voltaje, o tensión, constante, por tal razón la corriente que suministra depende del valor de la resistencia del circuito o de la resistencia de carga que se conexione.</p><p>Un ejemplo claro de esto es que si  poseemos una fuente de voltaje de 12 V y le conectamos una resistor de 2 Ω, circularán por el resistor 6 amperios. Si por el contrario se conecta un resistor de 6 ohm, circularán 2 amperios. Pero siempre la tensión entre los terminales de la fuente es constante.</p><p>El valor de voltaje suministrado es independiente del valor de la carga que se conecte. Las fuentes de tensión se simbolizan con dos líneas de diferente tamaño, correspondiendo la más grande al polo positivo.</p>',
        imagen: require('@/assets/curso/t5/f34.svg'),
      },
      {
        titulo: 'Fuentes de corriente independientes',
        texto:
          '<p>Las fuentes de corriente son aquellas que suministran un flujo de electrones constante al circuito o resistor que se les conecte. Por lo tanto, si cambia el valor del resistor de carga, la fuente aumenta o disminuye el voltaje entre sus terminales, de tal forma, para conservar constante la corriente por esa resistencia.</p><p>El valor de corriente relacionado por la fuente es constante independientemente del valor de la carga conectada.</p>',
        imagen: require('@/assets/curso/t5/f35.svg'),
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Fuente de voltaje dependiente',
        texto:
          'Una fuente de voltaje dependiente o controlada es aquella cuyo voltaje entre sus terminales depende de, o la controlan, un voltaje o una corriente existentes en algún otro lugar del circuito. Una fuente de voltaje controlada por voltaje (FVCV) es una fuente de voltaje controlada por un voltaje determinado y una fuente de voltaje controlada por corriente (FVCC) es una fuente controlada por una corriente ya establecida.',
        imagen: require('@/assets/curso/t5/f36.svg'),
      },
      {
        titulo: 'Fuente de corriente dependiente',
        texto:
          'Una fuente de corriente dependiente o controlada es aquella cuya corriente depende de un voltaje o una corriente existente en un lugar cualquiera del circuito. Una fuente de corriente controlada por voltaje (FCCV) está controlada por un voltaje determinado y una fuente corriente controlada por corriente (FCCC) está controlada por una corriente ya establecida.',
        imagen: require('@/assets/curso/t5/f37.svg'),
      },
    ],
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
