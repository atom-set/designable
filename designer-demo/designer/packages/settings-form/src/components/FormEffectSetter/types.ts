export interface IEffectHooks {
  fieldList?: {
    [key: string]: Array<{
      "fieldType": string;
      "fieldTitle": string;
      "fieldName": string;
      "fieldPath": string;
    }>;
  };
  form?: {
    fieldHook?: {
      [key: string]: string;
    };
    formHook?: {
      [key: string]: string;
    };
    customHook?: {
      [key: string]: string;
    };
  };
}
