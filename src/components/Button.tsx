interface ButtonProps {
  text?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button className="bg-violet-500 px-2">{props.text || "Enviar"}</button>
  );
}
