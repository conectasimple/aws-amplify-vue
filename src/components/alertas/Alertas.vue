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
            <input class="form-control" v-model="TxtTempMinimo" placeholder="Mínimo Temperatura (C°)" type="text">
        </div>  
    </div>
    <div class="col-md-6">    
        <div class="form-group">
            <input class="form-control" v-model="TxtTempMaximo" placeholder="Máximo Temperatura (C°)" type="text">
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
            <input class="form-control" v-model="TxtPhMinimo" placeholder="Mínimo PH (Ph)" type="text">
        </div>  
    </div>
    <div class="col-md-6">    
        <div class="form-group">
            <input class="form-control" v-model="TxtPhMaximo" placeholder="Máximo PH (Ph)" type="text">
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
import { updateAlarma } from '../../graphql/mutations';
export default {
  data () {
    return {
       TxtUsuario:'',
       TxtClave:'',
       Authenticated:true,
       TxtTempMinimo : '',
       TxtTempMaximo : '',
       TxtPhMinimo : '',
       TxtPhMaximo : '',
    }
  },
  methods: {
    updateAlarm(){
      let minCloro = -1
      let MaxPh = this.TxtPhMaximo
      let MaxTemp = this.TxtTempMaximo
      let MinPh = this.TxtPhMinimo
      let MinTemp =  this.TxtTempMinimo
      let MinCloro = -1
      var str_  = "{\"MaxCloro\": \"" + minCloro + "\", \"MaxPh\": \"" + MaxPh + "\", \"MaxTemp\": \"" + MaxTemp + "\", \"MinPh\": \"" + MinPh +"\",\"MinTemp\": \"" + MinTemp + "\",\"MinCloro\": \"" + MinCloro + "\"}" 
      console.log(str_)
      const itemPayload =  {
        Row : "PMPO_device_1",
        payload : str_
      }      
      this.$apollo.mutate({
        mutation: updateAlarma,
        variables: {input:itemPayload},
        update: (store, { data: { UpdateAlarma } }) => {           
             console.log('Se actuliza registro alerta')
        },         
      })      
    },
    Guardar() { 
      this.updateAlarm()
    }
  }
}    
</script>  