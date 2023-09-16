<template>
    <div>
        <Navbar/>
    </div>
</template>
<script setup>
const {assets} = useFirebase()
const {core,doors,interlocks} = assets
</script>