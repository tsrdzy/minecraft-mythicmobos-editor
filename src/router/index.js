import { createRouter, createWebHistory } from "vue-router";

import yn_Mobs from '@/views/Mobs/yn_Mobs.vue'
import yn_Items from '@/views/Items/yn_Items.vue'
import yn_Spawners from '@/views/Spawners/yn_Spawners.vue'

const routes = [
    {
        path: '/',
        component: yn_Mobs,
    },
    {
        path: '/mobs',
        component: yn_Mobs,
    },
    {
        path: '/items',
        component: yn_Items,
    },    {
        path: '/spawners',
        component: yn_Spawners,
    },


]
const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes: routes
})
export default router