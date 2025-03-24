<template>
	<div>
		<h6>Price and discount - custom number inputs</h6>
		<Form v-model:model="data" :items="formItems" class="mt-4" @clear="clearData" @save="saveData">
			<template #item-price>
				<NInputNumber v-model:value="data.price" class="w-full" />
			</template>
			<template #item-discount>
				<div class="flex flex-col gap-2 w-full">
					<NInputNumber v-model:value="data.discount" />
					<h5>final price: {{ (data.price * (1 - data.discount / 100)).toFixed(2) }}</h5>
				</div>
			</template>
		</Form>
	</div>
</template>

<script setup lang="ts">
import { useForm } from '@/composables'

import { NInputNumber } from 'naive-ui'
import Form from '@/components/base/Form.vue'

import type { FormItem } from '@/types/form'

const emptyData: Record<string, any> = {
	title: null,
	price: null,
	discount: null,
	description: null,
}

const { data, clearData, saveData } = useForm('customized-product', emptyData)

const formItems: FormItem[] = [
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
		type: 'slot',
		label: 'Price',
		key: 'price',
	},
	{
		type: 'slot',
		label: 'Discount (%)',
		key: 'discount',
	},
]
</script>
