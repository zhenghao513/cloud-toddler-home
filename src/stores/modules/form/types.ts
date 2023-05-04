export interface BaseType {
  name: string;
  class: string;
  classTeacher: string;
  parent: string;
  phone: string;
}

export interface LeaveType extends BaseType {
  type: string;
  calendar: string;
  reason: string;
  state: boolean;
}

export interface SubstitutionType extends BaseType {
  substitutionParent: string;
  substitutionPhone: string;
}

export interface SuggestionType extends BaseType {
  isPublic: boolean;
  department: string;
  title: string;
  content: string;
  queryCode: string;
}
