<template>
<!--Necessidade de encapsular dentro de uma div-->
  <div class="container">
    <h1>
      <!--
        Interpolação
        ou usar
        <h1 v-text="titulo"></h1>
        -->
      {{titulo}}
    </h1>
    <!--
    Proibido usar interpolação em atributos. 
    usar v-bind:  
    um atalho é usar apenas dois pontos(:) 
    :src
    -->
  <ul>
    <!--DIRETIVAS-->
    <li v-for="foto in fotos" :key="foto">
      <img :src="foto.url" :alt="foto.titulo">
    </li>
  </ul>

  </div>
  </template>

<script>

export default {
  data(){
    return{
      titulo: "Alurapic",
      fotos: [{
        url: 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg',
        titulo: 'cachorro'
        },
        {
        url: 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg',
        titulo: 'cachorro 2'
        }
      ],
    }
  }
  
}
</script>

<style>

</style>
