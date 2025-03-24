import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormsStore = defineStore('forms', () => {
	const forms = ref<Record<string, Record<string, any>>>(JSON.parse(localStorage.getItem('forms') ?? '{}'))

	const get = (form: string): Record<string, any> | null => {
		return forms.value[form] ?? null
	}

	const save = (form: string, values: Record<string, any>): void => {
		forms.value[form] = values
		localStorage.setItem('forms', JSON.stringify(forms.value))
	}

	return {
		get,
		save,
	}
})
