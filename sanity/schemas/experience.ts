const experience = {
  name: "experience",
  title: "Experience",
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
      name: "titulatura",
      title: "Titulatura",
      type: "string",
    },
    {
      name: "firma",
      title: "Firma",
      type: "string",
    },
    {
      name: "tech",
      title: "Tech-Stack",
      type: "array",
      of: [
        {
          type: 'image'
        },
      ],
    },
    {
        name:'dataE',
        title:'Data-Incepere',
        type:'string',
    },
    {
        name:'dataS',
        title:'Data-Sfarsit',
        type:'string'
    },
    {
        name:'points',
        title:'Points',
        type: 'array',
        of:[{type:'string'}]
    }

  ],
};

export default experience;
