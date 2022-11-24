<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1.mb-5
      .col-12.px-5.pt-5
        .row.mb-4
          .col-lg-3
            figure
              img(src="@/assets/curso/intro/img1.png", style="width:350px").m-auto
          .col-lg-9
            .row
              figure.fig-p1
                img(src="@/assets/curso/intro/img2.svg")
              .col-12.p-5.bg-c2
                p.mb-0 Es importante que los condicionales y los verbos modales puedan usarse para hablar sobre arrepentimientos y situaciones que la gente desearía que no hubieran sucedido. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo, y para comenzar, se le invita a explorar el video que se presenta a continuación:
              figure.fig-p2
                img(src="@/assets/curso/intro/img3.svg")
        .row.mb-4.mb-lg-0
          .col-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/i9SA1ApfIGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-lg-10.p-4.bg-c3
        .row.align-items-center
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/intro/img4.svg", style="width:150px").m-auto
          .col.mb-4.mb-lg-0
            p.mb-0 Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
          .col-lg-4
            a.anexo(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo]. Guion esp and ingl_Video introductorio
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
