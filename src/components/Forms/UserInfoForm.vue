<template>
	<Form v-model:model="data" :items="formItems" @clear="clearData" @save="saveData" />
</template>

<script setup lang="ts">
import { useForm } from '@/composables'

import Form from '@/components/base/Form.vue'

import type { FormItem } from '@/types/form'

const emptyData: Record<string, any> = { name: null, age: null, info: null }

const { data, clearData, saveData } = useForm('user', emptyData)

const formItems: FormItem[] = [
	{
		type: 'input',
		label: 'Name',
		key: 'name',
		props: {
			clearable: true,
		},
	},
	{
		type: 'select',
		label: 'Age',
		key: 'age',
		options: [...Array(100).keys()].map(i => ({ label: i.toString(), value: i })),
		props: {
			clearable: true,
		},
	},
	{
		type: 'textarea',
		label: 'Some info',
		key: 'info',
	},
]
</script>
