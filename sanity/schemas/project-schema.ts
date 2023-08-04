const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "nume",
      title: "nume",
      type: "string",
    },
    {
      name: "descriere",
      title: "Descriere",
      type: "string",
    },
  ],
};

export default project;
