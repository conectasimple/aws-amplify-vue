<template>
<div class="margen row">
    <div class="col-md-4">      
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="background-login">
          <h4>Inicio Sesión</h4>
          <div class="form-group">
            <input class="form-control" v-model="TxtUsuario" placeholder="Nombre de usuario" type="text">
          </div>
          <br />
          <div class="form-group">
            <input class="form-control" v-model="TxtClave" type="password" placeholder="Clave Acceso" >
          </div>
          <div>
            <button type="button" class="btn btn-primary btn-md " v-on:click="Login()">Acceso Usuario</button>
          </div>      
        </div>
      </div>
    </div> 
     <div class="col-md-4">
      
    </div>   
</div>
</template>

<script>
import Auth from '@aws-amplify/auth';

export default {
  name: 'Home',
  data () {
    return {
       TxtUsuario:'',
       TxtClave:'',
       Authenticated:true,
    }
  },
  methods: {
    Login() {       
        Auth.signIn(this.TxtUsuario, this.TxtClave)
        .then(success => {
            this.$store.commit('SET_USER', this.TxtUsuario)
            if (window.localStorage) {
              window.localStorage.setItem('user', JSON.stringify(this.TxtUsuario))              
            }
            this.$router.push('/dashboard')
          }
        )
        .catch(err => 
            this.Authenticated=false            
        );
         
    },
  },
}
</script>  
<style>
.margen{
  margin-top:150px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.background-login{
  padding:15px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
}
 
</style>