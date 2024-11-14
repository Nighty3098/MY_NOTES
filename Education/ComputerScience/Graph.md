---
tags:
  - ComputerScience
---
## Основные понятия

1. **Граф** — это множество вершин (узлов) и рёбер (связей) между ними. Графы могут быть:
   - **Ориентированными** (рёбра имеют направление).
   - **Неориентированными** (рёбра не имеют направления).
   - **Взвешенными** (каждое ребро имеет вес или стоимость).

2. **Вершины** — это узлы графа, которые могут представлять различные объекты (например, города, задачи и т.д.).

3. **Рёбра** — это связи между вершинами, которые могут быть направленными или ненаправленными.

4. **Степень вершины** — количество рёбер, инцидентных данной вершине.

## Подходы к решению задач

### 1. Моделирование задачи с помощью графа

Для начала необходимо правильно смоделировать задачу в виде графа:
- Определите, какие объекты будут вершинами.
- Определите связи между этими объектами и запишите их как рёбра.

### 2. Использование алгоритмов

Существует множество алгоритмов для работы с графами, среди которых наиболее распространенные:

- **Алгоритм Дейкстры** — для нахождения кратчайшего пути в взвешенных графах.
- **Алгоритм Флойда-Уоршелла** — для нахождения кратчайших путей между всеми парами вершин.
- **Поиск в глубину (DFS)** и **поиск в ширину (BFS)** — для обхода графов.

### 3. Примеры задач

#### Пример 1: Поиск кратчайшего пути

Допустим, у нас есть граф, представляющий карту городов с расстояниями между ними. Чтобы найти кратчайший путь из города A в город B, можно использовать алгоритм Дейкстры:

```python
import heapq

def dijkstra(graph, start):
    queue = []
    heapq.heappush(queue, (0, start))
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    
    while queue:
        current_distance, current_vertex = heapq.heappop(queue)
        
        if current_distance > distances[current_vertex]:
            continue
        
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))
    
    return distances
```

#### Пример 2: Обход графа

Для обхода графа можно использовать алгоритмы DFS или BFS. Пример реализации DFS:

```python
def dfs(graph, vertex, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(vertex)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    return visited
```


[1] https://globallab.ru/ru/project/list/reshenie_zadatch_s_pomoshju_grafa/general
[2] https://www.youtube.com/watch?v=wKHMPWKMtBk
[3] https://dzen.ru/a/YtfBEJE1eif_elwb
[4] https://kpolyakov.spb.ru/school/test11/9.htm
[5] https://skyteach.ru/informatika/ege-po-informatike-teoriya-grafov/
[6] https://www.youtube.com/watch?v=TvFSNYDWwQU
[7] https://professorweb.ru/my/html/html5/level6/6_3.php
[8] https://learn.javascript.ru/task/caching-decorator