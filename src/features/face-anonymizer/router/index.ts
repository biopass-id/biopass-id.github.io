import { RouteRecordRaw } from "vue-router";

import FaceAnonymizerFeature from "../FaceAnonymizerFeature.vue";
import HomePage from '../pages/HomePage.vue';
import CapturePage from '../pages/CapturePage.vue';
import UploadPage from '../pages/UploadPage.vue';
import ResultPage from '../pages/ResultPage.vue';
import LoadingPage from '../pages/LoadingPage.vue';

const faceAnonymizerRouter: RouteRecordRaw =  {
    path: '/anonymizer',
    component: FaceAnonymizerFeature,
    children: [
        {
            path: '',
            name: 'anonymizer',
            component: HomePage,
        },
        {
            path: 'capture',
            name: 'anonymizerCapture',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'anonymizer' }) : next(),
            component: CapturePage,
        },
        {
            path: 'upload',
            name: 'anonymizerUpload',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'anonymizer' }) : next(),
            component: UploadPage,
        },
        {
            path: 'loading',
            name: 'anonymizerLoading',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'anonymizer' }) : next(),
            component: LoadingPage,
        },
        {
            path: 'result',
            name: 'anonymizerResult',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'anonymizer' }) : next(),
            component: ResultPage,
        },
    ]
};

export default faceAnonymizerRouter;