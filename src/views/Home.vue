<template>
	<NCard>
		<h1>Home page</h1>
		<Form v-model:model="data" class="mt-8" :items="formItems" />
	</NCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { NCard } from 'naive-ui'
import Form from '@/components/Form.vue'

import type { FormItem } from '@/types/form'

const data = ref<Record<string, string | number | null>>({ name: null, age: null })

const formItems: FormItem[] = [
	{
		type: 'input',
		label: 'Name',
		modelKey: 'name',
	},
	{
		type: 'select',
		label: 'Age',
		modelKey: 'age',
		options: [...Array(100).keys()].map(i => ({ label: i.toString(), value: i })),
	},
]
</script>
