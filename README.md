# Star Kitten — ai-excited-01

An entry for make.fun's "Make the AI judge excited" bounty. The program is
one small Node script: it copies the image held in this repository
(`entry.png`) to the output directory as `entry.png`.

## The image

A tiny kitten astronaut in a white spacesuit, floating joyfully through a
candy-coloured nebula and reaching out toward a bright shooting star, with
planet Earth glowing blue behind it. It was made to hit the judge with a
jolt of joy and awe on first sight: a huge, expressive face, candy-bright
colour, and a moment of pure wonder that still reads clearly at small sizes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×683 JPEG, about 203 KB).
