<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Logo Ici</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/utilisateurs">Utilisateurs</RouterLink>
            </li>
            <li class="nav-item" >
              <RouterLink class="nav-link"  to="/profile">Profile</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false"> Dropdown (si besoin)
              </RouterLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <RouterLink class="dropdown-item" to="/update">Mise à jour</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/newUtilisateur">Nouvel utilisateur</RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/about">à propos</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
          <div class="d-flex align-items-center gx-20">
            <div class="p-2" >Bienvenu nom et prenom</div>
            <button >Login</button>
            <button >Logout</button>
          </div>
        </div>
      </div>
    </nav>
    </header>
</template>

<style scoped>
    header {
        width: 100%;
        background:#2196f7 ;
        border-bottom: 4px solid #607d8b;
        box-sizing: border-box;
        padding: 10px;
        color: rgb(0, 0, 0);
        line-height: 1.5;

    } 
    

nav {
  width: 100%;
  font-size: 12px;
  /* text-align: center; */
  margin-bottom: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>