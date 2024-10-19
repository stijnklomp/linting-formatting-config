import tseslint from "typescript-eslint"

import config from "./dist/index.js"
console.log(...config({
	typescript: true,
	strict: true,
	tsconfigRootDir: "."
}))
export default tseslint.config(...config({
	typescript: true,
	strict: true,
	tsconfigRootDir: "."
}))