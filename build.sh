#!/bin/bash

set -e
cargo build --release
cd ./printo-frontend
npm install
npm run build
cd ..

rm -rf ./release
mkdir ./release

cp -avR ./printo-frontend/build ./release
cp ./target/release/printo ./release
cd ./release
zip -r ../printo.zip ./
