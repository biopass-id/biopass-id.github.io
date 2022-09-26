import { RouteRecordRaw } from "vue-router";

import FaceCropFeature from "../FaceCropFeature.vue";
import HomePage from '../pages/HomePage.vue';
import CapturePage from '../pages/CapturePage.vue';
import UploadPage from '../pages/UploadPage.vue';
import ResultPage from '../pages/ResultPage.vue';
import LoadingPage from '../pages/LoadingPage.vue';

const faceCropRouter: RouteRecordRaw =  {
    path: '/crop',
    component: FaceCropFeature,
    children: [
        {
            path: '',
            name: 'crop',
            component: HomePage,
        },
        {
            path: 'capture',
            name: 'cropCapture',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'crop' }) : next(),
            component: CapturePage,
        },
        {
            path: 'upload',
            name: 'cropUpload',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'crop' }) : next(),
            component: UploadPage,
        },
        {
            path: 'loading',
            name: 'cropLoading',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'crop' }) : next(),
            component: LoadingPage,
        },
        {
            path: 'result',
            name: 'cropResult',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'crop' }) : next(),
            component: ResultPage,
        },
    ]
};

export default faceCropRouter;