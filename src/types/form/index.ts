import type { InputProps, SelectOption, SelectProps, CheckboxProps } from 'naive-ui'

interface BaseFormItem {
	label: string
	modelKey: string
}

interface FormItemInput extends BaseFormItem {
	type: 'input'
	props?: InputProps
}

interface FormItemSelect extends BaseFormItem {
	type: 'select',
	options: SelectOption[]
	props?: SelectProps
}

interface FormItemCheckbox extends BaseFormItem {
	type: 'checkbox'
	props?: CheckboxProps
}

interface FormItemTextarea extends BaseFormItem {
	type: 'textarea'
}

export type FormItem = FormItemInput | FormItemSelect | FormItemCheckbox | FormItemTextarea;
