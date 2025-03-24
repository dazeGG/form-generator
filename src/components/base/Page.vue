<template>
	<div>
		<slot name="header">
			<h1>{{ props.title }}</h1>
		</slot>
		<NDivider />
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui'

const props = defineProps<{
	title?: string
}>()
</script>
