import { defineStore } from 'pinia';
import type { LeaveType, SubstitutionType, SuggestionType } from './types';

const useFormStore = defineStore('form', () => {
  const leave = ref<LeaveType[]>([
    {
      name: '张笑涵',
      class: '2301',
      classTeacher: '林婷婷',
      parent: '孙丽',
      phone: '14758518501',
      type: '事假',
      calendar: '04/29-04/30',
      reason: '123123',
      state: false,
    },
  ]);
  const substitution = ref<SubstitutionType[]>([
    {
      name: '张笑涵',
      class: '2301',
      classTeacher: '林婷婷',
      parent: '孙丽',
      phone: '14758518501',
      substitutionParent: '尹秀兰',
      substitutionPhone: '18815057774',
    },
  ]);
  const suggestion = ref<SuggestionType[]>([
    {
      name: '张笑涵',
      class: '2301',
      classTeacher: '林婷婷',
      parent: '孙丽',
      phone: '14758518501',
      isPublic: true,
      department: '教师',
      title: '关于教学内容的建议',
      content: '123123123',
      queryCode: '795986',
    },
  ]);

  const save = (target: number, value: LeaveType | SubstitutionType | SuggestionType) => {
    switch (target) {
      case 0:
        leave.value.push(value as LeaveType);
        break;
      case 1:
        substitution.value.push(value as SubstitutionType);
        break;
      case 2:
        suggestion.value.push(value as SuggestionType);
        break;
      default:
        break;
    }
  };

  const remove = (target: Ref<any[]>, index: number) => {
    target.value.slice(index, 1);
  };

  return { leave, substitution, suggestion, save, remove };
});

export default useFormStore;
