import { createBehavior, createResource } from "@designer/core";
import { DnFC } from "@designer/react";
import { Submit as FormilySubmit } from "@formily/antd";
import React from "react";
import { AllLocales } from "../../locales";
import { AllSchemas } from "../../schemas";
import { createVoidFieldSchema } from "../Field";

export const Submit: DnFC<React.ComponentProps<typeof FormilySubmit>> = (props) => {
	console.log('props:', props)
	return (
		<FormilySubmit>{props.children}</FormilySubmit>
	)
}


Submit.Behavior = createBehavior({
	name: "Submit",
	extends: ["Field"],
	selector: (node) => node.props?.["x-component"] === "Submit",
	designerProps: {
		propsSchema: createVoidFieldSchema(AllSchemas.Submit),
	},
	designerLocales: AllLocales.Submit,
});

Submit.Resource = createResource({
	icon: "TextSource",
	elements: [
		{
			componentName: "Field",
			props: {
				type: "void",
				"x-decorator": "FormItem",
				"x-component": "Submit",
				"x-component-props": {
					children: '提交',
				},
				"x-decorator-props": {
					style: {
						display: "flex",
						alignContent: "center",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}
				}
			},
		},
	],
});
