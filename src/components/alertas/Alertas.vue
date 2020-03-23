<template>
<section class="content">
  <div class="row">    
    <div class="col-md-6">    
        <div class="form-group">
            <label>Temperatura Mínima</label>
            <input class="form-control" v-model="TxtTempMinimo" placeholder="" type="text">
        </div>  
    </div>
    <div class="col-md-6">    
        <div class="form-group">
            <label>Temperatura Máxima</label>
            <input class="form-control" v-model="TxtTempMaximo" placeholder="" type="text">
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
            <label>Medida Mínima PH (Ph)</label>
            <input class="form-control" v-model="TxtPhMinimo" placeholder="" type="text">
        </div>  
    </div>
    <div class="col-md-6">    
        <label>Medida Máxima PH (Ph)</label>
        <div class="form-group">
            <input class="form-control" v-model="TxtPhMaximo" placeholder="" type="text">
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
import { getAlarma } from '../../graphql/queries';
import { updateAlarma } from '../../graphql/mutations';
export default {
  apollo: {                     
      alarmValues: {
        query: () => getAlarma,    
        update(data){ 
          //console.log(data.getAlarma)
          return data.getAlarma
        },
        variables(){
          return {Row:  "PMPO_device_1"}  
        },
        result:function({data}){
            if (data !== undefined) {              
              let item  = JSON.parse(data.getAlarma.payload)            
              this.loadData(item)
            }
        },                  
      },     
  },      
  data () {
    return {
       TxtUsuario:'',
       TxtClave:'',
       TxtTempMinimo : '',
       TxtTempMaximo : '',
       TxtPhMinimo : '',
       TxtPhMaximo : '',
       alarmValues : null,
    }
  },
  created() {
    localStorage.setItem("idRoute",this.$route.meta.id) 
  },
  methods: {
    loadData(item){
      this.TxtTempMaximo = item.MaxTemp
      this.TxtTempMinimo = item.MinTemp
      this.TxtPhMaximo = item.MaxPh
      this.TxtPhMinimo = item.MinPh
    },
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
          this.$swal.fire({
            icon: 'success',
            title: 'Cambios Realizados Correctamente'         
          })
        },         
      })      
    },
    Guardar() { 
      this.updateAlarm()
    }
  }
}    
</script>  