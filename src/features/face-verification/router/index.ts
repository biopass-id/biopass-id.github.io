import { RouteRecordRaw } from "vue-router";

import FaceVerificationFeature from "../FaceVerificationFeature.vue";
import CapturePage from "../pages/CapturePage.vue";
import HomePage from '../pages/HomePage.vue';
import UploadPage from '../pages/UploadPage.vue';
import SelectionPage from "../pages/SelectionPage.vue";
import LoadingPage from "../pages/LoadingPage.vue";
import ResultPage from "../pages/ResultPage.vue";

const verifyRouter: RouteRecordRaw =  {
    path: '/verification',
    component: FaceVerificationFeature,
    children: [
        {
            path: '',
            name: 'verification',
            component: HomePage,
        },
   
        // Enroll
        {
            path: 'enroll-select',
            name: 'enrollSelect',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: SelectionPage,
        },
        {
            path: 'enroll-capture',
            name: 'enrollCapture',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: CapturePage,
        },
        {
            path: 'enroll-upload',
            name: 'enrollUpload',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: UploadPage,
        },
        {
            path: 'enroll',
            name: 'enroll',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: LoadingPage,
        },

        // Verify
        {
            path: 'verify-select',
            name: 'verifySelect',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: SelectionPage,
        },
        {
            path: 'verify-capture',
            name: 'verifyCapture',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: CapturePage,
        },
        {
            path: 'verify-upload',
            name: 'verifyUpload',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: UploadPage,
        },
        {
            path: 'verify',
            name: 'verify',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: LoadingPage,
        },

        // Resultado
        {
            path: 'result',
            name: 'verifyResult',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'verification' }) : next(),
            component: ResultPage,
        },
    ]
};

export default verifyRouter;