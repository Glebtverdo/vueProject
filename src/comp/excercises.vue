<template>
<div class="main1">
 <router-view> </router-view>
</div>
</template>

<script>
        
export default {
        
   
}
</script>

<style scoped>
.main1 {
        max-width: 100vw;
        min-height: 88vh;
        flex-direction: column;
        background-color: #e1e1e1;
        }
@media screen and (max-width: 1280px) {
    .main1{
        min-height: 92vh
        }
   }
</style>