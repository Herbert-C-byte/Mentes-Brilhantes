
"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

// Ensure field names match keys in contactFormSchema
export type ContactFormErrors = {
  name?: string[];
  email?: string[];
  message?: string[];
};

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: ContactFormErrors;
};

export async function submitContactForm(
  // prevState is not strictly needed if we always return a new full state
  // but it's part of the useFormState signature.
  prevState: ContactFormState, 
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Erro de validação. Por favor, verifique os campos.",
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors as ContactFormErrors,
    };
  }

  // In a real application, you would process the data here:
  // e.g., send an email, save to a database, etc.
  console.log("Form data received:", validatedFields.data);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Example: Simulate a server-side error after successful validation for testing
  // if (validatedFields.data.name === "Test Error") {
  //   return {
  //     message: "Ocorreu um erro simulado no servidor.",
  //     status: 'error',
  //   };
  // }

  return {
    message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    status: 'success',
  };
}

