<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.bg-c63.mb-4
      .col-12.p-5
        .row.align-items-center
          .col-lg-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/img1.png", style="width:350px").m-auto
          .col-lg-9
            Traduccion.color-acento-botones(:dialogo="traduccion1")
            Audio.color-secundario.mx-auto(
              :audio="require('@/assets/curso/temas/audio1.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Sintesis',
  components: {
    Traduccion,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>In this component, we were able to practice on real and unreal situations created with conditionals, some of them became regrets just by the fact that they combined a sentence in past perfect and the second one using the structure “would have” + verb in past participle. We also practiced the third conditional with modal verbs such as: should have, could have, might have, must have and have to. To express the future in past tenses, we used was/were supposed to / was/were going to. Now, in terms of vocabulary, we learnt the typical expressions to talk about personal and work plans. All of the previous information was worked with sequence linkers and expressions to express opinion.</em>',
          textoEsp:
            'En este componente, pudimos practicar sobre situaciones reales e irreales creadas con condicionales, algunas de ellas se convirtieron en arrepentimientos solo por el hecho de combinar una oración en pretérito perfecto y la segunda usando la estructura “<em>would have</em>” + verbo en participio pasado. También practicamos el tercer condicional con verbos modales como: <em>should have</em>, <em>could have</em>, <em>might have</em>, <em>must have</em> y <em>have to</em>. Para expresar el futuro en tiempos pasados, usamos </em>was</em>/<em>were supposed to</em> / <em>was</em>/<em>were going to</em>. Ahora, en cuanto al vocabulario, aprendimos las expresiones típicas para hablar de planes personales y de trabajo. Toda la información anterior se trabajó con conectores de secuencia y expresiones para expresar opinión.',
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
