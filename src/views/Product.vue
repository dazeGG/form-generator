<template>
	<Page title="Product form">
		<ProductForm />
		<NDivider />
		<CustomizedProductForm />
	</Page>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui'
import Page from '@/components/base/Page.vue'
import ProductForm from '@/components/Forms/ProductForm.vue'
import CustomizedProductForm from '@/components/Forms/CustomizedProductForm.vue'
</script>
