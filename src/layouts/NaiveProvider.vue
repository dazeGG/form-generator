<template>
	<NConfigProvider :theme="darkTheme" :theme-overrides="naiveRemConvert">
		<NNotificationProvider>
			<NGlobalStyle />
			<slot></slot>
		</NNotificationProvider>
	</NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import naiveRemConvert from '@/lib/plugins/naiveRemConvert.ts'

import { NConfigProvider, NNotificationProvider, NGlobalStyle } from 'naive-ui'
</script>
