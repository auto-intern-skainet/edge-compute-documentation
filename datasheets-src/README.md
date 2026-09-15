# Datasheet sources

LaTeX sources for the Edge-Compute v1.5 datasheets (DE/EN/ZH).

Build:
- `latexmk -pdf datenblatt.tex` (German)
- `latexmk -pdf datasheet-en.tex` (English)
- `latexmk -xelatex datasheet-zh.tex` (Chinese; requires Noto Sans CJK SC)

`horus-assembly.pdf` is a hidden-line projection generated from the
hardware assembly STEP; `edge-branded.jpg` is the product photo used on
page 1. Built PDFs are published from `static/datasheets/`.
