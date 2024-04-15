<template>
    <main>
        <h1>Mettre a jour les infos de </h1>
        <form @submit.prevent="soumettre" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input type="text" class="form-control" id="prenom">
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" >
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" >
            </div>
            <div class="mb-3">
                <label for="mpd" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="mdp" >
            </div>
            <div class="mb-3">
                <label for="naissance" class="form-label">Date de naissance</label>
                <input type="date" class="form-control" id="naissance" >
            </div>
            <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input type="file" class="form-control" >
            </div>

            <!-- Ajout des relations  -->

          
           
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>

</template>

<script setup>

</script>
