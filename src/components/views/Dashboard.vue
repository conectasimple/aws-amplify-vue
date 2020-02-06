<template>
  <!-- Main content -->
  <section class="content">
    <!-- GitHub hint -->    
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12">
       Hora última actualizacion : {{horaActualizacion}} <span v-if="status=='online'" class = "badge green-status" >online</span><span v-else class="badge red-status">offline</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-yellow"><i class="ion-thermometer"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Temperatura Actual</span>
            <span class="info-box-number" v-if = "Lectura==true" >{{Temperatura}}°C</span><span class="info-box-number" v-else>--</span>
          </div>
        </div>        
      </div>      
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-green"><i class="ion-beaker"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">PH Actual</span>
            <span class="info-box-number" v-if = "Lectura==true">{{PH}}pH</span> <span class="info-box-number" v-else>--</span>
          </div>
        </div>
      </div>
     
      <!-- fix for small devices only -->
      <div class="clearfix visible-sm-block"></div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"><i class="ion-paintbucket"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Cloro Libre Actual</span>
            <span class="info-box-number">--</span>
          </div>
        </div>
      </div>     
    </div>
    <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="info-box bg-red">
            <span class="info-box-icon"><i class="ion ion-ios-alarm-outline"></i></span> 
            <div class="info-box-content">
                <span class="info-box-text">Alertar si Temperatura (C°)</span> <span class="info-box-number" v-if="TempAlert==true"><span class="ion-arrow-graph-down-left" style="font-size: 30px;"></span>10 <span class="ion-arrow-graph-up-right" style="font-size: 30px;"></span>30</span> <span class="info-box-number" v-else>--</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="info-box bg-red">
            <span class="info-box-icon"><i class="ion ion-ios-alarm-outline"></i></span> 
            <div class="info-box-content">
                <span class="info-box-text">Alertar si PH (Ph)</span> <span class="info-box-number" v-if="PhAlert==true"><span class="ion-arrow-graph-down-left" style="font-size: 30px;"></span>10 <span class="ion-arrow-graph-up-right" style="font-size: 30px;"></span>12</span> <span class="info-box-number" v-else>--</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="info-box bg-red">
            <span class="info-box-icon"><i class="ion ion-ios-alarm-outline"></i></span> 
            <div class="info-box-content">
                <span class="info-box-text">Alertar si Cloro Libre</span> <span class="info-box-number">--</span>            
            </div>
          </div>
        </div>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-12 col-xs-12">
              <p class="text-center">
                <strong>Temperatura Máxima x Hr. al {{fechaActual}} </strong>
              </p>
              <canvas id="chartTemp" ></canvas>
            </div>
            <div class="col-sm-12 col-xs-12" style="margin-top:15px;height: 250px; overflow: auto;">
              <p><strong>Temperatura Por Hora</strong></p>
               <table class="table table-bordered table-condensed table-hover responsive" cellspacing="0" cellpadding ="0">
                <thead>
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Temperatura(C°)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in HistorialTomasMedida" v-bind:key="item.PositionInRow">
                    <td scope="row">{{JSON.parse(item.payload).fecha.substring(11,19)}}</td>
                    <td>{{JSON.parse(item.payload).temperatura}}</td>
                  </tr>                 
                </tbody>
                </table>
             </div>
          </div>
        </div>       
      </div>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm- col-xs-12">
              <p class="text-center">
                <strong>Medida Ph Máxima x Hr. al {{fechaActual}} </strong>
              </p>
              <canvas id="chartPh" ></canvas>
            </div> 
            <div class="col-sm-12 col-xs-12" style="margin-top:15px;height: 250px; overflow: auto;">
              <p><strong>Ph Por Hora</strong></p>
               <table class="table table-bordered table-condensed table-hover responsive" cellspacing="0" cellpadding ="0">
                <thead>
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Ph</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in HistorialTomasMedida" v-bind:key="item.PositionInRow">
                    <td scope="row">{{JSON.parse(item.payload).fecha.substring(11,19)}}</td>
                    <td>{{JSON.parse(item.payload).ph}}</td>
                  </tr>                 
                </tbody>
                </table>
             </div>         
          </div>
        </div>       
      </div>
    </div>
    
  </section>
  <!-- /.content -->
</template>

