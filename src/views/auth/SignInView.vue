<template>
  <v-container class="h-100 d-flex">
    <v-row class="align-center" justify="center">
      <v-col cols="12" xl="4" lg="6" md="6" sm="8" xs="6">
        <v-card class="mx-auto px-6 pt-6">
          <v-form>
            <v-row>
              <v-col cols="6">
                <v-text-field label="아이디" variant="solo" v-model="signObj.mbrId"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="게임아이디" variant="solo"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="비밀번호" variant="solo" type="password"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="비밀번호 확인" variant="solo" type="password"></v-text-field>
              </v-col>
            </v-row>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary">OK</v-btn>
            </v-date-picker>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  label="우편번호"
                  variant="solo"
                  v-model="signObj.zonecode"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-btn
                  @click="openPostCode"
                  :style="{ width: '100%', height: '72%' }"
                  color="blue-grey"
                  >검색</v-btn
                >
              </v-col>
            </v-row>
            <v-text-field label="주소" variant="solo" v-model="signObj.jibunAddr"></v-text-field>
            <v-text-field
              label="상세주소"
              variant="solo"
              v-model="signObj.detailAddr"
            ></v-text-field>
            <v-row>
              <v-col cols="6">
                <v-select
                  label="솔랭티어"
                  :items="tier"
                  variant="solo"
                  item-title="name"
                  item-value="value"
                  v-model="signObj.mbrSoleTier"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="최대솔랭티어"
                  :items="tier"
                  variant="solo"
                  item-title="name"
                  item-value="value"
                  v-model="signObj.mbrMaxSoleTier"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-select
                  label="자랭티어"
                  :items="tier"
                  variant="solo"
                  item-title="name"
                  item-value="value"
                  v-model="signObj.mbrFreeTier"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="최대자랭티어"
                  :items="tier"
                  variant="solo"
                  item-title="name"
                  item-value="value"
                  v-model="signObj.mbrMaxFreeTier"
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';

const date = new Date().toISOString().substring(0, 10);
const menu = ref(false);
const tier = [
  { name: '아이언', value: 0 },
  { name: '브론즈', value: 1 },
  { name: '실버', value: 2 },
  { name: '골드', value: 3 },
  { name: '플래티넘', value: 4 },
  { name: '다이아', value: 5 },
  { name: '마스터', value: 6 },
  { name: '그랜드마스터', value: 7 },
  { name: '챌린저', value: 8 }
];
const signObj = ref({
  mbrId: '',
  mbrGmId: '',
  mbrPwd: '',
  mbrNm: '',
  mbrBirthDAy: '',
  mbrAddr: '',
  jibunAddr: '',
  zonecode: '',
  detailAddr: ''
});

watch(
  () => signObj.value.detailAddr,
  () => {
    signObj.value.mbrAddr = `${signObj.value.jibunAddr} ${signObj.value.detailAddr}`;
  }
);

const openPostCode = () => {
  new window.daum.Postcode({
    oncomplete: function (data) {
      signObj.value.zonecode = data.zonecode;
      signObj.value.jibunAddr = data.jibunAddress;
    }
  }).open();
};
</script>

<style lang="scss" scoped></style>
