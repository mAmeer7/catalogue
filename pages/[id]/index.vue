<script lang="ts" setup>
import { dummyBroker } from '~/data/propertyData'
</script>



<template>
  <client-only>
    <UserDetails :details="dummyBroker?.brokerdetails" :properties="dummyBroker?.properties" />
    <Properties :properties="dummyBroker?.properties" />
  </client-only>
</template>
