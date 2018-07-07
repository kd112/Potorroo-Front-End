<template>
    <v-dialog
    v-model="dialog"
    >
    <v-card>{{title}}</v-card>
    <slot>
        No slot defined
    </slot>
    </v-dialog> 
</template>
<script>
export default {
    name:"modal",
    props:["title","dialog"]
}
</script>
<style>

</style>
