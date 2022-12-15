<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 #[i Regrets]
    .row.bg-c4
      .col-12.px-5.pt-5
        .row.mb-4
          .col-2.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema1/img2.svg", style="width:350px").m-auto
          .col(data-aos="fade-left")
            Traduccion.color-acento-botones(:dialogo="traduccion1")
        h4.text-center.txt-c1.mb-5(data-aos="fade-up") #[i Conditionals]
        .row.mb-4
          .col-12.bg-c5.p-5
            .row.align-items-center.justify-content-end
              .col-lg-9.fig-p3.bg-c2(style="z-index:1")
                .row
                  .col-xl-10.p-4(data-aos="fade-right")
                    SlyderE(indicadores="derecha")
                      .row
                        .col-lg-4.mb-4.mb-lg-0
                          figure
                            img(src='@/assets/curso/tema1/img1.png', style="width: 250px").m-auto
                        .col-lg-8
                          Traduccion.color-acento-botones(:dialogo="traduccion2")
                          Audio.color-primario.mb-4.mx-auto(
                            :audio="require('@/assets/curso/tema1/audio1.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                      .row
                        .col-lg-4.mb-4.mb-lg-0
                          figure
                            img(src='@/assets/curso/tema1/img2.png', style="width: 250px").m-auto
                        .col-lg-8
                          Traduccion.color-acento-botones(:dialogo="traduccion3")
                          Audio.color-primario.mb-4.mx-auto(
                            :audio="require('@/assets/curso/tema1/audio2.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                      .row
                        .col-lg-4.mb-4.mb-lg-0
                          figure
                            img(src='@/assets/curso/tema1/img3.png', style="width: 250px").m-auto
                        .col-lg-8
                          Traduccion.color-acento-botones(:dialogo="traduccion4")
                          Audio.color-primario.mb-4.mx-auto(
                            :audio="require('@/assets/curso/tema1/audio3.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                      .row
                        .col-lg-4.mb-4.mb-lg-0
                          figure
                            img(src='@/assets/curso/tema1/img4.png', style="width: 250px").m-auto
                        .col-lg-8
                          Traduccion.color-acento-botones(:dialogo="traduccion5")
                          Audio.color-primario.mb-4.mx-auto(
                            :audio="require('@/assets/curso/tema1/audio4.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
              .col-lg-3.d-none.d-xl-block(style="z-index:2")(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/tema1/img3.svg", style="width:300px").m-auto
        p.mb-5.mb-lg-0(data-aos="fade-up") #[i.txt-c1 After that, we have a context around the conditionals; however, to remember, the third conditional is used to imagine how the past could have been different. ] #[span.txt-c2 / Después de eso, tenemos un contexto en torno a los condicionales; sin embargo, para recordar, el tercer condicional se usa para imaginar cómo el pasado podría haber sido diferente.]
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 #[i Third conditional]
    .row.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        Traduccion.color-acento-botones(:dialogo="traduccion6")
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[i #[b Figure 1]. Third conditional structure]
        figure
          img(src="@/assets/curso/tema1/img4.svg", style="width:500px").m-auto
          figcaption.mt-2 #[i Note. Third conditional usage for imaginary situations in the past]
    p.mb-5(data-aos="fade-down") #[i.txt-c1 Third conditional can be written in positive and negative sentences. Let’s see some examples:] #[span.txt-c2 / El tercer condicional se puede escribir en oraciones positivas y negativas. Veamos algunos ejemplos:]
    .row.bg-c6
      .col-12.p-4
        .row.justify-content-center(data-aos="fade-down")
          .col-12.my-4
            h4.text-center #[i Examples third conditional]
          .col-10.col-md-8.col-lg.m-2.bg-c7.p-4
            .row.h-100.align-items-end
              .col-12.bg-c2.p-3
                TarjetaAudio.color-primario.mb-3(
                  texto="<em>If I had known about the concert, I would have gone.</em>"
                  :audio="require('@/assets/curso/tema1/audio5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-3 Si hubiera sabido del concierto, hubiera ido.
          .col-10.col-md-8.col-lg.m-2.bg-c8.p-4
            .row.h-100.align-items-end
              .col-12.bg-c2.p-3
                TarjetaAudio.color-primario.mb-3(
                  texto="<em>If I had known there was an accident, I would not have got stuck in the traffic jam.</em>"
                  :audio="require('@/assets/curso/tema1/audio6.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-3 Si hubiera sabido que había un accidente, no me habría quedado atascado en el embotellamiento.
          .col-10.col-md-8.col-lg.m-2.bg-c9.p-4
            .row.h-100.align-items-end
              .col-12.bg-c2.p-3
                TarjetaAudio.color-primario.mb-3(
                  texto="<em>If I had met her, I would have spoken to her earlier.</em>"
                  :audio="require('@/assets/curso/tema1/audio7.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-3 Si la hubiera conocido, habría hablado con ella antes.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 #[i 1.2 Modal verbs in the past (should have, could have, might have, must have, have to)]
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img8.png", style="width:450px").m-auto
      .col-lg-7(data-aos="fade-left")
        Traduccion.color-acento-botones(:dialogo="traduccion7")
    TabsC.color-acento-botones(data-aos="fade-up")
      .py-3.py-md-4(titulo="<em>Could have</em>")
        .row.p-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img9.png", style="width:350px").m-auto
            Audio.color-primario.mt-4.mx-auto(
              :audio="require('@/assets/curso/tema1/audio8.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-lg-8
            h4 #[i Could have]
            Traduccion.color-acento-botones(:dialogo="traduccion8")
      .py-3.py-md-4(titulo="<em>Should have</em>")
        .row.m-1
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img10.png", style="width:350px").m-auto
            Audio.color-primario.mt-4.mx-auto(
              :audio="require('@/assets/curso/tema1/audio9.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-lg-8
            h4 #[i Should have]
            Traduccion.color-acento-botones(:dialogo="traduccion9")
      .py-3.py-md-4(titulo="<em>Must have</em>")
        .row.m-1
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img11.png", style="width:350px").m-auto
            Audio.color-primario.mt-4.mx-auto(
              :audio="require('@/assets/curso/tema1/audio10.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-lg-8
            h4 #[i Must have]
            Traduccion.color-acento-botones(:dialogo="traduccion10")
      .py-3.py-md-4(titulo="<em>Would have</em>")
        .row.m-1
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img12.png", style="width:350px").m-auto
            Audio.color-primario.mt-4.mx-auto(
              :audio="require('@/assets/curso/tema1/audio11.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-lg-8
            h4 #[i Would have]
            Traduccion.color-acento-botones(:dialogo="traduccion11")
      .py-3.py-md-4(titulo="<em>Might have</em>")
        .row.m-1
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img13.png", style="width:350px").m-auto
            Audio.color-primario.mt-4.mx-auto(
              :audio="require('@/assets/curso/tema1/audio12.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
          .col-lg-8
            h4 #[i Might have]
            Traduccion.color-acento-botones(:dialogo="traduccion12")
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 #[i 1.3 Expressions to indicate the future in the past tense (was / were supposed to / was / were going to)]
    .row.bg-c10.mb-5
      .col-12.p-5
        .row.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema1/img14.png", style="width:450px").m-auto
          .col-lg-7(data-aos="fade-left")
            Traduccion.color-acento-botones(:dialogo="traduccion13")
        TabsA.color-acento-botones(data-aos="fade-down")
          .tarjeta.color-primario.p-4(titulo="<em>Were supposed to</em>")
            .row
              .col-12
                h4 #[i Were supposed to]
              .col-lg-8
                Traduccion.color-acento-botones(:dialogo="traduccion14")
                Audio.color-primario.mx-auto(
                  :audio="require('@/assets/curso/tema1/audio13.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
              .col-lg-4.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema1/img15.png", style="width:450px").m-auto
          .tarjeta.color-primario.p-4(titulo="<em>Was supposed to</em>")
            .row
              .col-12
                h4 #[i Was supposed to]
              .col-lg-8
                Traduccion.color-acento-botones(:dialogo="traduccion15")
                Audio.color-primario.mx-auto(
                  :audio="require('@/assets/curso/tema1/audio14.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
              .col-lg-4.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema1/img16.png", style="width:450px").m-auto
          .tarjeta.color-primario.p-4(titulo="<em>Were going to</em>")
            .row
              .col-12
                h4 #[i Were going to]
              .col-lg-8
                Traduccion.color-acento-botones(:dialogo="traduccion16")
                Audio.color-primario.mx-auto(
                  :audio="require('@/assets/curso/tema1/audio15.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
              .col-lg-4.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema1/img17.png", style="width:450px").m-auto
          .tarjeta.color-primario.p-4(titulo="<em>Was going to</em>")
            .row
              .col-12
                h4 #[i Was going to]
              .col-lg-8
                Traduccion.color-acento-botones(:dialogo="traduccion17")
                Audio.color-primario.mx-auto(
                  :audio="require('@/assets/curso/tema1/audio16.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
              .col-lg-4.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema1/img18.png", style="width:450px").m-auto
    p.mb-5(data-aos="fade-up") #[i.txt-c1 Now, we are going to practice. Listen to each audio, then complete the missing word. Review again if it is necessary. Let’s go:] #[span.txt-c2 / Ahora, vamos a practicar. Escuche cada audio, luego complete la palabra que falta. Vuelva a revisar si es necesario. Vamos:]
    Dialogo.color-acento-botones.mb-5(:dialogo="dialogo")(data-aos="fade-right")
      template(#nombre-actividad) Escuche los audios y complete los espacios en blanco de cada una de las frases arrastrando el término correcto.
      template(#titulo-actividad) #[i Regrets]
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
      
</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema1',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>When we want to use conditionals to talk about what will happen, what could happen, what we would like to happen or what did not happen at a given time, it is mandatory to articulate two sentences. Let&apos;s see some examples considering the real conditionals worked in previous courses as well:</em>',
          textoEsp:
            'Cuando queremos usar condicionales para hablar de lo que va a pasar, lo que podría pasar, lo que nos gustaría que pasara o lo que no pasó en un momento dado, es obligatorio articular dos oraciones. Veamos algunos ejemplos considerando también los condicionales reales trabajados en cursos anteriores:',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>Zero conditional, also known as first conditional in some books, will need a conjugation of both sentences in present:<br><br><ol><li>● If I have money, I go to the doctor.</li></ol></em>',
          textoEsp:
            '<em>Zero conditional</em>, también conocido como <em>first conditional</em> en algunos libros, necesitará una conjugación de ambas oraciones en presente:<br><br><ol><li>● Si tengo dinero, voy al médico.</li></ol>',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>First conditional, also known as second conditional in some books, will need a conjugation of one sentence in present simple and the other in future.<br><br><ol><li>● If I have money, I&apos;ll go to the bank to make a deposit.</li><ol></em>',
          textoEsp:
            'El primer condicional, también conocido como segundo condicional en algunos libros, necesitará la conjugación de una oración en presente simple y la otra en futuro.<br><br><ol><li>● Si tengo dinero, yo iré al banco y lo consignaré.</li><ol>',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em>Second conditional, also known as third conditional in some books, will need a conjugation of one of the sentences in past and the other one with “would” plus the verb. Please, consider this conditional belongs to the unreal ones.<br><br><ol><li>● If I had money, I would go to the doctor (I do not have any money).</li></ol></em>',
          textoEsp:
            'El segundo condicional, también conocido como tercer condicional en algunos libros, necesitará la conjugación de una de las oraciones en pasado y la otra con “<em>would</em>” más el verbo. Por favor, considere que este condicional pertenece a los irreales.<br><br><ol><li>● Si tuviera dinero, iría al médico (no tengo dinero).</li></ol>',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>Third conditional will need a conjugation of one sentence in past and the other one with “would have” plus the verb. Please, consider this conditional belongs to the unreal ones.<br><br><ol><li>● If I had money, I would have gone to the doctor (I do not have any money and now there is no chance to go to the doctor).</li></ol></em>',
          textoEsp:
            'El tercer condicional necesitará la conjugación de una oración en pasado y la otra con “<em>would have</em>” más el verbo. Por favor, considere que este condicional pertenece a los irreales.<br><br><ol><li>● Si hubiera tenido dinero, habría ido al médico (no tengo dinero y ahora no hay posibilidad de ir al médico).</li></ol>',
        },
      ],
    },
    traduccion6: {
      dialogo: [
        {
          textoIng:
            '<em>The third conditional is used to talk about situations of the past that did not occur, but we fantasize about what could have happened. In order to do that, it is necessary to use two elements, as in all the conditionals: the condition, in this case we need the past perfect, and to show the result, we use the expression “would have” plus the verb in past participle.</em>',
          textoEsp:
            'El tercer condicional se utiliza para hablar de situaciones del pasado que no ocurrieron, pero fantaseamos con lo que podría haber ocurrido. Para ello, es necesario utilizar dos elementos, como en todos los condicionales: la condición, en este caso necesitamos el pasado perfecto, y para mostrar el resultado, utilizamos la expresión "<em>would have</em>" más el verbo en participio pasado.',
        },
      ],
    },
    traduccion7: {
      dialogo: [
        {
          textoIng:
            '<em>The modal verbs in the past are the ones we use to express different meanings in the past. These modal verbs can be combined with the present perfect (verb have + past participle of the main verb of the sentence) to refer to something that has already happened and we regret it happened or we did not do something to avoid it. In this component, we focus on the following modals:</em>',
          textoEsp:
            'Los modales en pasado (o “<em>past modals</em>”) son los modales que usamos para expresar diferentes significados en pasado. Estos verbos modales se pueden combinar con el presente perfecto (verbo <em>have</em> + participio pasado del verbo principal de la oración) para referirse a algo que ya pasó y nos arrepentimos de que pasó o no hicimos algo para evitarlo. En este componente, nos enfocamos en los siguientes modales:',
        },
      ],
    },
    traduccion8: {
      dialogo: [
        {
          textoIng:
            '<em>We use it to talk about something that could have happened or that someone could have done, but in the end it did not happen.<br><br><ol><li>● I could have studied languages, but I studied math.</li><li>● She could have been an excellent teacher.</li></ol>We can also use it to guess something that happened in the past, but we are not sure.<br><br><ol><li>● Sam came to Paris already. He could have visited the Eiffel Tower.</li></ol></em>',
          textoEsp:
            'Lo usamos para hablar de algo que pudo haber pasado o que alguien pudo haber hecho, pero al final no pasó.<br><br><ol><li>● Podría haber estudiado idiomas, pero estudié matemáticas.</li><li>● Podría haber sido una excelente maestra.</li></ol>También podemos usarlo para adivinar algo que sucedió en el pasado, pero no estamos seguros.<br><br><ol><li>● Sam ya vino a París. Podría haber visitado la Torre Eiffel.</li></ol>',
        },
      ],
    },
    traduccion9: {
      dialogo: [
        {
          textoIng:
            '<em>This modal is used to talk about something that we should have done, it is like a piece of advice we did not receive:<br><br><ol><li>● We should have studied more for the English exam.</li><li>● You should have called Elisa first.</li></ol></em>',
          textoEsp:
            'Este modal se usa para hablar de algo que debimos haber hecho, es como un consejo que no recibimos. Por ejemplo:<br><br><ol><li>● Deberíamos haber estudiado más para el examen de inglés.</li><li>● Deberías haber llamado a Elisa primero.</li></ol>',
        },
      ],
    },
    traduccion10: {
      dialogo: [
        {
          textoIng:
            '<em>We use this modal when we assume that something happened because it is a logical conclusion from the facts:<br><br><ol><li>● William graduated with great grades. He must have studied a lot.</li><li>● Elisa graduated from the University with honors. She must have studied very hard.</li><li>● That is a beautiful house! It must have cost a lot!</li></ol></em>',
          textoEsp:
            'Usamos este modal cuando suponemos que algo pasó porque es una conclusión lógica de los hechos:<br><br><ol><li>● William se graduó con excelentes calificaciones. Debe haber estudiado mucho.</li><li>● Elisa se graduó de la Universidad con honores. Debe haber estudiado mucho.</li><li>● ¡Esa es una casa hermosa! ¡Debe haber costado mucho!</li></ol>',
        },
      ],
    },
    traduccion11: {
      dialogo: [
        {
          textoIng:
            '<em>This modal is used as a way to say we wish to have done something but it was not possible because something happened.<br><br><ol><li>● I would have danced with you, but I cannot dance vallenato well.</li><li>● We would have bought the flat, but we didn&apos;t have any money.</li></ol></em>',
          textoEsp:
            'Este modal se usa como una forma de decir que deseamos haber hecho algo, pero no fue posible porque algo sucedió.<br><br><ol><li>● Hubiese bailado contigo, pero no sé bailar bien el vallenato.</li><li>● Hubiéramos comprado el apartamento, pero no teníamos el dinero.</li></ol>',
        },
      ],
    },
    traduccion12: {
      dialogo: [
        {
          textoIng:
            '<em>This modal verb is used when you are not sure that something occurred in the past. The structure is might have + past participle to express past probability:<br><br><ol><li>● Paula isn’t here. She might have missed the bus.</li><li>● The road might have been blocked.</li></ol></em>',
          textoEsp:
            'Este verbo modal se usa cuando no estás seguro de que algo haya ocurrido en el pasado. La estructura es <em>might have</em> + <em>past participle</em> para expresar probabilidad pasada:<br><br><ol><li>● Paula no está aquí. Ella podría haber perdido el autobús.</li><li>● Es posible que la carretera esté bloqueada.</li></ol>',
        },
      ],
    },
    traduccion13: {
      dialogo: [
        {
          textoIng:
            '<em>To express an action in the past that was meant to do in the future, we can use expressions such as “was supposed to” and “were supposed to”; it is sometimes clear to post the result of the action, for instance: “I was supposed to come on time, but I did not”. “They were supposed to do it once, but it took them more than three times”. Now we are going to learn some of these expressions:</em>',
          textoEsp:
            'Para expresar una acción en el pasado que se suponía que se debía hacer en el futuro, podemos usar expresiones como “<em>was supposed to</em>” y “<em>were supposed to</em>”; a veces es claro publicar el resultado de la acción, por ejemplo: “<em>I was supposed to come on time, but I did not</em>”. (“Se suponía que debía venir a tiempo, pero no lo hice”), “<em>They were supposed to do it once, but it took them more than three times</em>”. (“Se suponía que lo harían una vez, pero les tomó más de tres veces”). Ahora vamos a aprender algunas de estas expresiones:',
        },
      ],
    },
    traduccion14: {
      dialogo: [
        {
          textoIng:
            '<em>“<b>Were supposed to</b>” is used to talk about things we meant to do in the past but we did not. For instance: “They were supposed to pick you up, but they could not.” That sentence means it was their commitment to do so, but they did not have the chance to do that.<br><br><ol><li>● We were supposed to study, but our friends came and we did not review anything.</li></ol></em>',
          textoEsp:
            '“<em><b>Were supposed to</b></em>” se usa para hablar de cosas que quisimos hacer en el pasado, pero no lo hicimos. Por ejemplo: “Se suponía que iban a recogerte, pero no pudieron”. Esa oración significa que era su compromiso hacerlo, pero ellos no tuvieron la oportunidad de hacerlo.<br><br><ol><li>● Se suponía que íbamos a estudiar, pero vinieron nuestros amigos y no repasamos nada.</li></ol></em>',
        },
      ],
    },
    traduccion15: {
      dialogo: [
        {
          textoIng:
            '<em>“<b>Was supposed to</b>” is used to talk about things me or somebody meant to do in the past but he/she did not. For instance: “I was supposed to pick you up but I could not.” That sentence means it was my commitment to do so, but I did not have the chance to do that.<br><br><ol><li>● I was supposed to start working at 9, but my boss called me to say I needed to start earlier.</li></ol></em>',
          textoEsp:
            '“<em><b>Was supposed to</em></b>” se usa para hablar de cosas que yo o alguien quería hacer en el pasado, pero no se hizo. Por ejemplo: “Se suponía que debía recogerte, pero no pude”. Esa oración significa que era mi compromiso hacerlo, pero no tuve la oportunidad de hacerlo.<br><br><ol><li>● Se suponía que debía empezar a trabajar a las 9, pero mi jefe me llamó para decirme que tenía que empezar antes.</li></ol></em>',
        },
      ],
    },
    traduccion16: {
      dialogo: [
        {
          textoIng:
            '<em>“<b>Were going to</b>” is used to talk about things we meant to do in the past or that we planned, at least. For instance: “They were going to study English in England, but they received a deal to visit Canada.”<br><br><ol><li>● We were going to travel to England in 1996.</li></ol></em>',
          textoEsp:
            '“<em><b>Were going to</em></b>” se usa para hablar de cosas que quisimos hacer en el pasado o que al menos planeamos. Por ejemplo: “Iban a estudiar inglés en Inglaterra, pero recibieron un trato para visitar Canadá”.<br><br><ol><li>● Íbamos a viajar a Inglaterra en 1996.</li></ol></em>',
        },
      ],
    },
    traduccion17: {
      dialogo: [
        {
          textoIng:
            '<em>“<b>Was going to</b>” is used to talk about things me or somebody meant to do.<br><br><ol><li>● I was going to start working at 9, but they called me from my daughter’s school.</li></ol></em>',
          textoEsp:
            '“<em><b>Was going to</em></b>” se usa para hablar de cosas que yo o alguien pretendía hacer.<br><br><ol><li>● Iba a empezar a trabajar a las 9 pero me llamaron del colegio de mi hija.</li></ol></em>',
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Tom',
          img: require('@/assets/curso/tema1/img6.svg'),
        },
        {
          nombre: 'Sam',
          img: require('@/assets/curso/tema1/img7.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Tom',
          textoIng:
            '<em>Hey, Sam, I am</em> *** <em>trouble with my email account. What can I do?</em>',
          textoEsp:
            'Hey, Sam, estoy teniendo algunos problemas con mi cuenta de correo electrónico, ¿qué puedo hacer?',
          audio: require('@/assets/curso/tema1/Tom1.mp3'),
          palabra: 'having',
        },
        {
          personaje: 'Sam',
          textoIng: '<em>Did you try to</em> *** <em>your account?</em>',
          textoEsp: '¿Intentaste restablecer tu cuenta?',
          audio: require('@/assets/curso/tema1/Sam1.mp3'),
          palabra: 'reset',
        },
        {
          personaje: 'Tom',
          textoIng:
            '<em>I did, but it didn&apos;t work. I think I</em> *** <em>have tried writing an email to the support center.</em>',
          textoEsp:
            'Lo hice, pero no funcionó. Creo que debería haber intentado escribir un correo electrónico al centro de soporte.',
          audio: require('@/assets/curso/tema1/Tom2.mp3'),
          palabra: 'should',
        },
        {
          personaje: 'Sam',
          textoIng:
            '<em>Maybe you should have done that from the beginning.</em>',
          textoEsp: 'Quizás deberías haberlo hecho desde el principio.',
          audio: require('@/assets/curso/tema1/Sam2.mp3'),
          palabra: '',
        },
        {
          personaje: 'Tom',
          textoIng:
            '<em>I agree. I will write the email as soon as I</em> *** <em>home.</em>',
          textoEsp:
            'Estoy de acuerdo. Escribiré el correo tan pronto como llegue a casa.',
          audio: require('@/assets/curso/tema1/Tom3.mp3'),
          palabra: 'get',
        },
        {
          personaje: 'Sam',
          textoIng:
            '<em>That sounds good. Let me know when the problem is fixed.</em>',
          textoEsp:
            'Eso suena bien. Déjame saber cuando se solucione el problema.',
          audio: require('@/assets/curso/tema1/Sam3.mp3'),
          palabra: '',
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
