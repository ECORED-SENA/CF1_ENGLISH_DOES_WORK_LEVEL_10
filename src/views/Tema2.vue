<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[i Personal and work plans]
    .row.bg-c11
      .col-12.p-5
        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0
            Traduccion.color-acento-botones(:dialogo="traduccion1")
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/img1.svg", style="width:350px").m-auto
        .row
          .col-12.bg-c15.p-4
            SlyderF(columnas="col-9 col-md-6 col-xl-4")
              .tarjeta.bg-c12
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio1.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b I have had some issues!]]
                    p.text-center #[i That expression is used to say everything has not been perfect. For instance, you have had some problems!]
              .tarjeta.bg-c13
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio2.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b I do not have any clue of how it is going to be!]]
                    p.text-center #[i That expression is used to say you do not know about the future of the process.]
              .tarjeta.bg-c14
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio3.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Everything is going well!]]
                    p.text-center #[i That is an expression that means all the things or stuff is perfect, there are no issues.]
              .tarjeta.bg-c16
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio4.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Everything is crazy!]]
                    p.text-center #[i That is an expression to say all the things are out of control.]
              .tarjeta.bg-c17
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio5.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b I’ve got to cut corners!]]
                    p.text-center #[i That’s an expression that refers to doing something as easy as possible and as fast as possible.]
              .tarjeta.bg-c18
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio6.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b It’s not rocket science!]]
                    p.text-center #[i That means something is easy to understand, it is not complex.]
              .tarjeta.bg-c19
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio7.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b It’s time to get the ball rolling!]]
                    p.text-center #[i That means it is time to start.]
              .tarjeta.bg-c20
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio8.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b For the long haul!]]
                    p.text-center #[i That means for a long period of time!]
              .tarjeta.bg-c21
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio9.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Change of pace!]]
                    p.text-center #[i That means the routine is going to be different, there are going to be changes.]
              .tarjeta.bg-c22
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio10.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Think outside the box!]]
                    p.text-center #[i That means we are going to go beyond a normal idea.]
              .tarjeta.bg-c23
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio11.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b We are on the same page!]]
                    p.text-center #[i That means we have the same idea!]
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 #[i Sequence linkers]
    .row.bg-c24
      .col-12.p-5
        .row.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img4.svg", style="width:450px").m-auto
          .col-lg-7
            Traduccion.color-acento-botones(:dialogo="traduccion2")
        .row.justify-content-center
          .col-lg-10.bg-c25.p-4
            SlyderF(columnas="col-9 col-md-6 col-xl-4")
              .tarjeta.bg-c26
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio12.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b A final point]]
                    p.text-center.text-small #[i As a final point, I would like to say that our experiences have taught us one important lesson: mediation does work.]
                    p.text-center.text-small Como última observación, quisiera decir que nuestras experiencias nos han enseñado una lección importante: la mediación funciona.
              .tarjeta.bg-c27
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio13.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Another]]
                    p.text-center.text-small #[i Another strategic element for the programme will be rooted in the increased understanding of the policy.]
                    p.text-center.text-small Otro elemento estratégico del programa se cimentará en el mayor conocimiento de las repercusiones que tiene para la política.
              .tarjeta.bg-c28
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio14.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b First of all]]
                    p.text-center.text-small #[i First of all, I’d like to give you the agenda for the day.]
                    p.text-center.text-small En primer lugar, me gustaría darles la agenda del día.
              .tarjeta.bg-c29
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio52.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Second]]
                    p.text-center.text-small #[i Second, it is used by the client to determine what password to send for a given authenticated area.]
                    p.text-center.text-small Segundo, es usado por el cliente para determinar qué contraseña enviar para un área autenticada dada.
              .tarjeta.bg-c30
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio16.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b To begin]]
                    p.text-center.text-small #[i To begin maquiladora operations, the following steps must be taken.]
                    p.text-center.text-small Para empezar a maquilar, se deben seguir los siguientes pasos.
              .tarjeta.bg-c31
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio17.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b After]]
                    p.text-center.text-small #[i After playing, he ate.]
                    p.text-center.text-small Después de jugar, él comió.
              .tarjeta.bg-c32
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio18.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b At last]]
                    p.text-center.text-small #[i At last the rain has stopped and the sun is out.]
                    p.text-center.text-small Por fin ha dejado de llover y ha salido el sol.
              .tarjeta.bg-c33
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio19.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b In addition]]
                    p.text-center.text-small #[i In addition to wedding dresses, the boutique also sells accessories.]
                    p.text-center.text-small Además de vestidos de novia, la boutique también vende accesorios.
              .tarjeta.bg-c34
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio20.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b In the first place]]
                    p.text-center.text-small #[i In the first place, we need to clean out the attic.]
                    p.text-center.text-small En primer lugar, tenemos que limpiar el ático.
              .tarjeta.bg-c35
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio21.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Later]]
                    p.text-center.text-small #[i Later, strain the mixture and add the orange blossom water and simple syrup.]
                    p.text-center.text-small Después, filtramos la mezcla y le añadimos el agua de azahar y el jarabe simple.
              .tarjeta.bg-c36
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio22.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Before]]
                    p.text-center.text-small #[i Before you came, I had cooked dinner.]
                    p.text-center.text-small Antes de que usted llegara, yo había hecho la cena.
              .tarjeta.bg-c37
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio23.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b As soon as]]
                    p.text-center.text-small #[i As soon as I got up in the morning, I started brewing coffee.]
                    p.text-center.text-small Tan pronto como me levanté por la mañana, comencé a preparar café.
              .tarjeta.bg-c38
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio24.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Firstly]]
                    p.text-center.text-small #[i Firstly, all the signals in a group must have the same type.]
                    p.text-center.text-small En primer lugar, todas las señales de un grupo deben ser del mismo tipo.
              .tarjeta.bg-c39
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio26.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b To conclude]]
                    p.text-center.text-small #[i Click "Finish" to conclude the installation.]
                    p.text-center.text-small Haga clic en "Finalizar" para concluir la instalación.
              .tarjeta.bg-c40
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio27.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b At first]]
                    p.text-center.text-small #[i So at first there was no official project.]
                    p.text-center.text-small Así que al principio no había ningún proyecto oficial.
              .tarjeta.bg-c41
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio28.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Next]]
                    p.text-center.text-small #[i The passenger seated next to me and started to snore.]
                    p.text-center.text-small El pasajero se sentó a mi lado y empezó a roncar.
              .tarjeta.bg-c42
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio29.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b In short]]
                    p.text-center.text-small #[i Barcelona is, in short, a city of sensations.]
                    p.text-center.text-small Barcelona es, en definitiva, la ciudad de las sensaciones.
              .tarjeta.bg-c43
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio30.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b At the end]]
                    p.text-center.text-small #[i We hope they burn in hell at the end.]
                    p.text-center.text-small Esperamos que ardan en el infierno al final.
    .row.bg-c44
      .col-12.p-5
        .row.justify-content-center
          .col-lg-10.bg-c45.p-4
            SlyderF(columnas="col-9 col-md-6 col-xl-4")
              .tarjeta.bg-c46
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio31.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b All in all]]
                    p.text-center.text-small #[i So, all in all, a truly spectacular stay.]
                    p.text-center.text-small Así que, en general, una estancia verdaderamente espectacular.
              .tarjeta.bg-c47
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio32.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Eventually]]
                    p.text-center.text-small #[i Nora eventually peaked at Category 4.]
                    p.text-center.text-small Nora finalmente alcanzó un máximo de Categoría 4.
              .tarjeta.bg-c48
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio33.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Meanwhile]]
                    p.text-center.text-small #[i And meanwhile, Eddie bounced around.]
                    p.text-center.text-small Y mientras, Eddie iba de aquí para allá.
              .tarjeta.bg-c49
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio34.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Lastly]]
                    p.text-center.text-small #[i And lastly, the question of immersion.]
                    p.text-center.text-small Y por último, la cuestión de la inmersión.
              .tarjeta.bg-c50
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio35.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Last but not least]]
                    p.text-center.text-small #[i And last but not least, choose well to spend less.]
                    p.text-center.text-small Y por último, pero no menos importante, elige bien para gastar menos.
              .tarjeta.bg-c51
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio36.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b In conclusion]]
                    p.text-center.text-small #[i In conclusion, each player has some drawbacks while playing the game.]
                    p.text-center.text-small En conclusión, cada jugador tiene algunos inconvenientes mientras juega.
              .tarjeta.bg-c52
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio37.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Finally]]
                    p.text-center.text-small #[i Finally, I got the paper done.]
                    p.text-center.text-small Finalmente, terminé el papel.
              .tarjeta.bg-c53
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio38.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b First]]
                    p.text-center.text-small #[i The first concerned international civilian staffing.]
                    p.text-center.text-small La primera era relativa a los funcionarios civiles de contratación internacional.
              .tarjeta.bg-c54
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio39.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b For a start]]
                    p.text-center.text-small #[i It was not bad for a start.]
                    p.text-center.text-small No estaba mal para empezar.
              .tarjeta.bg-c55
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio40.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b In the end]]
                    p.text-center.text-small #[i In the end, the fight has electoral and political ramifications.]
                    p.text-center.text-small Al final, la lucha tiene connotaciones electorales y políticas.
              .tarjeta.bg-c56
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio41.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Further]]
                    p.text-center.text-small #[i Further, some sample clauses are only effective if approved by the responsible courts.]
                    p.text-center.text-small Además, algunas cláusulas modelo son solo eficaces si las aprueban los tribunales competentes.
              .tarjeta.bg-c57
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio42.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b To start with]]
                    p.text-center.text-small #[i To start with, institution support can be made available to help implement political and financial undertakings.]
                    p.text-center.text-small Para empezar, podrá ponerse a disposición el apoyo institucional para ayudar a instaurar los organismos políticos y financieros.
              .tarjeta.bg-c58
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio43.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b At this point]]
                    p.text-center.text-small #[i At this point, it is possible to identify patterns and trends in the data.]
                    p.text-center.text-small Al llegar a este punto, es posible reconocer estructuras y tendencias en los datos.
              .tarjeta.bg-c59
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio44.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b To summarize]]
                    p.text-center.text-small #[i To summarize, all the innovation and technology for you.]
                    p.text-center.text-small En resumen, toda la innovación y tecnología a su servicio.
              .tarjeta.bg-c60
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio45.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Then]]
                    p.text-center.text-small #[i Complete your homework, then you go to play.]
                    p.text-center.text-small Completa tu tarea, luego vas a jugar.
              .tarjeta.bg-c61
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio46.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Furthermore]]
                    p.text-center.text-small #[i Playing money in the casino is not ok, furthermore, it becomes a non-stop habit.]
                    p.text-center.text-small Jugar dinero en el casino no está bien, además, se convierte en un hábito continuo.
              .tarjeta.bg-c62
                .row.justify-content-center.h-100.align-items-end
                  .col-10.pos1
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio53.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c1.mb-0 #[i #[b Besides]]
                    p.text-center.text-small #[i Besides horse riding, she also practices taekwondo.]
                    p.text-center.text-small Además de montar a caballo, también practica taekwondo.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 #[i Expressing opinion]
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        Traduccion.color-acento-botones(:dialogo="traduccion3")
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/img7.svg", style="width:450px").m-auto
    .row.mb-5
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img47.png", style="width:450px").m-auto
      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="<em>Everyday speech</em>")
            .col-12.p-4
              p #[i.txt-c1 First, we have some words suitable in everyday speech and some types of writing, such as in social networks. You have probably already seen or used some of these phrases:] / Primero, tenemos algunas palabras adecuadas en el habla cotidiana y algunos tipos de escritura, como en las redes sociales. Probablemente, ya hayas visto o usado algunas de estas frases:
              Audio.color-secundario.mb-4.mx-auto(
                :audio="require('@/assets/curso/tema2/audio48.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema2/img8.svg", style="width:150px").m-auto
                .col-lg-8
                  p.mb-0 #[i.txt-c1 I think...] / Pienso...
                  p.mb-0 #[i.txt-c1 I believe...] / Yo creo...
                  p.mb-0 #[i.txt-c1 I feel...] / Siento...
                  p.mb-0 #[i.txt-c1 In my opinion... and] / En mi opinión... y
                  p.mb-0 #[i.txt-c1 I would say...] / Yo diría...
          .row(numero="2" titulo="<em>Stronger opinion</em>")
            .col-12.p-4
              p #[i.txt-c1 Second, if you want to create a stronger opinion, you could add these expressions:] / En segundo lugar, si desea crear una opinión más sólida, puede agregar estas expresiones:
              Audio.color-secundario.mb-4.mx-auto(
                :audio="require('@/assets/curso/tema2/audio49.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
              .row
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema2/img9.svg", style="width:150px").m-auto
                .col-lg-8
                  p.mb-0 #[i.txt-c1 I really think Cota has the best street food.] / Realmente creo que Cota tiene la mejor comida callejera.
                  p.mb-0 #[i.txt-c1 I strongly believe Cota has the best street food.] / Creo firmemente que Cota tiene la mejor comida callejera.
                  p.mb-0 #[i.txt-c1 I truly feel Cota has the best street food.] / Realmente, siento que Cota tiene la mejor comida callejera.
                  p.mb-0 #[i.txt-c1 In my honest opinion, Cota has the best street food.] / En mi sincera opinión, Cota tiene la mejor comida callejera.
          .row(numero="3" titulo="<em>Formal comment</em>")
            .col-12.p-4
              p #[i.txt-c1 Third, if it is a matter of making a more formal comment, we could say:] / En tercer lugar, si se trata de hacer un comentario más formal, podríamos decir:
              Audio.color-secundario.mb-4.mx-auto(
                :audio="require('@/assets/curso/tema2/audio50.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
              .row
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema2/img10.svg", style="width:150px").m-auto
                .col-lg-8
                  p.mb-0 #[i.txt-c1 From my point of view, Cota has the best street food.] / Desde mi punto de vista, Cota tiene la mejor comida callejera.
                  p.mb-0 #[i.txt-c1 From my perspective, Cota has the best street food.] / Desde mi perspectiva, Cota tiene la mejor comida callejera.
                  p.mb-0 #[i.txt-c1 It seems to me that Cota has the best street food.] / Me parece que Cota tiene la mejor comida callejera.
          .row(numero="4" titulo="<em>Ask for opinions</em>")
            .col-12.p-4
              p #[i.txt-c1 Finally, if you want to ask for someone's opinion, you could say:] / Finalmente, si quiere pedir la opinión de alguien, podría decir:
              Audio.color-secundario.mb-4.mx-auto(
                :audio="require('@/assets/curso/tema2/audio51.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
              .row
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema2/img11.svg", style="width:150px").m-auto
                .col-lg-8
                  p.mb-0 #[i.txt-c1 What do you think of...?] / ¿Qué piensa de...?
                  p.mb-0 #[i.txt-c1 What are your thoughts on...?] / ¿Cuáles son sus pensamientos sobre...?
                  p.mb-0 #[i.txt-c1 How do you feel about...? and] / ¿Cómo se siente acerca de...? y
                  p.mb-0 #[i.txt-c1 What’s your opinion on...?] / ¿Cuál es su opinión sobre...?
    p.mb-5 #[i.txt-c1 In the last part, you will find some examples of personal and work plans:] / En la última parte, encontrará algunos ejemplos de planes personales y de trabajo:
    Dialogo.color-acento-botones.mb-5(:dialogo="dialogo")
      template(#nombre-actividad) Escuche los audios y complete los espacios en blanco de cada una de las frases arrastrando el término correcto.
      template(#titulo-actividad) #[i Personal and work plans]
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema2',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>To talk about personal and work life, it is mandatory to know personal pronouns, verbs, and how to conjugate them. It is also important to improve using the vocabulary that allows us to improve our “speaking” that, together with some linkers and complements, are part of proper management and command of English. Below is a vocabulary to improve your speaking. Listen, read, and practice with your classmates.</em>',
          textoEsp:
            'Para hablar de la vida personal y laboral, es obligatorio saber los pronombres personales, los verbos y cómo conjugarlos. También es importante mejorar el uso del vocabulario que nos permita mejorar nuestro “hablar” que, junto con algunos enlazadores y complementos, forman parte del buen manejo y dominio del inglés. A continuación, se muestra un vocabulario para mejorar su habla. Escuche, lea y practique con sus compañeros.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>Connectors are terms or expressions that join words, ideas, phrases, sentences, and paragraphs together. Their use is necessary, because through them a more fluid, organized, and coherent writing is established, which favors the good performance of a reading and an effective understanding of the texts. The connectors have a classifying function and with the proper use of them a correct connection between the different ideas is given. The connectors can be simple (those formed by a single word) and compound (those formed by two or more terms). Now we have a list of 37 sequence connectors. Let’s see:</em>',
          textoEsp:
            'Los conectores son términos o expresiones que unen palabras, ideas, frases, oraciones y párrafos entre sí. Su uso es necesario, pues por medio de ellos se establece una redacción más fluida, organizada y coherente, lo que favorece la buena realización de una lectura y una eficaz comprensión de los textos. Los conectores presentan una función clasificadora y, con la utilización adecuada de ellos, se da una correcta conexión entre las diferentes ideas. Los conectores pueden ser simples (aquellos formados por una sola palabra) o compuestos (aquellos conformados por dos o más términos). Ahora tenemos una lista de 37 conectores de secuencia. Veamos:',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>Knowing how to express your opinion in English is valuable whether you are speaking or writing. We will look at phrases suitable in everyday speech and some types of writing in order to give our opinion based on a topic. Some of them are:</em>',
          textoEsp:
            'Saber cómo expresar su opinión en inglés es valioso, sea que esté hablando o escribiendo. Veremos frases adecuadas en el habla cotidiana y algunos tipos de escritura para dar nuestra opinión con base en un tema. Algunas de ellas son:',
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Anne',
          img: require('@/assets/curso/tema2/img12.svg'),
        },
        {
          nombre: 'Jim',
          img: require('@/assets/curso/tema2/img13.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Anne',
          textoIng:
            '<em>I</em> *** <em>have liked to visit other countries.</em>',
          textoEsp: 'Me habría gustado visitar otros países.',
          audio: require('@/assets/curso/tema2/Anne1.mp3'),
          palabra: 'would',
        },
        {
          personaje: 'Jim',
          textoIng:
            '<em>If you had learned Spanish, you</em> *** <em>have traveled to South America.</em>',
          textoEsp:
            'Si hubieras aprendido español, podrías haber viajado a Sudamérica.',
          audio: require('@/assets/curso/tema2/Jim1.mp3'),
          palabra: 'could',
        },
        {
          personaje: 'Anne',
          textoIng:
            '<em>I know. But</em> *** <em>time I tried to start I was too busy.</em>',
          textoEsp:
            'Lo sé. Pero cada vez que trataba de comenzar estaba demasiado ocupada.',
          audio: require('@/assets/curso/tema2/Anne2.mp3'),
          palabra: 'every',
        },
        {
          personaje: 'Jim',
          textoIng:
            '<em>Would you have studied a new language if you</em> *** <em>had the time?</em>',
          textoEsp:
            '¿Habrías estudiado un nuevo idioma si hubieras tenido tiempo?',
          audio: require('@/assets/curso/tema2/Jim2.mp3'),
          palabra: 'had',
        },
        {
          personaje: 'Anne',
          textoIng:
            '<em>Sure, I</em> *** <em>always wanted to know new cultures.</em>',
          textoEsp: 'Claro, siempre he querido conocer nuevas culturas.',
          audio: require('@/assets/curso/tema2/Anne3.mp3'),
          palabra: 'have',
        },
        {
          personaje: 'Jim',
          textoIng:
            '<em>Well it is never too late. You</em> *** <em>have followed your dreams.</em>',
          textoEsp: 'Bueno, nunca es tarde. Debes haber seguido tus sueños.',
          audio: require('@/assets/curso/tema2/Jim3.mp3'),
          palabra: 'must',
        },
      ],
    },
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

<style lang="sass"></style>
