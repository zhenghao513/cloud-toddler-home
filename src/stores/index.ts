import { createPinia } from 'pinia';
import useFormStore from './modules/form';
import useSignInStore from '@/stores/modules/sign-in';
import useFootprintStore from './modules/footprint';
import useRecordStore from './modules/record';

const pinia = createPinia();

export { useFormStore, useSignInStore, useFootprintStore, useRecordStore };
export default pinia;
