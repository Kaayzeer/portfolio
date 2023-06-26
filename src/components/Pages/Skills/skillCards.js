import Avatars from "@/components/Common/Avatars/Avatars";
import * as I from "@/components/Common/Icons";

export const skillCards = {
  Technologies: {
    icons: [
      <Avatars>
        <I.HtmlIcon />
      </Avatars>,
      <Avatars>
        <I.CssIcon />
      </Avatars>,
      <Avatars>
        <I.JavaScriptIcon />
      </Avatars>,
      <Avatars>
        <I.NextIcon />
      </Avatars>,
      <Avatars>
        <I.TypescriptIcon />
      </Avatars>,
      <Avatars>
        <I.NodeIcon />
      </Avatars>,
    ],
    texts: ["HTML5", "CSS3", "JavaScript", "Next", "Typescript", "Node.js"],
  },
  Tools: {
    icons: [
      <Avatars>
        <I.FigmaIcon />
      </Avatars>,
      <Avatars>
        <I.PostmanIcon />
      </Avatars>,
      <Avatars>
        <I.GitIcon />
      </Avatars>,
      <Avatars>
        <I.LinuxIcon />
      </Avatars>,
      <Avatars>
        <I.VercelIcon />
      </Avatars>,
      <Avatars>
        <I.FirebaseIcon />
      </Avatars>,
    ],
    texts: ["Figma", "Postman", "Git", "Linux", "Vercel", "Firebase"],
  },
  Libraries: {
    icons: [
      <Avatars>
        <I.ReactIcon />
      </Avatars>,
      <Avatars>
        <I.ReduxIcon />
      </Avatars>,
      <Avatars>
        <I.TailwindIcon />
      </Avatars>,
      <Avatars>
        <I.SassIcon />
      </Avatars>,
      <Avatars>
        <I.StyledIcon />
      </Avatars>,
      <Avatars>
        <I.AntIcon />
      </Avatars>,
    ],
    texts: [
      "React",
      "Redux",
      "Tailwind.css",
      "SASS",
      "styled-components",
      "AntDesign",
    ],
  },
};
