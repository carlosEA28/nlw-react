import { IconButton } from "@/components/IconButton";
import { InputRoot, InputIcon, InputFIeld } from "@/components/Input";
import { Link, Copy } from "lucide-react";

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputFIeld
        readOnly
        defaultValue={"devstage.com/codecraft-summit-2025/1289"}
      />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
