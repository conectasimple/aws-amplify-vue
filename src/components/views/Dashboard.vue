<template>
  <!-- Main content -->
  <section class="content">
    <!--<h1>{{this.SensorValues.length}}</h1> -->
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
                <span class="info-box-text">Alertar si Temperatura (C°)</span> <span class="info-box-number" style="font-size:30px;" v-if="TempAlert==true"><span class="ion-arrow-graph-down-left" style="font-size: 25px;"></span>{{MinTemp}} <span class="ion-arrow-graph-up-right" style="font-size: 25px;"></span>{{MaxTemp}}</span> <span class="info-box-number" v-else>--</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="info-box bg-red">
            <span class="info-box-icon"><i class="ion ion-ios-alarm-outline"></i></span> 
            <div class="info-box-content">
                <span class="info-box-text">Alertar si PH (Ph)</span> <span class="info-box-number" style="font-size:30px;" v-if="PhAlert==true"><span class="ion-arrow-graph-down-left" style="font-size: 25px;"></span>{{MinPh}} <span class="ion-arrow-graph-up-right" style="font-size: 30px;"></span>{{MaxPh}}</span> <span class="info-box-number" v-else>--</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="info-box bg-red">
            <span class="info-box-icon"><i class="ion ion-ios-alarm-outline"></i></span> 
            <div class="info-box-content">
                <span class="info-box-text">Alertar si Cloro Libre</span> <span class="info-box-number" style="font-size:30px;" >--</span>            
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
              <p><strong>Historial Temperatura</strong></p>
               <div v-if="HistorialTomasMedida.length>0">
               <table class="table table-bordered table-condensed table-hover responsive" cellspacing="0" cellpadding ="0">
                <thead>
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Temperatura(C°)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in HistorialTomasMedida" v-bind:key="item.PositionInRow">
                    <td scope="row">{{item.fecha.substring(11,19)}}</td>
                    <td>{{item.temperatura}}</td>
                  </tr>                 
                </tbody>
                </table>
                </div>
                <div v-else>
                  <p>Sin Información</p>
                </div>
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
              <p><strong>Historial Ph</strong></p>
               <div v-if="HistorialTomasMedida.length>0">
               <table class="table table-bordered table-condensed table-hover responsive" cellspacing="0" cellpadding ="0">
                <thead>
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Ph</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in HistorialTomasMedida" v-bind:key="item.PositionInRow">
                    <td scope="row">{{item.fecha.substring(11,19)}}</td>
                    <td>{{item.ph}}</td>
                  </tr>                 
                </tbody>
                </table>
                </div>
                <div v-else>
                  <p>Sin Información</p>
                </div>
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
import { listSensorIots, listHistoricoSensorIots, listAlarmas, getAlarma } from '../../graphql/queries';
import apiHistory from '../../api/index'
import moment from 'moment-timezone'

