<template>
  <div>테스트</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const dd = useCounterStore();

dd.test();
</script>
