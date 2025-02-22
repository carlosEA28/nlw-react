"use client";

import { IconButton } from "@/components/IconButton";
import { InputRoot, InputIcon, InputFIeld } from "@/components/Input";
import { Link, Copy } from "lucide-react";

interface inviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: inviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputFIeld readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
