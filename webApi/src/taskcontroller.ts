import { Router, Request, Response } from 'express';
import { Task } from './task';

const router = Router();
const tasks: Task[] = [
    {
        id: 1,
        title: 'Fazer compras',
        description: 'Comprar itens essenciais no supermercado',
        completed: false,
    },
    {
        id: 2,
        title: 'Estudar TypeScript',
        description: 'Aprofundar os conhecimentos em TypeScript',
        completed: true,
    },
    {
        id: 3,
        title: 'Fazer exercícios',
        description: 'Realizar atividades físicas para manter a saúde',
        completed: false,
    },
    // Adicione mais objetos conforme necessário
];

router.post('/', (req: Request, res: Response) => {
    const task: Task = {
      id: tasks.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
  
    tasks.push(task);
    res.status(201).json(task);
});

router.get('/', (req: Request, res: Response) => {
    res.json(tasks);
});

router.get('/:id', (req: Request, res: Response) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
  
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      res.json(task);
    }
});

export default router;