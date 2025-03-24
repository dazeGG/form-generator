<template>
	<Form v-model:model="data" class="mt-8" :items="formItems" @clear="clearData" @save="saveData" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cloneDeep } from 'lodash'
import { useFormsStore } from '@/store'

import Form from '@/components/base/Form.vue'

import type { FormItem } from '@/types/form'

const formsStore = useFormsStore()

const emptyData: Record<string, any> = { name: null, age: null, married: false, info: null }

const data = ref<Record<string, any>>({})

const clearData = (): void => {
	data.value = cloneDeep(emptyData)
}

const formItems: FormItem[] = [
	{
		type: 'input',
		label: 'Name',
		modelKey: 'name',
		props: {
			clearable: true,
		},
	},
	{
		type: 'select',
		label: 'Age',
		modelKey: 'age',
		options: [...Array(100).keys()].map(i => ({ label: i.toString(), value: i })),
		props: {
			clearable: true,
		},
	},
	{
		type: 'checkbox',
		label: 'Married',
		modelKey: 'married',
	},
	{
		type: 'textarea',
		label: 'Some info',
		modelKey: 'info',
	},
]

const initData = (): void => {
	const savedData = formsStore.get('user')

	if (savedData) {
		data.value = savedData
	} else {
		clearData()
	}
}

const saveData = (): void => {
	formsStore.save('user', data.value)
}

const onCreated = (): void => {
	initData()
}

onCreated()
</script>
