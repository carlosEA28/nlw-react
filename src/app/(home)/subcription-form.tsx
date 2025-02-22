"use client";

import { User, Mail, ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { InputRoot, InputIcon, InputFIeld } from "../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um email válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subscriptionSchema),
  });

  function onSubscribe(data: SubscriptionSchema) {
    console.log(data);
  }

  return (
    <form
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputFIeld
              type="text"
              placeholder="Nome Completo"
              {...register("name")}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputFIeld
              type="Email"
              placeholder="E-mail"
              {...register("email")}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
