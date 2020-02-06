<template>
<section class="content">
  <div class="row">
    <div class="col-md-6">    
        <label>Temperatura</label>
    </div>
  </div>
  <div class="row">    
    <div class="col-md-6">    
        <div class="form-group">
            <input class="form-control" v-model="TxtMinimo" placeholder="Mínimo Temperatura (C°)" type="text">
        </div>  
    </div>
    <div class="col-md-6">    
        <div class="form-group">
            <input class="form-control" v-model="TxtMaximo" placeholder="Máximo Temperatura (C°)" type="text">
        </div>  
    </div>         
  </div>
  <div class="row">
    <div class="col-md-6">    
        <label>PH</label>
    </div>
  </div>
  <div class="row">    
    <div class="col-md-6">    
        <div class="form-group">
            <input class="form-control" v-model="TxtMinimo" placeholder="Mínimo PH (Ph)" type="text">
        </div>  
    </div>
    <div class="col-md-6">    
        <div class="form-group">
            <input class="form-control" v-model="TxtMaximo" placeholder="Máximo PH (Ph)" type="text">
        </div>  
    </div>         
  </div>
  <div class="row">
    <div class="col-md-12">
          <button type="button" class="btn btn-primary btn-md " v-on:click="Guardar()">Guardar</button>
    </div>
  </div> 
</section>
</template>
<script>
export default {
  data () {
    return {
       TxtUsuario:'',
       TxtClave:'',
       Authenticated:true,
    }
  },
  methods: {
    Guardar() { 

    }
  }
}    
</script>  