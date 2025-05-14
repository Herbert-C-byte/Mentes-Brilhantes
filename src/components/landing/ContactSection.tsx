
"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-base">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Enviando...' : 'Enviar Mensagem'}
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Sucesso!",
        description: state.message,
      });
      form.reset();
      // Reset form state status to idle if needed, though useFormState handles subsequent states.
    } else if (state.status === 'error') {
      if (state.errors) {
        // Set errors for react-hook-form to display
        (Object.keys(state.errors) as Array<keyof ContactFormValues>).forEach((key) => {
          const fieldErrors = state.errors![key];
          if (fieldErrors && fieldErrors.length > 0) {
            form.setError(key, { type: 'server', message: fieldErrors.join(', ') });
          }
        });
        toast({
          title: "Erro de Validação!",
          description: "Por favor, corrija os erros no formulário.",
          variant: "destructive",
        });
      } else if (state.message) { // General error message not tied to specific fields
         toast({
          title: "Erro!",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Entre em Contato</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Tem um projeto em mente ou quer saber mais sobre nossos serviços? Adoraríamos ouvir de você!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Envie-nos uma mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo e nossa equipe responderá o mais breve possível.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(() => {
                    // form.handleSubmit wraps the call to formAction
                    // It will perform client-side validation first
                    // If client-side validation passes, it creates FormData and calls formAction
                    const formData = new FormData();
                    const values = form.getValues();
                    (Object.keys(values) as Array<keyof ContactFormValues>).forEach((key) => {
                      formData.append(key, values[key]);
                    });
                    formAction(formData);
                  })}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="py-3 text-base"/>
                        </FormControl>
                         <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} className="py-3 text-base"/>
                        </FormControl>
                         <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sua Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Descreva seu projeto ou dúvida..." {...field} rows={5} className="py-3 text-base"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <SubmitButton />
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

