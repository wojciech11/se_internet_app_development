# Observability in Action

Poniższy przykład jest dla pokazania jak wygląda konfiguracje monitoringu, logingu i tracingu dla aplikacji.

Skupimy się na samej aplikacji i warstwie wizualizacyjnej w Grafanie.

Jeśli jesteś ciekaw jak skonfigurowane jest każde z tych narzędzie, możesz użyć tego przykładu dla własnych eksperymentów lub dla zadań dodatkowych podpowiedzianych przez prowadzącego.

## Prometheus / Grafana stack

```mermaid
flowchart LR

    App -- traces --> Tempo
    App -- metrics --> Pr(Prometheus) --> Gr(Grafana)
    Deps -- logs --> Loki

    subgraph App Stack
      direction TB
      App(Order Mgmt\nApp) --- Deps(Runtime)
    end

    Loki --> Gr
    Tempo --> Gr

    Pr -- Alert Rules* --> Alertmanager --> OnCall

    Gr -- native alert rules* --> OnCall
```

Zauważ jest wiele innych implementacji technologii observability zarówno Opensource (e.g., [zipkin](https://zipkin.io) dla trace-ingu) jak i o zamkniętym kodzie źródłowym jak [Datadog](https://www.datadoghq.com) czy [Lightstep](https://lightstep.com).


Zauważ również, że narzędzia idą w kierunku łączenia, każdego z aspektów observability w jedno narzędzie, szczególnie logowanie i tracing.

### Monitoring:

- Metrics: [Prometheus](https://prometheus.io)
- Vizualization and reporting: [Grafana](https://grafana.com)
- Alerting: [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/) or native [Grafana](https://grafana.com)

### Logging

- [Loki](https://grafana.com/oss/loki/)
- Viz: Grafana

### Traces

- [Tempo](https://grafana.com/products/cloud/traces/)

## Uruchominie przykładu (WIP)

```bash
docker-compose up -d
```

```bash
# see whether everything works
docker ps
```

```
# you should see:

```
