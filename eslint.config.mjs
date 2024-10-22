import tseslint from "typescript-eslint"

import config from "./dist/index.js"
export default tseslint.config(...config({
	typescript: true,
	strict: true,
	tsconfigRootDir: "."
}))