# Lista de Tarefas

Uma aplicação simples de lista de tarefas com HTML, CSS (Tailwind) e JavaScript.

## Funcionalidades

- **Adicionar Tarefa**: Adicione uma tarefa com uma data associada.
- **Evitar Duplicação**: Não permite adicionar a mesma tarefa para o mesmo dia.
- **Marcar como Concluída**: Marque ou desmarque tarefas como concluídas.
- **Editar Tarefa**: Edite o nome de uma tarefa existente.
- **Excluir Tarefa**: Remova uma tarefa da lista.
- **Adicionar com Enter**: Pressione "Enter" para adicionar a tarefa rapidamente.

## Funções

- `loadTasks()`: Carrega e exibe as tarefas salvas no `localStorage`.
- `saveTasks(tasks)`: Salva as tarefas no `localStorage`.
- `addTask()`: Adiciona uma nova tarefa com verificação de duplicação.
- `displayTask(task)`: Exibe uma tarefa na lista com botões de ação.
- `toggleCompleteTask(taskId)`: Alterna o status de conclusão da tarefa.
- `editTask(taskId)`: Edita o nome da tarefa.
- `deleteTask(taskId)`: Exclui uma tarefa da lista.

## Tecnologias

- HTML
- Tailwind CSS
- JavaScript

## Como Usar

1. Clone o repositório.
2. Abra `index.html` em um navegador.

## Contribuições

Contribuições são bem-vindas! Abra uma _issue_ ou envie um _pull request_.
