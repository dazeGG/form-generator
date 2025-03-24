<template>
	<Form v-model:model="data" :items="formItems" @clear="clearData" @save="saveData" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
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

const { data, clearData, saveData } = useForm('product', emptyData)

const formItems = computed<FormItem[]>(() => [
	{
		type: 'input',
		label: 'Title',
		key: 'title',
		props: {
			clearable: true,
		},
	},
	{
		type: 'textarea',
		label: 'Description',
		key: 'description',
	},
	{
		type: 'input',
		label: 'Price',
		key: 'price',
		props: {
			clearable: true,
		},
	},
	{
		type: 'checkbox',
		label: 'Discount',
		key: 'discount',
	},
	{
		show: data.value.discount,
		type: 'input',
		label: 'Discounted price',
		key: 'discountedPrice',
		props: {
			clearable: true,
		},
	},
])
</script>
