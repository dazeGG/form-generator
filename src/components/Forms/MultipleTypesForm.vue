<template>
	<Form v-model:model="data" :items="formItems" @clear="clearData" @save="saveData" />
</template>

<script setup lang="ts">
import { useForm } from '@/composables'

import Form from '@/components/base/Form.vue'

import type { FormItem } from '@/types/form'

const emptyData: Record<string, any> = {
	input1: null,
	input2: null,
	input3: null,
	select1: null,
	select2: null,
	select3: null,
	checkbox1: false,
	checkbox2: false,
	checkbox3: false,
	textarea1: null,
	textarea2: null,
	textarea3: null,
}

const { data, clearData, saveData } = useForm('multiple-types', emptyData)

const generateInput = (i: number): FormItem => ({
	type: 'input',
	label: `Input ${i}`,
	key: `input${i}`,
	props: {
		clearable: true,
	},
})

const generateSelect = (i: number): FormItem => ({
	type: 'select',
	label: `Select with random numbers ${i}`,
	key: `select${i}`,
	options: Array(10).fill(0).map(() => {
		const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100
		return { label: randomNumber.toString(), value: randomNumber }
	}),
	props: {
		clearable: true,
	},
})

const generateCheckbox = (i: number): FormItem => ({
	type: 'checkbox',
	label: `Checkbox ${i}`,
	key: `checkbox${i}`,
})

const generateTextarea = (i: number): FormItem => ({
	type: 'textarea',
	label: `Textarea ${i}`,
	key: `textarea${i}`,
})

const formItems: FormItem[] = [
	generateInput(1),
	generateInput(2),
	generateInput(3),
	generateSelect(1),
	generateSelect(2),
	generateSelect(3),
	generateCheckbox(1),
	generateCheckbox(2),
	generateCheckbox(3),
	generateTextarea(1),
	generateTextarea(2),
	generateTextarea(3),
]
</script>
