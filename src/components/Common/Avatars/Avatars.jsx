import { Avatar } from "@nextui-org/react";
import { TypescriptIcon } from "../TechIcons/TypeScriptIcon";
import { NextIcon } from "../TechIcons/NextIcon";
import { JavaScriptIcon } from "../TechIcons/JavaScriptIcon";
import { ReactIcon } from "../TechIcons/ReactIcon";
import { MongoIcon } from "../TechIcons/MongoIcon";
import { NodeIcon } from "../TechIcons/NodeIcon";
import { FirebaseIcon } from "../TechIcons/FirebaseIcon";
import { HtmlIcon } from "../TechIcons/HtmlIcon";
import { CssIcon } from "../TechIcons/CssIcon";
import { FigmaIcon } from "../TechIcons/FigmaIcon";
import { PostmanIcon } from "../TechIcons/PostmanIcon";
import { GithubIcon } from "../TechIcons/GithubIcon";
import { GitIcon } from "../TechIcons/GitIcon";
import { LinuxIcon } from "../TechIcons/LinuxIcon";
import { VercelIcon } from "../TechIcons/VercelIcon";
import { ReduxIcon } from "../TechIcons/ReduxIcon";
import { TailwindIcon } from "../TechIcons/TailwindIcon";
import { SassIcon } from "../TechIcons/SassIcon";
import { StyledIcon } from "../TechIcons/StyledIcon";
import { NextJsIcon } from "../TechIcons/NextJsIcon";
import { ExpressIcon } from "../TechIcons/ExpressIcon";
import { AntIcon } from "../TechIcons/AntIcon";

const Avatars = ({ type }) => {
  const color = {
    backgroundColor: "#fffff",
  };
  return type === "react" ? (
    <Avatar squared css={color} icon={<ReactIcon />} />
  ) : type === "typeScript" ? (
    <Avatar squared css={color} icon={<TypescriptIcon />} />
  ) : type === "nextUi" ? (
    <Avatar squared css={color} icon={<NextJsIcon />} />
  ) : type === "javaScript" ? (
    <Avatar squared css={color} icon={<JavaScriptIcon />} />
  ) : type === "mongo" ? (
    <Avatar squared css={color} icon={<MongoIcon />} />
  ) : type === "node" ? (
    <Avatar squared css={color} icon={<NodeIcon />} />
  ) : type === "firebase" ? (
    <Avatar squared css={color} icon={<FirebaseIcon />} />
  ) : type === "html" ? (
    <Avatar squared css={color} icon={<HtmlIcon />} />
  ) : type === "css" ? (
    <Avatar squared css={color} icon={<CssIcon />} />
  ) : type === "figma" ? (
    <Avatar squared css={color} icon={<FigmaIcon />} />
  ) : type === "postman" ? (
    <Avatar squared css={color} icon={<PostmanIcon />} />
  ) : type === "github" ? (
    <Avatar squared css={color} icon={<GithubIcon />} />
  ) : type === "git" ? (
    <Avatar squared css={color} icon={<GitIcon />} />
  ) : type === "linux" ? (
    <Avatar squared css={color} icon={<LinuxIcon />} />
  ) : type === "vercel" ? (
    <Avatar squared css={color} icon={<VercelIcon />} />
  ) : type === "redux" ? (
    <Avatar squared css={color} icon={<ReduxIcon />} />
  ) : type === "tailwind" ? (
    <Avatar squared css={color} icon={<TailwindIcon />} />
  ) : type === "sass" ? (
    <Avatar squared css={color} icon={<SassIcon />} />
  ) : type === "styled" ? (
    <Avatar squared css={color} icon={<StyledIcon />} />
  ) : type === "next" ? (
    <Avatar squared css={color} icon={<NextIcon />} />
  ) : type === "express" ? (
    <Avatar squared css={color} icon={<ExpressIcon />} />
  ) : type === "ant" ? (
    <Avatar squared css={color} icon={<AntIcon />} />
  ) : (
    ""
  );
};

export default Avatars;
