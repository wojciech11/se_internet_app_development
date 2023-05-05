# Example 1


```bash
# jesli nie masz nodejs zainstalowanego
nvm install lts
```


```bash
# wymagane biblioteki
npm install axios
```

Jest wiele [linterów](https://docs.rome.tools/guides/getting-started/), najpopularniejszy ESlint, w przypadtku tego repozytorium użyjemy [rome](https://docs.rome.tools/guides/getting-started/):

```bash
# linter
npm install --save-dev --save-exact rome
npx rome init

```

Jak uruchomić:

```bash
node server.js
```
