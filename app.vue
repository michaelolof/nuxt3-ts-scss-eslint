<template>
    <div>
        <h1>Testing stuff</h1>

        <button @click="doing">
            Doing things
        </button>
    </div>
</template>

<script setup>

function doing() {
    return apiPuntr.get("ping");
}

</script>