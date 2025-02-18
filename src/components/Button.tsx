import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className=" flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-[10px] w-full cursor-pointer hover:bg-blue transition-colors duration-300 hover:text-gray-900"
      {...props}
    >
      {props.children}
    </button>
  );
}
//extends ComponentProps<"button"> = a interface vai extender todos as props de um botao padrao como type,etc...(funciona com os outros, como o input)
