import image from "./assets/image.png";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  ColumnsBlock,
} from "./classes/blocks";

const text = `Max learns pure JavaScript and writes app "Site Constructor"`;
export const model = [
  new TitleBlock("Pure JS site Constructor", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "300px",
      height: "auto",
      background: "linear-gradient(to right, #ff0099, #493240)",
    },
    alt: "Это картинка",
  }),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
  new ColumnsBlock(
    [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
      "JavaScript - это просто, интересно. Научись создавать любые UI своими руками",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
];
