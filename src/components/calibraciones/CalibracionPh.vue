<template>
<section class="content">
<div class="row">    
    <div class="col-md-6">         
        <div class="info-box" style="min-height: 250px;">
            <div class="info-box-content">  
                <div class="col-md-6">   
                    <div class="form-group">
                        <div class="row" v-show="CalibracionPh7!=''">
                            Sensor Calibrado el {{this.CalibracionPh7}}
                        </div>
                        <div class="row">
                            <button type="button"  style="margin-top:100px" class="btn btn-primary btn-md " v-on:click="CalibracionPh(7)">Calibrar Sensor Ph 7</button>
                        </div>                      
                    </div>   
                </div>
                <div class="col-md-6">      
                <div>
                    <img src="/static/img/ph7.png" height="200"/>
                </div>            
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">         
        <div class="info-box" style="min-height: 250px;">
            <div class="info-box-content">  
                <div class="col-md-6">   
                    <div class="form-group">
                        <div class="row" v-show="CalibracionPh4!=''">
                            Sensor Calibrado el {{this.CalibracionPh4}}
                        </div>
                        <div class="row">
                            <button type="button"  style="margin-top:100px" class="btn btn-primary btn-md " v-on:click="CalibracionPh(4)">Calibrar Sensor Ph 4</button>
                        </div>                                          
                    </div>   
                </div>
                <div class="col-md-6">      
                <div>
                    <img src="/static/img/ph4.png" height="200"/>
                </div>            
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">         
        <div class="info-box" style="min-height: 250px;">
            <div class="info-box-content">  
                <div class="col-md-6">   
                    <div class="form-group">
                        <div class="row" v-show="CalibracionPh10!=''">
                            Sensor Calibrado el {{this.CalibracionPh10}}
                        </div>
                        <div class="row">
                            <button type="button"  style="margin-top:100px" class="btn btn-primary btn-md " v-on:click="CalibracionPh(10)">Calibrar Sensor Ph 10</button>
                        </div>                                          
                    </div>   
                </div>
                <div class="col-md-6">      
                <div>
                    <img src="/static/img/ph10.png" height="200"/>
                </div>            
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</template>
<script>
export default {
  data () {
    return {
       CalibracionPh7 : '',
       CalibracionPh10 : '',
       CalibracionPh4 : '' 
    }
  },
  methods: {
    CalibracionPh(valor) { 
        const fill = (number, len) =>
              "0".repeat(len - number.toString().length) + number.toString();
        let date = new Date()
        this.hora_actualizacion = fill(date.getHours(),2) + ':' + fill(date.getMinutes(),2) + ':' + fill(date.getSeconds(),2)            
        if (valor == 7){
            this.CalibracionPh7 = date
        }else if(valor == 4){
            this.CalibracionPh4 = date
        }else if(valor == 10){
            this.CalibracionPh10 = date
        }
    }
  }
}    
</script>  