export default {
  name: 'Dashboard',
  components: {
    Alert,
    InfoBox,
    ProcessInfoBox
  },   
  apollo: {                     
      SensorValues: {
        query: () => listSensorIots,    
        //update: ({listSensorIOTS}) => listSensorIOTS.items, 
        update(data){ 
          return data.listSensorIOTS.items
        },
        variables(){
          let todayIni = new Date();
          todayIni.setHours(0, 0, 0);
          let todayFin = new Date();
          todayFin.setHours(23, 59, 59);
          let timestampini = Math.floor(todayIni / 1000)
          let timestampfin = Math.floor(todayFin / 1000)  
          this.fechaActual = (todayIni.getDate() + "/" + (todayIni.getMonth() +1) + "/" + todayIni.getFullYear())            
          return {limit:72000,  filter : {PositionInRow: {ge: timestampini}}}     
        },
        result:function({data}){
            this.init()
        },          
        pollInterval: 15000       
      },     
  },      
  created() {
    if (localStorage.getItem("idRoute")!=this.$route.meta.id)
      location.reload();
    localStorage.setItem("idRoute",this.$route.meta.id) 
  }, 
  data () {
    return {
      SensorValues:[],
      alertaValues:null,
      Temperatura:0,
      PH:0,
      fechaActual:'',
      tempData:[],
      phData:[],
      chartline : null,
      Phline : null,
      horaActualizacion : '--',
      Lectura:false,
      TempAlert:true,
      PhAlert:true,
      status : "offline",
      tokenNext :'',
      dataSensorsHist : [],
      frecuencia : 0,
      MaxTemp:'--',
      MaxCloro:'--',
      MinCloro:'--',
      MinPh:'--',
      MinTemp:'--',
      MaxPh:'--',
      refresh:true,
      routeId : -1,
    }
  },      
  methods: {  
    init() {      
      this.verifyStatusSensor()
      let temp = 0
      let ph_ = 0
      var date = null
      if (this.SensorValues.length > 0){
        let medidas  = JSON.parse(this.SensorValues[this.SensorValues.length-1].payload)
        temp = medidas.temperatura
        ph_ = medidas.ph
        this.Temperatura = temp   
        this.PH = ph_
        for (let i=0 ; i<this.SensorValues.length;i++){
            var jsonItems = JSON.parse(this.SensorValues[i].payload)  
            date = new Date(jsonItems.pos*1000);
            if (date !==null){ 
              const fill = (number, len) =>
                "0".repeat(len - number.toString().length) + number.toString();
              this.horaActualizacion = fill(date.getHours(),2) + ':' + fill(date.getMinutes(),2) + ':' + fill(date.getSeconds(),2)                     
            }          
        }            
        this.DataAxisY()   
      }
       
      //cargando valores limites alarmas    
      this.$apollo.query({
        query: getAlarma,
        variables : {Row:  "PMPO_device_1"}
      }).then(data => {     
        let obj = data.data
        let item  = JSON.parse(obj.getAlarma.payload)
        this.TempAlert=false
        this.PhAlert=false
        this.MaxTemp = '--'
        this.MaxPh = '--'
        if (item.MinTemp!=-1){
          this.TempAlert=true 
          this.MinTemp = item.MinTemp
        }     
        if (item.MaxTemp!=-1)
          this.MaxTemp = item.MaxTemp        
        if (item.MinPh!=-1){
          this.PhAlert=true          
          this.MinPh = item.MinPh
        }
        if (item.MaxPh!=-1)
          this.MaxPh = item.MaxPh
        if (item.MinPh!=-1){
          this.PhAlert=true          
          this.MinPh = item.MinPh
        }         
      })
      .catch(error => {
        this.error = error;
        console.log("ERROR: " + error);
      });
 
    },
    DataAxisY () {  
      var temperaturas = []
      var map= {'h0': '0','h1': '0','h2': '0' ,'h3': '0','h4': '0','h5': '0','h6': '0','h7': '0','h8': '0','h9': '0','h10': '0','h11': '0','h12': '0','h13': '0','h14': '0','h15': '0','h16': '0','h17': '0','h18': '0','h19': '0','h20': '0','h21': '0','h22': '0','h23': '0'}        
      var mapPh= {'h0': '0','h1': '0','h2': '0' ,'h3': '0','h4': '0','h5': '0','h6': '0','h7': '0','h8': '0','h9': '0','h10': '0','h11': '0','h12': '0','h13': '0','h14': '0','h15': '0','h16': '0','h17': '0','h18': '0','h19': '0','h20': '0','h21': '0','h22': '0','h23': '0'}        
      var fechaActual = new Date()
      var tempMax = -1
      var phMax = -1
      var tiempoOffline = 0
      var date = null
      var dateSensor = null
      var dataSensorsAux = []  
      let now = new Date();
      if (now.getMinutes()%31==0)
        this.frecuencia = 0
      if (this.frecuencia<=0)
        this.loadDataHistory()  
      for (let i=0 ; i<this.dataSensorsHist.length;i++){
          var jsonItems = this.dataSensorsHist[i].payload
          dataSensorsAux.push(jsonItems)                    
      }     
      let listValues = []
      for (let i=0 ; i<this.SensorValues.length;i++){
          var jsonItems = JSON.parse(this.SensorValues[i].payload)  
          listValues.push(jsonItems)
      } 
      if (this.frecuencia<=0 && dataSensorsAux.length>0){
        dataSensorsAux.push(listValues)
        this.frecuencia+=1        
        for (let i=0 ; i<dataSensorsAux.length;i++){
          let dataItem = dataSensorsAux[i]
          for (let j=0 ; j<dataItem.length;j++){
            if (dataItem[j].fecha !== undefined) {              
              let hora = dataItem[j].fecha.substring(11,19)
              var medidas = dataItem[j]
              let minutos = hora.split(':')[1]  
              if (minutos%60!=0){            
                if (medidas.temperatura > tempMax){
                    tempMax = medidas.temperatura 
                    map['h' + parseInt(hora).toString()]=tempMax 
                } 
                if (medidas.ph > phMax){
                    phMax = medidas.ph  
                    mapPh['h' + parseInt(hora).toString()]=phMax     
                }   
              }else{
                tempMax = -1
                phMax = -1
              }
            
            }
          }
        }
        this.tempData  = [map['h0'],map['h1'],map['h2'],map['h3'],map['h4'],map['h5'],map['h6'],map['h7'],map['h8'],map['h9'],map['h10'],map['h11'],map['h12'],map['h13'],map['h14'],map['h15'],map['h16'],map['h17'],map['h18'],map['h19'],map['h20'],map['h21'],map['h22'],map['h23']]
        if(this.chartline!==null && this.chartline.data!==null){
          this.chartline.data.datasets[0].data = this.tempData
          this.chartline.update()
          console.log('actualizando grafico')
        }      
        this.phData  = [mapPh['h0'],mapPh['h1'],mapPh['h2'],mapPh['h3'],mapPh['h4'],mapPh['h5'],mapPh['h6'],mapPh['h7'],mapPh['h8'],mapPh['h9'],mapPh['h10'],mapPh['h11'],mapPh['h12'],mapPh['h13'],mapPh['h14'],mapPh['h15'],mapPh['h16'],mapPh['h17'],mapPh['h18'],mapPh['h19'],mapPh['h20'],mapPh['h21'],mapPh['h22'],mapPh['h23']]
        if(this.Phline!==null && this.Phline.data!==null){
          this.Phline.data.datasets[0].data = this.phData
          this.Phline.update()
        }  
      }       
    },
    diff_minutes(dt2, dt1) 
    {
      var diff =(dt2 - dt1) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff));      
    },
    verifyStatusSensor(){
      let jsonItems = ""
      let dateSensor = ""
      if (this.SensorValues.length > 0)
        jsonItems = JSON.parse(this.SensorValues[this.SensorValues.length-1].payload)
        dateSensor = new Date(jsonItems.pos*1000);
      let fecha = new Date()
      let fechaActualCalendario  = moment().tz("America/Santiago").utcOffset(-3)
      let horaActual = fechaActualCalendario.format().split('T')[1].substring(0,8)
      let fechaActual = fechaActualCalendario.format('MM-DD-YYYY')
      var horaFechaServer = new Date(parseInt(fechaActual.substring(6)),parseInt(fechaActual.substring(0,2))-1,parseInt(fechaActual.substring(3,5)),horaActual.substring(0,2),horaActual.substring(3,5),horaActual.substring(6));
      if (dateSensor !=null){
        if (this.diff_minutes(dateSensor.getTime(),horaFechaServer.getTime()) <=2){
          this.Lectura = true
          this.status = "online"
        }
        else{
          this.Lectura = false 
          this.status = "offline"             
        }
      }   
    },
    loadDataHistory(){     
      var listValues=[]
      var lista 
      let todayIni = new Date();
      todayIni.setHours(0, 0, 0);
      let todayFin = new Date();
      todayFin.setHours(23, 59, 59);
      let timestampini = Math.floor(todayIni / 1000)
      let timestampfin = Math.floor(todayFin / 1000)  
      this.fechaActual = (todayIni.getDate() + "/" + (todayIni.getMonth() +1) + "/" + todayIni.getFullYear())             
      apiHistory.getHistory("PMPO_device_1")
      .then(res => {
          return res.data
      })
      .then(data=> {           
          if (data.statusCode == 200)
            this.dataSensorsHist  =  data.body          
      })
      .catch((err) => console.log(err));      
    },
  },
  computed: {    
    isMobile() {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    },
    HistorialTomasMedida(){
      let valuesHrs = []
      let max_ = -1
      let maxHora = []
      let  SensorValuesAux = []
      if (this.dataSensorsHist.length>0){
        //antepenultimo,penultimo y ultimos datos del historial de medidas
        let arrayA = []
        let arrayB = []
        let arrayC = []
        let arrayD = []
        let arrayE = []
        if (this.dataSensorsHist.length>2)
          arrayA = this.dataSensorsHist[this.dataSensorsHist.length-3].payload
        if (this.dataSensorsHist.length>1){
          arrayB = this.dataSensorsHist[this.dataSensorsHist.length-2].payload        
          arrayD = arrayA.concat(arrayB)
        }
        if (this.dataSensorsHist.length>0){
          arrayC = this.dataSensorsHist[this.dataSensorsHist.length-1].payload
          arrayE = arrayD.concat(arrayC)
          SensorValuesAux = arrayE.reverse() 
        }
      }
      for (let i  = 0 ; i<SensorValuesAux.length ; i++){                    
          let hora = SensorValuesAux[i].fecha.substring(11,19)
          let minutos = hora.split(':')[1]  
          if (minutos%10==0){
            if (minutos > max_){
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
          labels: ['00','01', '02','03', '04','05', '06','07', '08','09', '10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
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
