<template>
  <v-container class="h-100 d-flex">
    <v-row class="align-center" justify="center">
      <v-col cols="12" xl="4" lg="6" md="6" sm="8" xs="6">
        <v-card class="mx-auto px-6 py-8">
          <v-card-title>Login</v-card-title>
          <v-form>
            <v-text-field label="아이디" variant="solo"></v-text-field>
            <v-text-field label="비밀번호" variant="solo"></v-text-field>
          </v-form>
          <v-btn>로그인</v-btn>
          <v-btn>회원가입</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter';

// const dd = useCounterStore();
</script>
