<template>
  <div class="about">
   
        <h3>Bienvenue sur notre site de fitness !</h3><br>
<hr>
    <div>
      <p> Je suis Mamadou Oury Bah, et je suis ravi de vous accueillir sur mon site dédié à votre bien-être physique et mental.<br>
       Avec [nombre d'années] années d'expérience dans l'industrie du fitness, ma mission est de vous aider à atteindre vos objectifs 
       de santé et de forme.<br>
      Sur ce site, vous trouverez une variété de programmes d'entraînement, de conseils nutritionnels et de ressources pour vous
       accompagner tout au long de votre parcours de remise en forme. <br>Que vous soyez débutant ou expérimenté, nous avons des plans
        personnalisés pour répondre à vos besoins uniques.<br>
      Ce qui distingue notre site, c'est notre approche holistique de la santé et du bien-être. <br>Nous croyons en l'importance de 
      l'équilibre entre l'exercice, la nutrition et le repos pour atteindre un mode de vie sain et durable.<br>
      Notre objectif est de vous offrir une expérience complète et motivante, que ce soit en ligne ou à travers nos séances 
      d'entraînement en personne. <br>Nous sommes là pour vous soutenir et vous encourager à chaque étape de votre parcours.<br>
      N'hésitez pas à explorer notre site et à nous contacter pour toute question ou pour en savoir plus sur nos programmes et services. 
      <br>Nous sommes impatients de vous accompagner dans votre aventure vers une meilleure santé et une meilleure forme physique.<br>
      Merci de votre visite, et au plaisir de vous aider à atteindre vos objectifs de fitness !<br></p>
    </div>
     
     
<hr><br>
     <strong> Mamadou Oury Bah</strong>
    
  </div>
  <div>
    <button type="button" 
    class="btn btn-primary btn-lg"  
    @click="router.push('/profile')">Profile</button>
</div>
</template>

<style>
 
  .about {
    margin: 2px;
    min-height: 100vh;
    font-size: 18px;
    color:black;  }
    h3,strong{
      text-align: center;
    }

</style>
<script setup>
import {useRouter,useRoute} from 'vue-router';
 const router = useRouter();
 const route = useRoute();

</script>
