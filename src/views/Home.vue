<template>
	<Page>
		<template #header>
			<h1>Home page</h1>
		</template>
		<template #default>
			<h4>Some forms</h4>
			<div class="flex mt-2">
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
		</template>
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
]

const routeTo = (to: RouteLocationRaw): void => {
	router.push(to)
}
</script>
