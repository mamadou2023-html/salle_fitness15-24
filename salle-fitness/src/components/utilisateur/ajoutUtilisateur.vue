<template>
    <main>
        <h1>Ajouter un etudiant</h1>
        <form @submit.prevent="" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input type="text" class="form-control" id="prenom" >
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom">
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
                <input type="file" class="form-control" id="photo" >
            </div>

            <!-- Ajout des relations  -->

            <div class="mb-3">
                <label for="department" class="form-label">Departements</label>
                <select id="department" class="form-select" >
                    <!-- <option selected>Choisir un departement</option> -->
                    <!-- <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> -->
                    <option></option>
                </select>
            </div>
            <div class="mb-3">
                <label for="role" class="form-label">Roles</label>
                <select id="role" class="form-select" >
                    <!-- <option selected>Choisir un role</option> -->
                    <!-- <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> -->
                    <!-- <option :selected="etudiant.roleId" v-for="role in roles" :value="role.id" :key="role.id">{{ role.titre }}</option> -->
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>

</template>
<script>

</script>