<template>
  <ul class="sidebar-menu">
    <li class="header">MENÚ PRINCIPAL</li>
    <router-link tag="li" class="pageLink" to="/dashboard">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Panel de Control</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/alerts">
      <a>
        <i class="ion ion-ios-alarm-outline" style="font-size: 18px;"></i>
        <span class="page">Alertas</span>
      </a>
    </router-link>     
    <li class="treeview">
      <a href="#">
        <i class="ion-android-sync" style="font-size: 18px;"></i>
        <span class="treeview-title ">Calibraciones</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
          <router-link tag="li" class="pageLink" to="/calibrations/ph">
          <a>
            <i class="ion-beaker"></i> Ph
          </a>
          </router-link>
      </ul>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="ion-locked" style="font-size: 18px;"></i>
        <span class="treeview-title ">Configuración Usuario</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="ion-key"></i> Cambio de clave
          </a>
        </li>
         
      </ul>
    </li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="ion-log-out" style="font-size: 18px;"></i>
        <span class="page">Cerrar Sesión</span>
      </a>
    </router-link>
    <!--
    <router-link tag="li" class="pageLink" to="/tables">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Tables</span>
      </a>
    </router-link>

    <li class="header">ME</li>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Tasks</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
    -->
     
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
