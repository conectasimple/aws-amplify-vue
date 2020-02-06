<template>
  <aside class="main-sidebar">
    <section class="sidebar">

      <div class="user-panel">
        <div class="pull-left image">
          <img :src="user.avatar" />
        </div>
        <div class="pull-left info">
          <div>
            <p class="white">{{user.displayName}}</p>
          </div>
          
        </div>
      </div>
 
      <sidebar-menu />
    
    </section>
   
  </aside>
</template>
<script>
import SidebarMenu from './SidebarMenu'

export default {
  name: 'Sidebar',
  props: ['user'],
  components: { SidebarMenu },
  mounted: function() {
  
  }
}
</script>
<style scope="local">
.user-panel .image img {
  border-radius: 50%;
}
#searchForm {
  padding-left: 0em;
  padding-right: 0em;
}
#searchContainer {
  height: 100%;
  padding-bottom: 0em;
}
#search {
  width: 80%;
  float: right;
}

#search-btn {
  width: 20%;
}
</style>
