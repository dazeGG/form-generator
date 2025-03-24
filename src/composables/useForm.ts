import { ref } from 'vue'
import { cloneDeep } from 'lodash'
import { useFormsStore } from '@/store'

export default (form: string, emptyData: Record<string, any>) => {
	const formsStore = useFormsStore()

	const data = ref<Record<string, any>>({})

	const clearData = (): void => {
		data.value = cloneDeep(emptyData)
	}

	const saveData = (): void => {
		formsStore.save(form, data.value)
	}

	const initData = (): void => {
		const savedData = formsStore.get(form)

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

	return {
		data,
		clearData,
		saveData,
	}
}
