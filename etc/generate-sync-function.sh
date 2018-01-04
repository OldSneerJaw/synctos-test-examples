#!/bin/sh -e

# Determine the current script's directory, so it can execute commands from the root of the project no matter where it was run from
projectDir="$(dirname "$0")/.."

# This is where the generated sync function will be created
outputDir="$projectDir/build"

# This is where the synctos package was downloaded by npm
synctosDir="$projectDir/node_modules/synctos"

# Ensure the build directory exists
mkdir -p "$outputDir"

# Generate the sync function from the document definitions file
"$synctosDir"/make-sync-function "$projectDir/src/my-example-doc-definitions.js" "$outputDir/my-example-sync-function.js"
