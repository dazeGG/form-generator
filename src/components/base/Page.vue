<template>
	<NCard>
		<slot name="header"></slot>
		<NDivider />
		<slot></slot>
	</NCard>
</template>

<script setup lang="ts">
import { NCard, NDivider } from 'naive-ui'
</script>
