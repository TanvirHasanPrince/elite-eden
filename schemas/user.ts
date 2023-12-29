import { defineField } from "sanity";

const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check if the user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "User Name",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      description: "User Image",
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      description: "User Password",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "A brief description field",
    }),
  ],
};

export default user;
