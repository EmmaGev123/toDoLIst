import * as yup from "yup"

export const basicSchema=yup.object().shape({
name:yup.string().max(20, 'Must be 20 characters or less').required('Required'),
description:yup.string().max(255, 'Must be 255 characters or less').required('Required'),
})