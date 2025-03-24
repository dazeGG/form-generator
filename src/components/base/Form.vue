<template>
	<div class="flex flex-col">
		<NForm>
			<NFormItem
				v-for="(item, index) in itemsToShow"
				:key="index"
				:label="item.label"
				:show-label="item.type !== 'checkbox'"
			>
				<slot :name="`item-${item.key}`">
					<NInput v-if="item.type === 'input'" v-model:value="model[item.key]" v-bind="item.props" />
					<NSelect
						v-else-if="item.type === 'select'"
						v-model:value="model[item.key]"
						:options="item.options"
						v-bind="item.props"
					/>
					<NCheckbox
						v-else-if="item.type === 'checkbox'"
						v-model:checked="model[item.key]"
						:label="item.label"
						v-bind="item.props"
					/>
					<NInput
						v-else-if="item.type === 'textarea'"
						v-model:value="model[item.key]"
						type="textarea"
						:autosize="{
							minRows: 4,
							maxRows: 8,
						}"
						v-bind="item.props"
					/>
				</slot>
			</NFormItem>
		</NForm>
		<div class="flex gap-2 justify-end">
			<slot name="buttons">
				<slot name="before-buttons"></slot>
				<NButton round secondary @click="onClickClear">Clear</NButton>
				<NButton round type="success" @click="onClickSave">Save</NButton>
				<slot name="after-buttons"></slot>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { NForm, NFormItem, NInput, NSelect, NCheckbox, NButton } from 'naive-ui'

import type { FormItem } from '@/types/form'

const model = defineModel<Record<string, any>>('model', { required: true })

const emit = defineEmits<{
	(e: 'clear'): void
	(e: 'save'): void
}>()

const props = defineProps<{
	items: FormItem[]
}>()

const itemsToShow = computed<FormItem[]>(() => props.items.filter(item => item.show !== false))

const onClickClear = (): void => {
	emit('clear')
}

const onClickSave = (): void => {
	emit('save')
}
</script>
