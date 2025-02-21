import { User, Mail, ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { InputRoot, InputIcon, InputFIeld } from "../../components/Input";

export function SubscriptionForm() {
  return (
    <form
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      action=""
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputFIeld type="text" placeholder="Nome Completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputFIeld type="Email" placeholder="E-mail" />
        </InputRoot>
      </div>
      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
