<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Naturaleza eléctrica de la materia
    .col-lg-8.mx-auto
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Los antiguos griegos observaron que el ámbar (ellos lo llamaban Elektrón) frotado con lana atraía cuerpos ligeros; en este momento se puede afirmar que el ámbar está electrizado, dado que posee carga eléctrica o bien que está cargado. Actualmente es utilizada la ebonita (material elástico negro utilizado como aislante) que al friccionar con piel atrae por un pequeño instante objetos pequeños. 
          .col-lg-3.mb-4.mb-lg-0.mx-auto
            img(src='@/assets/curso/t2/f1.svg' alt='Rayo')
    .col-lg-10.mx-auto
      p Al hablar de materia es importante también conocer sus estados, ya que es todo lo que está en el  entorno y que incita los sentidos de diferentes maneras. Ella se forma a través de un sinfín de sustancias que llenan un espacio y cada uno tiene sus distintivos y propiedades físicas y químicas, como ejemplo se tiene:
    hr
    .row.mb-4
      .col-lg-4
        .fagc.p-4
          p.mb-0 <b>Agua:</b>	estado líquido, (fluido).<br><b>Hierro:</b>	estado sólido, (contextura dura).<br><b>Oxígeno:</b>	estado gaseoso, (gas volátil).
      .col-lg-8
        p La materia se puede encontrar en un estado puro o en estado compuesto. Se tiene claro que está en estado puro, cuando se subdivide en partículas muy pequeñas y se evidencia que todas ellas son homogéneas y únicas, a éstas se le denominan: átomos. En estado compuesto indica que es materia cuya composición se basa en varios elementos puros y juntos, ósea, separándolos en su mínima expresión, así se evidencia que su partícula mínima es heterogénea o que está formada por diferentes átomos. A la mínima expresión física de la materia compuesta, se le denomina: molécula.
    hr
    .col-lg-10.mx-auto.fagc.p-5.mb-5
      .row.align-items-center
        .col-lg-6
          h4 Ejemplo:
          p La molécula del agua posee 3 elementos, 2 de Hidrógeno y 1 de Oxígeno; su expresión ya popular por todos es: H2O,  dicho de otra forma, el agua está compuesta por 3 átomos, dos de hidrógeno, elemento puro, y uno de oxígeno, elemento puro.
        .col-lg-4.mx-auto           
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='Molécula del agua')
    #t_2_1.titulo-segundo
      h2 2.1 Teoría atómica
    p.mb-5 Es una teoría de la naturaleza de la materia. Todas las sustancias materiales están compuestas de partículas diminutas o átomos de un número relativamente pequeño y de diferentes tipos, todos los átomos del mismo tipo son uniformes en tamaño, peso y otras propiedades.
    h3 El átomo
    p.mb-5 Es la expresión de la materia, más pequeña o mínima, en que un elemento se puede subdividir. Existen tantas clases diferentes de átomos como elementos libres. Se puede hablar de átomos de carbono, de oxígeno, de cloro, etc., porque estas sustancias son elementos. No sería correcto hablar de un átomo de agua o de sal, porque el agua o la sal no son elementos.
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Estructura")
        .row
          .col-md-5.mb-4.mb-md-0.mx-auto
            h4 Estructura
            p La idoneidad de un material para conducir electricidad está en estrecha relación con la estructura atómica. Así pues, todo lo referente a la electricidad lleva en último término a los componentes primarios de la materia: los átomos.
            p Los átomos constan de varias clases de partículas, cuya pequeñez impide verlas siquiera con los microscopios más potentes.
            .fagc.p-4
              p.mb-0 Estas clases de partículas son: el protón, el neutrón y el electrón. 
          .col-md-5.mx-auto
            figure
              img(src='@/assets/curso/t2/f3.svg', alt='Estructura del átomo')
      .py-3.py-md-4(titulo="Tamaño")
        .row
          .col-md-5.mb-4.mb-md-0.mx-auto
            h4 Estructura del átomo
            p El diámetro de un átomo es tan pequeño que en un espacio de 1mm caben alrededor de 3 millones de átomos alineados. Dada esta pequeñez se hace uso de representaciones en forma de modelo.
            .fagc.p-4
              p.mb-0 Niels Bohr concibe el átomo como un sistema solar en miniatura.
          .col-md-5.mx-auto
            figure
              img(src='@/assets/curso/t2/f4.svg', alt='El átomo según modelo Niels Bohr')
      .py-3.py-md-4(titulo="Ejemplo: átomo helio")
        .row
          .col-md-5.mb-4.mb-md-0.mx-auto
            h4 Ejemplo: átomo helio
            p Caracterización del gas de helio:
            p <b>Protones:</b> cargas eléctricas positivas. (El átomo de helio posee dos).
            p <b>Neutrones:</b> no poseen cargas eléctricas, como su nombre lo indica. (El átomo de helio posee dos).
            p <b>Electrones:</b> cargas eléctricas negativas. (El átomo de helio posee dos)
          .col-md-5.mx-auto
            figure
              img(src='@/assets/curso/t2/f5.svg', alt='Estructura física del átomo de Helio')
      .py-3.py-md-4(titulo="Ejemplo: átomo oxígeno")
        .row
          .col-md-5.mb-4.mb-md-0.mx-auto
            h4 Ejemplo: átomo oxígeno
            p Si un átomo posee la misma cantidad de electrones que de protones, se dice que el átomo está equilibrado o neutro. Teóricamente se dice que la asociación de un protón y un electrón forma un neutrón. Un átomo se vuelve IÓN positivo, cuando éste pierde uno o más electrones. Cuando el átomo gana electrones (concedidos por otro átomo), se le denomina IÓN negativo.
          .col-md-3.mx-auto
            figure
              img(src='@/assets/curso/t2/f6.svg', alt='Átomo de oxígeno')
      .py-3.py-md-4(titulo="Materia prima")
        h4 Materia prima
        p <b>¿Cómo utilizar la energía contenida en el átomo?</b><br>Se sabe de la existencia de átomos que poseen 32 electrones o más, distribuidos en varios niveles. Y a su vez que los electrones se despegan de las últimas órbitas de la estructura del átomo. En resumen, el átomo posee una valiosa carga eléctrica negativa denominada electrón, la cual es la que se utiliza como materia prima de la electrónica, y estos se desplazan a una velocidad de 300.000 kilómetros por segundo.
        p <b>Niveles de energía.</b><br>En electrónica, una órbita es un nivel de energía. Los electrones que estén ubicados en órbitas junto al núcleo, tienen poco nivel de energía; por el contrario, cuando el electrón está en una órbita distante al núcleo del átomo, este electrón posee mucha energía.
        p <b>Obtención de energía de un átomo.</b><br>Con solo hacer pasar los electrones de las órbitas interiores a las órbitas más exteriores bastará para que se pueda obtener energía. Para lograr esto, primero el átomo deberá ser sometido a ciertos tipos de procedimientos como pueden ser: presión o vibración física, fricción o roce, reacción química, luz,  calor o Influencia magnética.
    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Tipos de enlace molecular
    .col-lg-10.mx-auto
      p.mb-5 Son los diferentes tipos de fuerzas existentes entre los átomos cuando se ha formado un sistema estable. Igualmente, se puede enunciar como el proceso químico encargado de las interacciones significativas entre átomos y moléculas, y que otorga estabilidad a los compuestos químicos diatómicos y poliatómicos. La ilustración de tales fuerzas atractivas es un área compleja que está definida por las leyes de la química cuántica.
      LineaTiempoD.mb-5
        .row(numero="1" titulo="Enlace iónico")
          p Enlace iónico (o enlazamiento iónico) se define como el efecto de transferencia de electrones (o paso de electrones) de un átomo a otro. El enlace iónico se genera entre un átomo electropositivo y uno electronegativo. El átomo electropositivo concede sus electrones y el átomo electronegativo los admite, como consecuencia de este proceso se aparecen iones positivos (con valencia +n1) y negativos (con valencia - n2) con configuraciones de capa sellada. En estas circunstancias, los iones con cargas +n1 y - n2 perciben atracción mutua. La fuerza de repulsión se revela cuando las configuraciones electrónicas de capa sellada iónica inician a traslaparse.
        .row(numero="2" titulo="Enlace covalente")
          p El nombre “covalente” nace de la colocación compartida, cooperativa, de electrones de valencia entre dos átomos contiguos. Una peculiaridad significativa de estos enlaces es que se logran crear entre átomos del mismo tipo, entre los cuales puede haber muy poca o ninguna formación de enlaces iónicos, el enlace covalente se forma entre átomos con pequeñas diferencias de electronegatividad y situados muy próximos en la tabla periódica, habitualmente se comparten sus electrones externos s y p con otros átomos, de modo que consigue la configuración electrónica de gas noble.
          p En un enlace covalente sencillo, cada uno de los dos átomos contribuye con un electrón a la formación del par de electrones del enlace, y las energías de los dos átomos agrupados con el enlace covalente son menores (más estables) como resultado de la interacción de los electrones. En el enlace covalente, se logran formar múltiples pares de electrones por un átomo consigo mismo o con otros átomos. En los enlaces covalentes puros, los electrones de un átomo ayudan a los estados cuánticos disponibles y son compartidos entre los núcleos para crear una configuración de capa sellada.
        .row(numero="3" titulo="Enlace metálico")
          p El enlace metálico es el que se presenta en los metales sólidos, en estos los átomos se encuentran empaquetados comparativamente muy juntos como un arreglo sistemático o estructura cristalina.
          p El enlace metálico es resultado de la habilidad de disociación de los metales en iones positivos y electrones libres. Hay muchos estados cuánticos utilizables en los metales, todos los cuales no pueden ser ocupados por electrones cuando los átomos se juntan unos a otros. Por ello, los metales tienen enlazamiento no saturado y se forman de un gran número de átomos como una macromolécula. Los electrones liberados se trasladan con facilidad de los orbítales de un átomo a los del otro y ya no están aprisionados a un par de átomos; elementalmente, son como un “fluido”. Es por esto que, por lo común, se toma a los metales como un gran agregado de centros iónicos positivos sumergidos en una “nube” o “mar” de electrones. Esta es la clásica y simple teoría de los electrones libres de los metales que se utiliza para distinguir los metales de los no metales, explicar las conductividades eléctricas y térmicas excepcionalmente buenas de los metales, asimismo explica la opacidad óptica y la reflectividad.
          p La oscilación de los electrones libres absorbe la energía de la luz incidente en todas las longitudes de onda, por tanto, hace que el metal sea opaco.
        .row.p-4(numero="4" titulo="Enlace secundario o de Van der Waals")
          p El enlace Van der Waals es una fuerza frágil de atracción que puede hallarse entre los átomos y las moléculas. A este enlace corresponde la condensación de los gases nobles y de las moléculas con enlaces químicamente para establecer líquidos y sólidos a temperaturas bajas. 
          p El mecanismo de enlazamiento secundario es algo afín al iónico, esto es, por atracción de cargas opuestas. El contraste importante es que no se transfieren electrones. La atracción pende de las distribuciones asimétricas de carga positiva y negativa dentro de cada unidad atómica o molecular que se enlaza. Esta irregularidad de carga se llama dipolo. El enlazamiento secundario puede ser de dos tipos, según los dipolos sean Temporales o Permanentes.
          .fcs.p-4.align-items-center.br26
            p.texto-blanco El instante de un dipolo eléctrico se crea cuando dos cargas similares y opuestas se apartan. Los dipolos en los átomos o en las moléculas crean momentos dipolares.
            .col-lg-2.mx-auto
              a.boton.color-acento-contenido.indicador__container.round(@click="modal1 = true")
                span Ejemplo
                .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")
            div
              h4 Momento dipolar
              p Un momento dipolar se especifica como el valor de la carga multiplicado por la distancia de separación entre cargas positiva o negativa, o:
              p <b>µ = qd</b>
              p donde <b>µ</b> = momento dipolar
              p <b>q</b> = magnitud de la carga eléctrica
              p <b>d</b> = distancia de separación entre los centros de las cargas
              p Los momentos dipolares en átomos y moléculas se miden en Culombio - metro (C · m) o en debyes, donde un debyes = 3.34 · 10-10 Cxm.
              p Las moléculas compuestas de dos o más átomos desiguales, pueden crear dipolos permanentes entre los átomos en claridad de sus diferencias de electronegatividad. El átomo más electronegativo atrae el electrón hacia sí y lo aleja del elemento menos electronegativo; se crea una molécula polar con dipolo permanente, en la que el segundo átomo tiene carga positiva y el primero, carga negativa. 
    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Materiales conductores, aislantes y semiconductores
    p La resistencia en los materiales varía considerablemente de acuerdo a su clase. El oro y la plata son los materiales que menos oposición presentan al paso de una corriente eléctrica; en cambio hay otros materiales como el silicio que presenta una resistencia mucho mayor a la que pueden presentar materiales como el cobre o el aluminio. Finalmente existen otros materiales que presentan una altísima resistencia al paso de la corriente eléctrica.
    h3.mb-5 Teniendo en cuenta esta variación, los materiales se clasifican así:
    TabsA.color-primario.mb-5
      .tarjeta.color-primario--borde.p-4(titulo="Materiales conductores")
        h4 Materiales conductores
        p Son aquellos que están constituidos por elementos que presentan una bajísima oposición al paso de los electrones debido a que los átomos que los conforman poseen gran cantidad de electrones libres. Por ejemplo: plata, cobre, aluminio, tungsteno, cinc, entre otros.
        .col-lg-5.mx-auto
          .titulo-sexto.color-acento-contenido
            span Electrones atravesando un conductor
          figure
            img(src='@/assets/curso/t2/f7.svg', alt='Electrones atravesando un conductor')
      .tarjeta.color-primario--borde.p-4(titulo="Elementos de materiales conductores")
        h4 Elementos de materiales conductores
        p Los elementos conductores tienen habilidad para permitir el movimiento de cargas y sus átomos se caracterizan por tener muchos electrones libres y aceptarlos o cederlos con facilidad, por lo tanto, son materiales que conducen la electricidad. En la categoría “conductores” se encuentran agrupados todos los metales que en mayor o menor medida conducen o permiten el paso de la corriente eléctrica por sus cuerpos.
        .col-lg-7.mx-auto
          .titulo-sexto.color-acento-contenido
            span Grupos de elementos conductores, semiconductores y aislantes en la Tabla periódica
          figure
            img(src='@/assets/curso/t2/f8.svg', alt='Grupos de elementos conductores, semiconductores y aislantes en la Tabla periódica')
      .tarjeta.color-primario--borde.p-4(titulo="Materiales semiconductores")
        h4 Materiales semiconductores
        p Son aquellos que están constituidos por elementos que presentan una mediana oposición al paso de los electrones debido a que los átomos que los conforman poseen pocos electrones libres. Por ejemplo: germanio, silicio. Estos materiales alteran su conductividad  con la temperatura, comportándose como conductores o como aislantes.
        .row.align-items-center
          .col-lg-7
            p Los materiales conductores son aquellos cuyos átomos tienen electrones libres y los aislantes escasean de ellos, los semiconductores se encuentran en un escenario intermedio.
            p A una temperatura de 0° Kelvin se comportan como aislantes, debido a que a esta temperatura no hay electrones libres, pero mediante un aporte de energía puede modificar esta situación, alcanzando un comportamiento más cercano al de los conductores, es decir, a mayores temperaturas algunos electrones obtienen suficiente energía para escapar del enlace convirtiéndose en electrones libres (libres pero dentro del sólido cristalino), dejando atrás una vacante en el enlace covalente. Dicha vacante es denominada hueco y todo este proceso se conoce como producción térmica de un par electrón.
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              span Átomo de silicio compartiendo un electrón de valencia con cada uno de sus cuatro átomos vecinos.
            figure
              img(src='@/assets/curso/t2/f9.svg', alt='Átomo de silicio compartiendo un electrón de valencia con cada uno de sus cuatro átomos vecinos.')
      .tarjeta.color-primario--borde.p-4(titulo="Materiales aisladores")
        h4 Materiales aisladores
        p Son aquellos que presentan una altísima oposición al paso de los electrones debido a que los átomos que los conforman, puede decirse que casi no tienen electrones libres. Por ejemplo: caucho, vidrio, baquelita.
        p Los elementos aislantes son aquellos que no permiten el paso e intercambio de electrones periféricos, siendo sus átomos regularmente estables, por tanto, no permite pasar la corriente eléctrica a través de ellos. Los átomos de los elementos aislantes tienen entre cinco y siete electrones fuertemente ligados a su última órbita, lo que les imposibilita cederlos. Esta particularidad los convierte en malos conductores de la electricidad.
        p Así como no existen conductores perfectos, tampoco hay aisladores perfectos; todos los aisladores permiten el paso de corriente eléctrica a cantidades muy pequeñas; cuando las condiciones de trabajo son favorables para ello. 
        p Por ejemplo, la humedad hace que los aisladores pierdan propiedades. Las altas tensiones o superiores a las estipuladas ocasionan conducción en los aisladores.
      .tarjeta.color-primario--borde.p-4(titulo="Usos de materiales en el sector eléctrico")
        h4 Usos de materiales en el sector eléctrico
        ul.lista-ul
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Cables de aluminio en redes de distribución.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Cables de cobre y aluminio en redes de distribución urbana.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Cables y alambres de cobre en instalaciones residenciales e industriales.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Semiconductores como el silicio y el germanio en la fabricación de diodos, transistores y circuitos integrados.    
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Baños de oro en contactos, vías, rutas de tarjetas electrónicas y pines de circuitos integrados.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Alambres de cobre para creación de diferentes tipos de inductores.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Láminas de aluminio y dieléctrico para crear capacitores.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Materiales aislantes para cubrir alambres conductores y borneras.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Materiales aislantes como la cerámica o el vidrio para la fabricación de soportes para redes eléctricas.
          li 
            i.fas.fa-angle-right.cab
            p.mb-0 Materiales aislantes como la baquelita para la fabricación de tarjetas para el montaje de circuitos electrónicos. 
    Separador
    #t_2_4.titulo-segundo
      h2 2.4 Conductividad y resistividad
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.fcab
          span a
        div 
          h4 Conductividad
          p La capacidad de un material de permitir pasar la corriente eléctrica es lo que se llama conductividad eléctrica, esta es una medida de la capacidad para consentir circular libremente las cargas eléctricas. La estructura atómica y molecular del material son las que definen la conductividad. Las estructuras que, de muchos electrones con vínculos frágiles, permiten su movimiento, los metales son buenos conductores ya que comparten estas características. Aunque hay otras variables como los físicos del propio material y de la temperatura que igualmente ayudan a la conductividad.
          p Como es la inversa de la resistividad es que se designa la conductividad. Por ende, su unidad es el s/m (siemens x metro) o Ωˉ¹·mˉ¹. La proporcionalidad entre el campo eléctrico y la densidad de corriente de conducción es la que comúnmente se conoce como la magnitud de la conductividad (σ).
      li 
        .lista-ol--cuadro__vineta.fcab
          span b
        div
          h4 Resistividad
          p La resistencia eléctrica concreta de un material es a lo que se le llama resistividad. Esta es simbolizada por la letra griega rho minúscula (ρ) y se mide en ohmios por metro (Ω•m). El proceder de un material ante el paso de corriente eléctrica es lo que da su valor, lo que determina que tan bueno o malo es un material para conducir. Si la resistividad arroja un valor alto significa que el material es mal conductor y uno bajo es un buen conductor. Con la temperatura, regularmente, la resistividad de los metales crece, a diferencia de los semiconductores cuya resistividad se reduce ante el aumento de la temperatura.
          p Se puede decir que una peculiaridad propia de un material es la resistividad y esta posee unidades de ohmios x metro. El que tanto se resiste un material al paso de la corriente es lo que se enseña como resistividad y esta se detalla como ρ (rho) mediante la siguiente expresión:
    .col-lg-10.mx-auto.p-5.fagc
      .col-lg-3.mx-auto.mb-4
        figure
          img(src='@/assets/curso/t2/f9.png', alt='fórmula relacionada')
      p donde:
      p <b>ρ:</b> Es la resistividad medida en Ohmios x metro (Ω•m).
      p <b>R:</b> Es el valor de la resistencia eléctrica en Ohmios (Ω).
      p <b>𝑙:</b> Es la medida de la longitud del material en metros (m).
      p.mb-5 Se puede concluir de la anterior expresión que, de la construcción, resistividad (material con el que fue hecho), longitud, y área transversal. Es del que depende el valor de un resistor, utilizado regularmente en electricidad y electrónica.
      .col-lg-8.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          span Resistividad eléctrica
        figure
          img(src='@/assets/curso/t2/f10.svg', alt='Resistividad Eléctrica')
          figcaption <b>Nota.</b> Ciudad Universitaria Virtual de San Isidoro (2014).
      p A menor área transversal y mayor longitud del elemento, más resistencia. A mayor área transversal y menor longitud del elemento, menos resistencia. La resistividad de los metales crece al aumentar la temperatura, contrario de los semiconductores en donde este valor decrece. Entonces se puede asegurar que la resistividad también depende de la temperatura.
      p.mb-5 A continuación, se observa una tabla con la resistividad eléctrica de los materiales más comunes.
      .col-lg-10.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          span Tabla de resistividad eléctrica de algunos materiales resistivos
        .tabla-a.color-acento-botones.mb-5.fblanco
          table
            caption Nota. Orjuela Gutierez, C.  (2009, febrero 22).
            thead.text-center
              tr
                th Material
                th Resistividad
            tbody
              h4.text-center Conductores
            tbody
              tr
                td.text-center Plata
                td.text-center 1,47 x 10<span class="exponent">-5</span>
              tr
                td.text-center Cobre
                td.text-center 1,72 x 10<span class="exponent">-5</span>
              tr
                td.text-center Aluminio
                td.text-center 2,63 x 10<span class="exponent">-5</span>
              tr
                td.text-center Oro
                td.text-center 2,35 x 10<span class="exponent">-5</span>
              tr
                td.text-center Wolframio
                td.text-center 5,51 x 10<span class="exponent">-5</span>
              tr
                td.text-center Níguel
                td.text-center 6,84 x 10<span class="exponent">-5</span>
              tr
                td.text-center Hierro
                td.text-center 9,71 x 10<span class="exponent">-5</span>
              tr
                td.text-center Platino
                td.text-center 10,6 x 10<span class="exponent">-5</span>
              tr
                td.text-center Plomo
                td.text-center 20,65 x 10<span class="exponent">-5</span>
              tr
                td.text-center Manganina
                td.text-center 44 x 10<span class="exponent">-5</span>
              tr
                td.text-center Constantán
                td.text-center 49 x 10<span class="exponent">-5</span>
              tr
                td.text-center Nicrom
                td.text-center 100 x 10<span class="exponent">-5</span>
            tbody
              h4.text-center Semiconductores
            tbody
              tr
                td.text-center Carbono
                td.text-center 3,5 x 10<span class="exponent">-5</span>
              tr
                td.text-center Germanio
                td.text-center 0,60
              tr
                td.text-center Silicio
                td.text-center 2,3 x 10<span class="exponent">3</span>
            tbody
              h4.text-center Aisladores
            tbody
              tr
                td.text-center Vidrio
                td.text-center 1x10<span class="exponent">10</span>-1x10<span class="exponent">14</span>
              tr
                td.text-center Ámbar
                td.text-center 5 x 10<span class="exponent">14</span>
              tr
                td.text-center Lucita
                td.text-center 1 x 10<span class="exponent">13</span>
              tr
                td.text-center Mica
                td.text-center 1 x 10<span class="exponent">11</span>- 1 x 10<span class="exponent">15</span>
              tr
                td.text-center Cuarzo (Fundido)
                td.text-center 75 x 10<span class="exponent">16</span>
              tr
                td.text-center Azufre
                td.text-center 1 x 10<span class="exponent">13</span>
              tr
                td.text-center Teflón
                td.text-center 1 x 10<span class="exponent">13</span>
              tr
                td.text-center Madera
                td.text-center lx10<span class="exponent">3</span>- 1 x10<span class="exponent">11</span>
              tr
                td.text-center Caucho
                td.text-center 1 x 10<span class="exponent">13</span> - 1 x 10<span class="exponent">16</span>
              tr
                td.text-center Carbón
                td.text-center 1 x 10<span class="exponent">11</span>
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
