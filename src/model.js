import image from "./assets/image.png";
export const model = [
  {
    type: "title",
    value: "Pure JS site Constructor",
    options: {
      tag: "h2",
      styles: {
        background: "cyan",
        color: "#fff",
        "text-align": "center",
        padding: "1.5rem",
      },
    },
  },
  { type: "text", value: "some text" },
  {
    type: "columns",
    value: ["111111", "222222", "3333333", "444444"],
  },
  { type: "image", value: image },
];
