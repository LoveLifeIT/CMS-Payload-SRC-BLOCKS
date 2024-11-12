import type { Block } from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {adTheorentActivityIdField, textColorField} from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";

export const SignupModule: Block = {
  slug: 'Signup Module',
  fields: [
    {
      name: 'copy',
      label: 'Copy',
      type: 'richText',
      editor: lexicalEditor({
        features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
      })
    },
    lexicalHTML('copy', {name: 'copy_html'}),
    {
      name: 'postSubmitCopy',
      type: 'text',
      label: 'Thank you Copy (post submit)',
    },
    textColorField,
    adTheorentActivityIdField
  ],
}