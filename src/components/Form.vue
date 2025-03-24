<template>
	<div class="flex flex-col">
		<NForm>
			<NFormItem v-for="(item, index) in props.items" :key="index" :label="item.label">
				<NInput v-if="item.type === 'input'" v-model:value="model[item.modelKey]" />
				<NSelect v-else-if="item.type === 'select'" v-model:value="model[item.modelKey]" :options="item.options" />
			</NFormItem>
		</NForm>
	</div>
</template>

<script setup lang="ts">
import { NForm, NFormItem, NInput, NSelect } from 'naive-ui'

import type { FormItem } from '@/types/form'

const model = defineModel<Record<string, any>>('model', { required: true })

const props = defineProps<{
	items: FormItem[]
}>()
</script>
