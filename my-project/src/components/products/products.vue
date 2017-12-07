<template>
    <div>
        <datagrid api="http://localhost/222/php/goods.php" filterCols="filterColumns"></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue'

    export default {
        data:function(){
            return {
                filterColumns:['imgrul','view']
            }
        },
        components: {
            datagrid
        }
    }
</script>