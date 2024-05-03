#!/bin/sh
mkdir -p dist/css
cp -a node_modules/@reactive-graph/design/build/css/* dist/css/
mkdir -p dist/favicon
cp -a node_modules/@reactive-graph/design/build/favicon/* dist/favicon/
mkdir -p dist/fonts
cp -a node_modules/@reactive-graph/design/build/fonts/* dist/fonts/
mkdir -p dist/logo
cp -a node_modules/@reactive-graph/design/build/logo/* dist/logo/
