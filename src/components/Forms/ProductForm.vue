<template>
	<Form v-model:model="data" :items="formItems" @clear="clearData" @save="saveData" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFormsStore } from '@/store'
import { useForm } from '@/composables'

import Form from '@/components/base/Form.vue'

import type { FormItem } from '@/types/form'

const emptyData: Record<string, any> = {
	title: null,
	price: null,
	discount: false,
	discountedPrice: null,
	description: null,
}

const formsStore = useFormsStore()
const { data, clearData, saveData } = useForm('product', emptyData)

const formItems = computed<FormItem[]>(() => [
	{
		type: 'input',
		label: 'Title',
		modelKey: 'title',
		props: {
			clearable: true,
		},
	},
	{
		type: 'textarea',
		label: 'Description',
		modelKey: 'description',
	},
	{
		type: 'input',
		label: 'Price',
		modelKey: 'price',
		props: {
			clearable: true,
		},
	},
	{
		type: 'checkbox',
		label: 'Discount',
		modelKey: 'discount',
	},
	{
		show: data.value.discount,
		type: 'input',
		label: 'Discounted price',
		modelKey: 'discountedPrice',
		props: {
			clearable: true,
		},
	},
])

const initData = (): void => {
	const savedData = formsStore.get('user')

	if (savedData) {
		data.value = savedData
	} else {
		clearData()
	}
}

const onCreated = (): void => {
	initData()
}

onCreated()
</script>
