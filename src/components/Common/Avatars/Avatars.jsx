import { Avatar } from "@nextui-org/react";
import { TypescriptIcon } from "../TechIcons/TypeScriptIcon";
import { NextIcon } from "../TechIcons/NextIcon";
import { JavaScriptIcon } from "../TechIcons/JavaScriptIcon";
import { ReactIcon } from "../TechIcons/ReactIcon";
import { MongoIcon } from "../TechIcons/MongoIcon";
import { NodeIcon } from "../TechIcons/NodeIcon";
import { FirebaseIcon } from "../TechIcons/FirebaseIcon";

const Avatars = ({ type }) => {
  return type === "react" ? (
    <Avatar squared icon={<ReactIcon />} />
  ) : type === "typeScript" ? (
    <Avatar squared icon={<TypescriptIcon />} />
  ) : type === "next" ? (
    <Avatar squared icon={<NextIcon />} />
  ) : type === "javaScript" ? (
    <Avatar squared icon={<JavaScriptIcon />} />
  ) : type === "mongo" ? (
    <Avatar squared icon={<MongoIcon />} />
  ) : type === "node" ? (
    <Avatar squared icon={<NodeIcon />} />
  ) : type === "firebase" ? (
    <Avatar squared icon={<FirebaseIcon />} />
  ) : (
    ""
  );
};

export default Avatars;
