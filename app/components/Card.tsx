import React from "react";
import MainTextField from "./MainTextField";
import MainButton from "./mainButton";

type Props = {
  heading?: string;
  content?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  fields?: Array<{
    title: string;
    isPassword: boolean;
  }>;
  other?: string;
  otherUrl?: string;
};

const handleClick = () => {
  console.log("Button clicked");
};

function Card({
  heading,
  content,
  width,
  height,
  backgroundColor,
  borderRadius,
  fields,
  other,
  otherUrl,
}: Props) {
  return (
    <form className="bg-white p-30 m-20 rounded-lg shadow-md">
      <h2 className="text-black font-bold py-5">{heading}</h2>
      <p className="py-1">{content}</p>
      {fields?.map((field, index) => (
        <MainTextField
          key={index}
          title={field.title}
          isPassword={field.isPassword}
        />
      ))}
      <MainTextField title="UserName" isPassword={false} />
      <MainTextField title="Password" isPassword={true} />
      <a href={otherUrl} className="flex p-1 relative group">
        {other}
        <span className="opacity-0 group-hover:opacity-100 absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs">
            Contact Advisor
        </span>
        </a>
      <MainButton
        Name="Login"
        onClickFunc={handleClick}
        className="rounded-2xl"
      />
    </form>
  );
}

export default Card;
