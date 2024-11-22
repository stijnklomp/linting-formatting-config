#!/bin/bash

DEFAULT_EXCLUDE_PATHS=(
	"./node_modules/*"
	"./package-lock.json"
	"./package.json"
	"./dist/*"
	".husky/*"
	".vscode/*"
)

EXCLUDE_PATHS+=("${DEFAULT_EXCLUDE_PATHS[@]}")

if [ "$#" -gt 0 ]; then
	EXCLUDE_PATHS+=("$@")
fi

echo "Excluded paths: ${EXCLUDE_PATHS[@]}"

EXCLUDE_ARGS=()
for path in "${EXCLUDE_PATHS[@]}"; do
	EXCLUDE_ARGS+=(-o -path "$path")
done

find . \( -path "./node_modules" "${EXCLUDE_ARGS[@]}" \) -prune -o -type f -name "*.json" -exec npx jsonsort -t -p {} \;
