#!/bin/sh

FILES=sources/*.page.html

for src in $FILES; do
  dst=`basename $src .page.html`.html;
  echo Generating www/$dst
  cpp -P $src > www/$dst;
done
