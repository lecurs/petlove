<template>
    <tr>
        <td><label><slot></slot></label></td>
        <td><input :value="value" @input="$emit('input',$event.target.value)" :type="type" /></td>
        <td><span>{{message}}</span></td>
    </tr>
</template>
<script>
    export default {
         props: ["value", "type", "message"]
    }
</script>
<style scoped>
</style>