<script>
import Chart from 'chart.js'
import Alert from '../widgets/Alert'
import InfoBox from '../widgets/InfoBox'
import ProcessInfoBox from '../widgets/ProcessInfoBox'
import { listSensors } from '../../graphql/queries';

export default {
  name: 'Dashboard',
  components: {
    Alert,
    InfoBox,
    ProcessInfoBox
  },
  apollo: {
      SensorValues: {
        query: () => listSensors,       
        update: ({listSensors}) => listSensors.items, 
        variables(){
          let todayIni = new Date();
          todayIni.setHours(0, 0, 0);
          let todayFin = new Date();
          todayFin.setHours(23, 59, 59);
          let timestampini = Math.floor(todayIni / 1000)
          let timestampfin = Math.floor(todayFin / 1000)  
          this.fechaActual = (todayIni.getDate() + "/" + (todayIni.getMonth() +1) + "/" + todayIni.getFullYear())            
          return {filter : {PositionInRow: {ge: timestampini,le: timestampfin}}}
        }, 
        result:function({data}){
            this.init()
        },          
        pollInterval: 15000       
      }
  },
  data () {
    return {
      SensorValues:[],
      Temperatura:0,
      PH:0,
      fechaActual:'',
      tempData:[],
      phData:[],
      chartline : null,
      Phline : null,
      horaActualizacion : '--',
      Lectura:true,
      TempAlert:true,
      PhAlert:true,
      status : "offline",
    }
  },
  methods: {  
    init() {
      let temp = 0
      let ph_ = 0
      for (let i=0 ; i<this.SensorValues.length;i++){
          let medidas = JSON.parse(this.SensorValues[i].payload)
          temp = medidas.temperatura
          ph_ = medidas.ph
      }
      this.Temperatura = temp   
      this.PH = ph_
      this.DataAxisY()   
    },
    DataAxisY () {  
      var temperaturas = []
      var map= {'h0': '0','h1': '0','h2': '0' ,'h3': '0','h4': '0','h5': '0','h6': '0','h7': '0','h8': '0','h9': '0','h10': '0','h11': '0','h12': '0','h13': '0','h14': '0','h15': '0','h16': '0','h17': '0','h18': '0','h19': '0','h20': '0','h21': '0','h22': '0','h23': '0'}        
      var mapPh= {'h0': '0','h1': '0','h2': '0' ,'h3': '0','h4': '0','h5': '0','h6': '0','h7': '0','h8': '0','h9': '0','h10': '0','h11': '0','h12': '0','h13': '0','h14': '0','h15': '0','h16': '0','h17': '0','h18': '0','h19': '0','h20': '0','h21': '0','h22': '0','h23': '0'}        
      var fechaActual = new Date()
      var tempMax = -1
      var phMax = -1
      for (let i=0 ; i<this.SensorValues.length;i++){
        var medidas = JSON.parse(this.SensorValues[i].payload)
        var date = new Date(medidas.pos*1000);
        if (date !==null){          
          if (date.getHours()!=0){
              if (medidas.temperatura > tempMax){
                  tempMax = medidas.temperatura 
              }  
              if (medidas.ph > phMax){
                  phMax = medidas.ph  
              }     
              map['h' + (date.getHours()).toString()]=tempMax 
              mapPh['h' + (date.getHours()).toString()]=phMax             
          }else{
              if (medidas.temperatura > tempMax){
                  tempMax = medidas.temperatura  
              }
              if (medidas.ph > phMax){
                  phMax = medidas.ph  
              }
              map['h0']=tempMax
              mapPh['h0']=phMax
          }          
          const fill = (number, len) =>
              "0".repeat(len - number.toString().length) + number.toString();
          this.horaActualizacion = fill(date.getHours(),2) + ':' + fill(date.getMinutes(),2) + ':' + fill(date.getSeconds(),2)          
          //console.log(this.diff_minutes(date,fechaActual) )
          if (date.getHours()==fechaActual.getHours()){
            if (this.diff_minutes(date,fechaActual) == 0 || this.diff_minutes(date,fechaActual) == 1){
              this.Lectura = true
              this.status = "online"
            }
            else{
              this.Lectura = false 
              this.status = "offline"            
            }
          }          
        }
      }     
      //datos temperatura
      if (this.tempData.length>0)
        this.tempData  = [map['h0'],map['h1'],map['h2'],map['h3'],map['h4'],map['h5'],map['h6'],map['h7'],map['h8'],map['h9'],map['h10'],map['h11'],map['h12'],map['h13'],map['h14'],map['h15'],map['h16'],map['h17'],map['h18'],map['h19'],map['h20'],map['h21'],map['h22'],map['h23']]
      else
        this.tempData  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      if(this.chartline!==null && this.chartline.data!==null){
        this.chartline.data.datasets[0].data = this.tempData
        this.chartline.update()
      }      
      //fin datos temperatura

      //datos ph
      if (this.SensorValues.length>0){
        if (this.phData.length>0)
          this.phData  = [mapPh['h0'],mapPh['h1'],mapPh['h2'],mapPh['h3'],mapPh['h4'],mapPh['h5'],mapPh['h6'],mapPh['h7'],mapPh['h8'],mapPh['h9'],mapPh['h10'],mapPh['h11'],mapPh['h12'],mapPh['h13'],mapPh['h14'],mapPh['h15'],mapPh['h16'],mapPh['h17'],mapPh['h18'],mapPh['h19'],mapPh['h20'],mapPh['h21'],mapPh['h22'],mapPh['h23']]
        else
          this.phData  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        if(this.Phline!==null && this.Phline.data!==null){
          this.Phline.data.datasets[0].data = this.phData
          this.Phline.update()
        }              
      }else{
        this.horaActualizacion = '--'
        this.Temperatura = '--'
        this.PH = '--'
        this.Lectura = false
      }
      //datos ph
    },
    PhNumbersY () { 
      this.phData = [6,7,5,3,2,1,2,3,4,10,7,7]    
      if(this.Phline.data!==null){
        this.Phline.data.datasets[0].data = this.phData
        this.Phline.update()
      }
      return this.phData
    }, 
    diff_minutes(dt2, dt1) 
    {
      var diff =(dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff));      
    }

  },
  computed: {    
    isMobile() {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    },
    HistorialTomasMedida(){
      let valuesHrs = []
      let max_ = -1
      let maxHora = []
      let SensorValuesAux = this.SensorValues.reverse()
      for (let i  = 0 ; i<SensorValuesAux.length ; i++){
          let hora = JSON.parse(SensorValuesAux[i].payload).fecha.substring(11,19)
          let minutos = hora.split(':')[1]  
          if (minutos%10==0){
            if (minutos > max_){
                max_ = minutos
                max_ = SensorValuesAux[i]
            }
          }else{
              let encontrado = false
              for (let j=0; j<maxHora.length;j++){
                  if (maxHora[j].PositionInRow==max_){
                      encontrado = true   
                      break
                  }
              }
              if (!encontrado && max_!=-1)
                  maxHora.push(max_)
              max_ = -1
              //console.log(this.SensorValues[i].PositionInRow)              
              //console.log(maxHora.PositionInRow)
          }
      }
      
      return maxHora
    },
  },
  mounted () {    
    this.$nextTick(() => {
      var ctx = document.getElementById('chartTemp').getContext('2d')
      var config = {
        type: 'line',
        data: {
          labels: ['0','1', '2','3', '4','5', '6','7', '8','9', '10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
          datasets: [{
            label: 'Temperatura Máx.',
            fill: false,
            borderColor: '#f39c12',
            pointBackgroundColor: '#f39c12',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data : this.tempData
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: false
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          },
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Temperatura (°C)"
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Hora (AM/PM)"
              }
          }]
          }
        }
      }     
      this.chartline = new Chart(ctx, config)   
      
      //Ph
      var configPh = {
        type: 'line',
        data: {
          labels: ['00','01', '02','03', '04','05', '06','07', '08','09', '10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
          datasets: [{
            label: 'PH Máx. ',
            fill: false,
            borderColor: '#f39c12',
            pointBackgroundColor: '#f39c12',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data : this.phData
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: false
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          },
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Potencial de Hidrógeno(Ph)"
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Hora (AM/PM)"
              }
          }]
          }
        }
      }  
      var ctxPh = document.getElementById('chartPh').getContext('2d')   
      this.Phline = new Chart(ctxPh, configPh)
    })
  }
}
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
.green-status{
  background-color:#28a745;
  margin-top:-5px;

} 
.red-status{
  background-color:#dc3545;
  margin-top:-5px;
}
</style>
