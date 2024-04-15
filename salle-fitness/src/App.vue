<template>
  <div>
       <app-header/>
       <div class="container">
           <RouterView/>
       </div>
       <Footer/>
  </div>
  <!-- <listeUtilisateur/> -->

  <div> 
   </div>
</template>



<script setup>
   import Footer from '@/components/header_footer/footer.vue'
   import profileUlisateur from './components/utilisateur/profileUtilisateur.vue'
   import login from '@/components/page_connexion/login.vue'
   import listeUtilisateur from'@/components/utilisateur/listeUtilisateur.vue'
  import HomeView from './views/HomeView.vue';
</script>



<style>
   body{
    width: 100%;
       padding: 0;
       margin: 0;
       font-family: 'Robot', sans-serif;
   }
   .container{
       min-height: 84vh;

       box-sizing: border-box;
       padding: 20px;
   }

</style>