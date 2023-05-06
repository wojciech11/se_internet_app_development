# Tailwindcss basics

## Przygotowanie

Jeśli nie masz zainstalowanego [Node Version Manager](https://github.com/nvm-sh/nvm), zainstaluj nvm podążając za [instrukcją](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04).

```bash
nvm install --lts
```

Zainstaluj wymagane biblioteki:

```bash
npm install -D tailwindcss

# jeśli byłby to nowy projekt
# npx tailwindcss init
```

W konsoli uruchom tailwindcss, który za każdą zmianą plików `index.html` oraz `input.css`, będzie generował `output.css`:

```bash
npx tailwindcss -i input.css -o output.css --watch
```

W przeglądarce otwórz: `index.html`.

Ćwiczenie:

- otwórz dokumentację [tailwindcss](https://tailwindcss.com/docs/utility-first) oraz wklej przykładowy kod do `index.html`, odśwież przeglądarkę;

- Wykorzystaj przykład z [play.tailwindcss.com](https://play.tailwindcss.com/), aby dodać dodatkowe elementy do swojej strony.
