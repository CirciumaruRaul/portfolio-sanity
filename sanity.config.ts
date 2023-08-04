import { defineConfig } from "sanity";
import {deskTool } from "sanity/desk";
import schemas from './sanity/schemas/index';
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: 'vx5nct60',
  dataset: 'production',
  title: "My personal website",
  apiVersion: "2023-07-31",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {types: schemas}
})

export default config;