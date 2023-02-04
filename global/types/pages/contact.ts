export interface ContactFormValues {
  name: string;
  email: string;
  how: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  how?: string;
  message?: string;
}
