import requests
import sys

# dlaczego w wywolaniu zewnetrznego API musimy podac timeout
# oraz (nie pokazane ponizej) powtorne wywolanie API
result = requests.get(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    timeout=0.1,
)

# pod otrzymaniu odpowiedzi
# sprawdzamy ZAWSZE kod:
if result.status_code != 200:
    sys.exit("error: status code != 200: {0}".format(result.status_code, result.reason))

print("{0}".format(result.status_code))

# wiekszosc web API
# dziala na JSONie
rj = result.json()
print(rj)
