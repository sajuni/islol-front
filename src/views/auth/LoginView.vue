<template>
  <div>테스트</div>
  <v-card>하하하</v-card>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const dd = useCounterStore();

dd.test();
</script>
