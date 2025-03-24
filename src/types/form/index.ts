import type { SelectOption } from 'naive-ui'

interface BaseFormItem {
	label: string
	modelKey: string
}

interface FormItemInput extends BaseFormItem {
	type: 'input'
}

interface FormItemSelect extends BaseFormItem {
	type: 'select',
	options: SelectOption[]
}

interface FormItemCheckbox extends BaseFormItem {
	type: 'checkbox'
}

interface FormItemTextarea extends BaseFormItem {
	type: 'textarea'
}

export type FormItem = FormItemInput | FormItemSelect | FormItemCheckbox | FormItemTextarea;
