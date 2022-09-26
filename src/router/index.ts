import { createRouter, createWebHashHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import FaceSdkFeature from '../features/face-sdk/FaceSdkFeature.vue';
import FaceVerificationFeature from '../features/face-verification/FaceVerificationFeature.vue';
import faceAnonymizerRouter from '../features/face-anonymizer/router';
import faceCropRouter from '../features/face-crop/router';
import complianceRouter from '../features/face-compliance-verification/router';
import livenessRouter from '../features/face-liveness/router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: "main",
            component: MainView,
        },
        faceAnonymizerRouter,
        complianceRouter,
        faceCropRouter,
        livenessRouter,
        {
            path: '/sdk',
            name: 'sdk',
            component: FaceSdkFeature,
        },
        {
            path: '/verification',
            name: 'verification',
            component: FaceVerificationFeature,
        },
    ]
});

export default router;