import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: 'NodeJs',
    duration: 10,
    educator: 'Dani',
  });

  CreateCourseService.execute({
    name: 'ReactJs',
    educator: 'Diego',
  });

  return res.send();
}
