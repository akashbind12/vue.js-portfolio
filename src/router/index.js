import {createRouter, createWebHistory} from 'vue-router';

import Project from '../components/Project';

const routes = [
    {
        path : '/projects',
        name : 'Project',
        comsponent: Project 
    }
]


const router = createRouter({
    history : createWebHistory(process.env.Base_URL),
    routes
})

export default router