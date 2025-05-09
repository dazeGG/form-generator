import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/user',
		name: 'user',
		component: () => import('@/views/User.vue'),
	},
	{
		path: '/product',
		name: 'product',
		component: () => import('@/views/Product.vue'),
	},
	{
		path: '/multiple-types',
		name: 'multipleTypes',
		component: () => import('@/views/MultipleTypes.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
