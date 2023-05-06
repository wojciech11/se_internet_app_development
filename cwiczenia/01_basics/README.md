# Basics

Zauważ: w czasie zajęć, będziemy umieszczać nasze programy oraz wyniki ćwiczeń w repozytorium git. Na koniec zajęć, proszę przesłać URL do swojego repozytorium git na email prowadzącego.

## Git + Github

- Załóż konto na Githubie,
- Podstawy - [instrukcja](https://github.com/wojciech11/se_software_build_automation_tools/blob/master/01_exercise/README_pl.md).

Zauważ, github nie jest jedynym rozwiązaniem - [sr.ht](https://sr.ht/)(open source, hacker), [gitlab](https://about.gitlab.com/), lub [bitbucket](https://bitbucket.org/product).

## Załóż repozytorium

Wyniki naszych ćwiczeń będziemy umieszczali na repozytorium git:

- `pai_1`

W repozytorium umieść plik `README.md`.

## HTTP

Skorzystajmy z serwisu [httpbin.org](https://httpbin.org), przetestuj następujące komendy:

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
    -H "Content-Type: application/json" https://httpbin.org/get
```

```bash
curl --fail -X DELETE \
    -H "Content-Type: application/json" https://httpbin.org/delete
```

Zapoznaj się z [statusami](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), zwróć szczególną uwagę które kody mówią o problemach po stronie klienta i serwera.

Przeczytaj o [metodach HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

## Pisanie klienta http

1. Napisz w znanym tobie języku (i umieść w repozytorium git), program, który będzie wywoływał:
*https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json*.

2. Jeśli Twój program działa, to dodaj obsługę błędów:

   - Sprawdzał kodu http,
   - Jeśli kod jest błędny, zakończył program,
   - Wyświetlił dane kiedy wszystko było dobrze,

3. Czas na nagłówki, dodaj nagłówek (*header*) `Content-Type: application/json`, który informuje, że mamy zamiar przesłać JSON.

4. Prześlemy teraz dane do serwera w formie JSON, w tym celu zmień wywoływany adres url na *https://httpbin.org/post* i prześlij dane (*data*):

   ```json
   {
      "name": "natalia"
   }
   ```

5. Pamiętając o [Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing), wiemy, że możemy mieć problemy z połączeniem :/, warto było dodać timeout.

   1. Zmień wywoływany url na `https://httpbin.org/delay/2` ([doc](https://httpbin.org/#/Dynamic_data/get_delay__delay_)).

   2. Dodaj timeout `1` sekundowy.

   3. Przetestuj aplikację, czy timeout działa.

6. Dodaj retries and backoff, do poprzedniego przykładu:

   - co jeden nie udane wywolanie zwiększ sleep między requestami

   Zauważ jest wiele strategii, najpopularniejsza jest Fibonacci i Exponential ([przykładowa biblioteka](https://backoff-utils.readthedocs.io/en/latest/strategies.html#supported-strategies)).

**Pamiętaj** Jako, że nie można liczyć, że każdy request zostanie wysłany bez problemów, pamiętaj o timeout (pamiętaj w niektórych frameworkach musisz go ustawić na kilku poziomach transportu i protokołu). Powstało wiele frameworków adresujących tej problem, np., dla Javy - [resilience4j](https://github.com/resilience4j/resilience4j) oraz sławny poprzednik od Netflixa - [Hystrix](https://github.com/Netflix/Hystrix).

7. Co to są *circuit breakers* i do czego służą? Dlaczego to jest ważny element aplikacji Netfixa? Zanowuj w `README.md`.

8. Patrząc od strony programisty w Netflixie czy Allegro budującego serwis, co to są *cascading failures*?

9. Patrząc od strony programisty w Amazonie budującego serwis, co to jest *graceful degradation*?

### Praca z JSONem 1

W języku Tobie najlepiej, odczytaj https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json i wypisz na ekran miona wszyskich członków zespołu super bohaterów.

W pierwszej iteracji, zrób to wykorzystując funkcje do pracy z jsonem, w drugiej sprawdź czy jest dostępna biblioteka `jmespath` ([docs](https://jmespath.org/)).

### Praca z JSONem 2

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

## Materiały dodatkowe

- [Testowanie web API](https://github.com/wojciech11/se_http_api_testing_quickstart)
