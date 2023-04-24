export type PageFormList = {
  list: {
    span: number;
    label: string;
    prop: string;
    component: 'input' | 'button';
    componentProps: Record<string, any>;
  }[];
}[];
