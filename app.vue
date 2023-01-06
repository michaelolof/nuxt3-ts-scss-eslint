<template>
    <div>
        <h1>Testing stuff</h1>

        <button @click="doing">
            Doing things
        </button>
    </div>
</template>

<script setup lang="ts">

function doing() {
    return $api.base.get("ping");
}

</script>