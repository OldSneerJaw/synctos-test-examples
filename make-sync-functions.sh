#!/bin/sh -e

# Ensure these commands are executed from the root of the project directory
cd "$(dirname "$0")" || exit 1

# Ensure the build directory exists
outputDir="build"
mkdir -p "$outputDir"

# Generate the sync function from the document definitions file
node_modules/synctos/make-sync-function "my-example-doc-definitions.js" "$outputDir/my-example-sync-function.js"
