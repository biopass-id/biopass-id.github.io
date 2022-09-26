import { RouteRecordRaw } from "vue-router";

import LivenessFeature from "../LivenessFeature.vue";
import HomePage from '../pages/HomePage.vue';
import CapturePage from '../pages/CapturePage.vue';
import UploadPage from '../pages/UploadPage.vue';
import ResultPage from '../pages/ResultPage.vue';
import LoadingPage from '../pages/LoadingPage.vue';

const livenessRouter: RouteRecordRaw =  {
    path: '/liveness',
    component: LivenessFeature,
    children: [
        {
            path: '',
            name: 'liveness',
            component: HomePage,
        },
        {
            path: 'capture',
            name: 'livenessCapture',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'liveness' }) : next(),
            component: CapturePage,
        },
        {
            path: 'upload',
            name: 'livenessUpload',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'liveness' }) : next(),
            component: UploadPage,
        },
        {
            path: 'loading',
            name: 'livenessLoading',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'liveness' }) : next(),
            component: LoadingPage,
        },
        {
            path: 'result',
            name: 'livenessResult',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'liveness' }) : next(),
            component: ResultPage,
        },
    ]
};

export default livenessRouter;