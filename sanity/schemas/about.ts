const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: 'about',
      title: 'About',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'}
    },
    {
      name: "imagine",
      title: "Imagine",
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
      name: "descriere",
      title: "Descriere",
      type: "string",
    },
  ],
};

export default about;
