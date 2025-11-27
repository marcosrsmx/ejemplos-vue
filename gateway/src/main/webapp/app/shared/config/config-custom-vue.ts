
import componentUno from '@/components/componentUno.vue';
import componentDos from '@/components/componentDos.vue';
import labelcustom from '@/components/labelcustom/labelcustom.vue';
import button from '@/components/button/button.vue';
import componentFor from '@/components/componentFor.vue';
import componentClass from '@/components/componentClass.vue';
import ChildComponent from '@/components/ChildComponent.vue';
import ParentComponent from '@/components/ParentComponent.vue';
import componentComputed from '@/components/componentComputed.vue';
import componentWatch from '@/components/componentWatch.vue';
import componentWatchEffect from '@/components/componentWatchEffect.vue';
import componentForm from '@/components/componentForm.vue';
import componentFormEdo from '@/components/componentFormEdo.vue';
import componentFormWatch from '@/components/componentFormWatch.vue';
import componentFetch from '@/components/componentFetch.vue';
import componentCycle from '@/components/componentCycle.vue';
export function initCustomVue(vue) {
  vue.component('ComponentUno', componentUno);
  vue.component('ComponentDos', componentDos);
  vue.component('Labelcustom', labelcustom);
  vue.component('ComponentFor', componentFor);
  vue.component('ComponentClass', componentClass);
  vue.component('ChildComponent', ChildComponent);
  vue.component('ParentComponent', ParentComponent);
  vue.component('ComponentComputed', componentComputed);
  vue.component('ComponentWatch', componentWatch);
  vue.component('ComponentWatchEffect', componentWatchEffect);
  vue.component('ComponentForm', componentForm);
  vue.component('ComponentFormEdo', componentFormEdo);
  vue.component('ComponentFormWatch', componentFormWatch);
  vue.component('ComponentFetch', componentFetch);
  vue.component('ComponentCycle', componentCycle);
  vue.component('ButtonX2', button);
}
