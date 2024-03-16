<template>
  <v-container class="h-100 d-flex">
    <v-row class="align-center" justify="center">
      <v-col cols="12" xl="4" lg="6" md="6" sm="8" xs="6">
        <v-card class="mx-auto px-6 pt-6">
          <v-form>
            <v-text-field label="아이디" variant="solo"></v-text-field>
            <v-text-field label="비밀번호" variant="solo"></v-text-field>
          </v-form>
          <div>
            <v-btn block size="large" color="info">로그인</v-btn>
            <router-link :to="'/signIn'">
              <v-btn block size="large" color="warning">회원가입</v-btn>
            </router-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter';

// const dd = useCounterStore();
</script>
