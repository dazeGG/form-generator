<template>
	<Page title="Home page">
		<h4>Some forms</h4>
		<div class="flex gap-2 mt-2">
			<NButton
				v-for="(formLink, index) in formLinks"
				:key="index"
				:type="formLink.type"
				round
				@click="routeTo(formLink.to)"
			>
				{{ formLink.text }}
			</NButton>
		</div>
	</Page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { NButton } from 'naive-ui'
import Page from '@/components/base/Page.vue'

import type { RouteLocationRaw } from 'vue-router'
import type { Type } from 'naive-ui/es/button/src/interface'

const router = useRouter()

const formLinks: { text: string; type: Type; to: RouteLocationRaw }[] = [
	{
		text: 'User form',
		type: 'primary',
		to: {
			name: 'user',
		},
	},
	{
		text: 'Product form',
		type: 'info',
		to: {
			name: 'product',
		},
	},
	{
		text: 'Multiple types form',
		type: 'warning',
		to: {
			name: 'multipleTypes',
		},
	},
]

const routeTo = (to: RouteLocationRaw): void => {
	router.push(to)
}
</script>
