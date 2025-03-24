import type { InputProps, SelectOption, SelectProps, CheckboxProps } from 'naive-ui'

interface BaseFormItem {
	label: string
	key: string
	show?: boolean
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

interface FormItemTextarea extends Omit<FormItemInput, 'type'> {
	type: 'textarea'
}

interface FormItemSlot extends BaseFormItem {
	type: 'slot'
}

export type FormItem = FormItemInput | FormItemSelect | FormItemCheckbox | FormItemTextarea | FormItemSlot;
