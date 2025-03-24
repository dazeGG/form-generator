<template>
	<div class="flex flex-col">
		<NForm>
			<NFormItem
				v-for="(item, index) in props.items"
				:key="index"
				:label="item.label"
				:show-label="item.type !== 'checkbox'"
			>
				<NInput v-if="item.type === 'input'" v-model:value="model[item.modelKey]" v-bind="item.props" />
				<NSelect
					v-else-if="item.type === 'select'"
					v-model:value="model[item.modelKey]"
					:options="item.options"
					v-bind="item.props"
				/>
				<NCheckbox
					v-else-if="item.type === 'checkbox'"
					v-model:checked="model[item.modelKey]"
					:label="item.label"
					v-bind="item.props"
				/>
				<NInput
					v-else-if="item.type === 'textarea'"
					v-model:value="model[item.modelKey]"
					type="textarea"
					:autosize="{
						minRows: 4,
						maxRows: 8,
					}"
					v-bind="item.props"
				/>
			</NFormItem>
		</NForm>
	</div>
</template>

<script setup lang="ts">
import { NForm, NFormItem, NInput, NSelect, NCheckbox } from 'naive-ui'

import type { FormItem } from '@/types/form'

const model = defineModel<Record<string, any>>('model', { required: true })

const props = defineProps<{
	items: FormItem[]
}>()
</script>
