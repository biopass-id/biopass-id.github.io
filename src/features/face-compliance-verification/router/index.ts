import { RouteRecordRaw } from "vue-router";

import FaceComplianceVerificationFeature from "../FaceComplianceVerificationFeature.vue";
import HomePage from '../pages/HomePage.vue';
import CapturePage from '../pages/CapturePage.vue';
import UploadPage from '../pages/UploadPage.vue';
import ResultPage from '../pages/ResultPage.vue';
import LoadingPage from '../pages/LoadingPage.vue';

const complianceRouter: RouteRecordRaw =  {
    path: '/compliance',
    component: FaceComplianceVerificationFeature,
    children: [
        {
            path: '',
            name: 'compliance',
            component: HomePage,
        },
        {
            path: 'capture',
            name: 'complianceCapture',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'compliance' }) : next(),
            component: CapturePage,
        },
        {
            path: 'upload',
            name: 'complianceUpload',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'compliance' }) : next(),
            component: UploadPage,
        },
        {
            path: 'loading',
            name: 'complianceLoading',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'compliance' }) : next(),
            component: LoadingPage,
        },
        {
            path: 'result',
            name: 'complianceResult',
            beforeEnter: (to, from, next) => !from.name ? next({ name: 'compliance' }) : next(),
            component: ResultPage,
        },
    ]
};

export default complianceRouter;