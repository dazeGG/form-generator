<template>
	<Page>
		<template #header>
			<h1>User form</h1>
		</template>
		<template #default>
			<UserInfoForm />
		</template>
	</Page>
</template>

<script setup lang="ts">
import Page from '@/components/base/Page.vue'
import UserInfoForm from '@/components/Forms/UserInfoForm.vue'
</script>
