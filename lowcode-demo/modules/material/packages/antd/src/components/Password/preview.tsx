import { createBehavior, createResource } from "@designer/core";
import { DnFC } from "@designer/react";
import { Password as FormilyPassword } from "@formily/antd";
import React from "react";
import { AllLocales } from "../../locales";
import { AllSchemas } from "../../schemas";
import { createFieldSchema } from "../Field";

export const Password: DnFC<React.ComponentProps<typeof FormilyPassword>> =
	FormilyPassword;

Password.Behavior = createBehavior({
	name: "Password",
	extends: ["Field"],
	selector: (node) => node.props?.["x-component"] === "Password",
	designerProps: {
		propsSchema: createFieldSchema(AllSchemas.Password),
	},
	designerLocales: AllLocales.Password,
});

Password.Resource = createResource({
	icon: "PasswordSource",
	elements: [
		{
			componentName: "Field",
			props: {
				title: "Password",
				"x-decorator": "FormItem",
				"x-component": "Password",
			},
		},
	],
});
