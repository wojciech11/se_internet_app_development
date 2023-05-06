# Basics

Zauważ: w czasie zajęć, będziemy umieszczać nasze programy oraz wyniki ćwiczeń w repozytorium git. Na koniec zajęć, proszę przesłać URL do swojego repozytorium git na email prowadzącego.

## Git + Github

1. Załóż konto na Githubie, jeśli jeszcze nie masz;
2. Zróbmy sobie szybką powtórkę - [instrukcja](https://github.com/wojciech11/se_software_build_automation_tools/blob/master/01_exercise/README_pl.md).

Zauważ, Github nie jest jedynym portalem oferującym zdalne repozytorium git, z bardziej popularnych alternatyw [gitlab](https://about.gitlab.com/), [bitbucket](https://bitbucket.org/product), i [sr.ht](https://sr.ht/) (open source, hacker, często gości na [hackernews](https://news.ycombinator.com/)),

## Linux / Ubuntu

Szybka powtórka / wprowadzenie linux - [instrukcja](https://github.com/wojciech11/se_software_build_automation_tools/blob/master/00_intro/README_pl.md).

## Załóż repozytorium

1. Na githubie, utwórz nowe repozytorium git - `pai_1_intro`.

2. Sklonuj repozytorium:

   ```bash
   cd workspace

   # adres twojego repozytorium
   git clone https://.... .git

   cd pai_1_intro
   ```

3. W repozytorium umieść plik `README.md`:

   ```bash
   touch README.md

   # edytor, może być vim

   git add README.md
   git commit -m init
   git push -u origin master
   ```

4. W `README.md`, proszę umieszczaj notatki oraz komendy, jeśli tak wskazuje instrukcja.

## HTTP

Skorzystajmy z serwisu [httpbin.org](https://httpbin.org), który służy jako pomoc w nauce http oraz możliwych scenariuszy.


 1. Przetestuj następujące komendy:

    ```bash
    curl --fail -X POST \
        -H "Content-Type: application/json" \
        -d '{"name":"natalia"}' https://httpbin.org/post
    ```

    ```bash
    # zwroc uwage na odpowiedz:
    curl --fail -X POST \
        -H "Content-Type: application/json" \
        -d '{"name":"natalia"}' https://httpbin.org/get
    ```

    ```bash
    curl --fail -X GET \
        -H "Content-Type: application/json" \
        https://httpbin.org/get
    ```

    ```bash
    curl --fail \
        -X DELETE \
        -H "Content-Type: application/json" https://httpbin.org/delete
    ```

2. Zapoznaj się z [statusami](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), zwróć szczególną uwagę które kody mówią o problemach po stronie klienta i serwera.

3. Zauważ, że możesz wykorzystać *httpbin* do eksperymentowania z kodami http.

```bash
curl -X GET https://httpbin.org/status/404 --fail
```

   Poświęć kilka minut na przejrzenie wszystkich dostępnych method [metodach HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

   - Do czego służy *PATCH* czy różni się od *PUT*?
   - Na jakich metodach http polega API REST, kryjącymi się za skrótem CRUD?

## Klient web API 1 - GET

Poniższy program rozwijaj w katalogu sklonowanego repozytorium.

1. Napisz w znanym tobie języku (i umieść w repozytorium git), program, który będzie wywoła/ściągnie:
*https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json*.

2. Jeśli Twój program działa, to dodaj obsługę błędów:

   - Sprawdzał kodu http,
   - Jeśli kod jest błędny, zakończył program,
   - Wyświetlił dane kiedy nie było błędu.

3. Jeśli powyższy program działa, umieść go w repozytorium git.

## Klient web API 2 - POST

Po każdym kroku, warto przetestować czy kod działa w zamierzony sposób.

1. Zmień web API URL na `https://httpbin.org/post`, żebyśmy mogli zobaczyć w jaki sposób możemy przesyłać dane i zweryfikować, że we właściwy sposób wywołujemy API.

2. Zanim prześlesz dane, nagłówek (*header*) `Content-Type: application/json`, który informuje, że mamy zamiar przesłać JSON.

3. Dodaj dane do wywołania serwisu, powinnaś/powinienieś przesłać:

   ```json
   {
      "name": "natalia"
   }
   ```

4. zweryfikuj, że program działa i że *httpbin* zwrócił twoje dane w odpowiedzi.

## Klient web API 3 - timeout

Pamiętając o [Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing), wiemy, że możemy mieć problemy z połączeniem :/, warto było dodać timeout.

1. Zmień wywoływany url na `https://httpbin.org/delay/2` ([doc](https://httpbin.org/#/Dynamic_data/get_delay__delay_)).

2. Dodaj timeout `1` sekundowy.

3. Przetestuj aplikację, czy timeout działa.

4. Dodaj retries and backoff, czyli `N` razy, jeśli wywołanie nie zadziała poczekaj dłużej przed ponownym wywołaniem API.

   Zauważ jest wiele strategii, najpopularniejsza jest Fibonacci i Exponential ([przykładowa biblioteka](https://backoff-utils.readthedocs.io/en/latest/strategies.html#supported-strategies)).

**Pamiętaj** Nie można liczyć, że każdy request zostanie wysłany bez problemów, zawsze ustawiaj timeout. W niektórych frameworkach musisz go ustawić na kilku poziomach transportu i protokołu. Powstało wiele frameworków adresujących tej problem, np., dla Javy - [resilience4j](https://github.com/resilience4j/resilience4j) oraz sławny poprzednik od Netflixa - [Hystrix](https://github.com/Netflix/Hystrix).

7. Co to są *circuit breakers* i do czego służą? Dlaczego to jest ważny element aplikacji Netfixa? Zanotuj w `README.md`.

8. Patrząc od strony programisty w Netflixie czy Allegro budującego serwis, dlaczego chcemy uniknąć *cascading failures*?

9. Patrząc od strony programisty w Amazonie budującego serwis, dlaczego *graceful degradation* jest ważny?

### Praca z danymi w formacie z JSON 1

Ponownie będziemy pracować w języku programowania, który jest Tobie najbardziej znany. Jak mówiliśmy o tym w czasie wykładu, [JSON](https://www.json.org/json-en.html) jest wiodącym formatem danych.

1. W języku Tobie najlepiej, odczytaj https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json i wypisz na ekran imiona wszyskich członków zespołu super bohaterów.

2. W drugiej iteracji, wyszukaj bibliotekę `jmespath` ([docs](https://jmespath.org/)) dla twojego języka oprogramowania.

3. Umieść program w repozytorium git.

### Praca z danymi w formacie JSON 2

Warto do swojego arsenału narzędzi dodać `jq`:

```bash
curl -s --fail -X POST \
     -H "Content-Type: application/json" \
     -d '{"name":"natalia"}' https://httpbin.org/post
```

```bash
curl -s --fail -X POST \
     -H "Content-Type: application/json" \
     -d '{"name":"natalia"}' https://httpbin.org/post | jq
```

```bash
curl -s --fail -X POST \
     -H "Content-Type: application/json" \
     -d '{"name":"natalia"}' https://httpbin.org/post | jq '.json'
```

```bash
curl -s --fail -X \
    GET -H "Content-Type: application/json" \
    -d '{"name":"natalia"}' https://httpbin.org/get \
    | jq '.json | .name'
```

Wykorzystaj `jq`, aby wypisać nazwy super bohaterów z https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json.

Wrzuć pełną instrukcję z `curl` i `jq` do pliku `README.md` w Twoim repozytorium.

## Zakończenie

Prześlij link do repozytorium na emaila prowadzącego zajęcia.

## Zauważ

Możemy użyć `curl` lub `wget` do ściągnięcia pliku:

```bash
curl https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json --output nielubiemarvela.json
```

```bash
wget https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json

# jesli chcemy zapisac pod inna nazwa
wget -O nielubiemarvela.json https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
```

## Materiały dodatkowe

- [Testowanie web API](https://github.com/wojciech11/se_http_api_testing_quickstart)
