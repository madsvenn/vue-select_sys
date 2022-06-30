import { useSystemStore } from '@/stores/counter';
import { ref } from 'vue';

export default await (async () => {
const role = sessionStorage.getItem('role');
const password = ref('');
const store = useSystemStore();
store.getlistStudents();
store.getlistTeachers();
const username = sessionStorage.getItem('token');
const submit = () => {
//console.log(store.students)
console.log(store.students[0]);
for (let i = 0; i < store.students.length; i++) {
if (store.students[i].userName == username) {
console.log(store.students[i].userName);
console.log(store.students[i].password);
}
}
};
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
() => {
// @ts-ignore
[];
// @ts-ignore
[role, username, password, submit];
};
return {};
},
});
const __VLS_slots = (await import('./Student.vue.__VLS_template')).default;
return {} as typeof __VLS_Component & (new () => { $slots: typeof __VLS_slots; });
})();
