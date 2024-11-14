#!/bin/bash

# Define the directories to exclude here
EXCLUDE_PATHS=(
	"./node_modules/*"
	"./package-lock.json"
	"./package.json"
	"./dist/*"
	".husky/*"
	".vscode/*"
)

# Build the exclusion parameters for find command
EXCLUDE_ARGS=()
for path in "${EXCLUDE_PATHS[@]}"; do
	EXCLUDE_ARGS+=(! -path "$path")
done

# Run the find command with dynamic exclusions
find . -type f -name "*.json" "${EXCLUDE_ARGS[@]}" -exec npx jsonsort {} \;