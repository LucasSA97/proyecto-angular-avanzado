import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

//Importamos el modelo creado ITask
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.css'],
})
export class KabanTasksComponent {

  todoTask: ITask[] = [
    {
      title:'Animaciones',
      description: 'Aprender animaciones',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title:'Angulart CLI',
      description: 'Aprender comandos y configuraciones',
      completed: false,
      level: LEVELS.URGENTE
    },
    {
      title:'Build',
      description: 'Aprender a generar builds',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title:'Deploy',
      description: 'Aprender a generar deploys',
      completed: false,
      level: LEVELS.BLOCKING
    },
  ] ;

  doneTask: ITask[] = [
    {
      title:'Configuraciones ide',
      description: 'Configurar en Visual Studio',
      completed: true,
      level: LEVELS.INFO
    },
    {
      title:'Instalar Angulart CLI',
      description: 'Instalar con NPM',
      completed: true,
      level: LEVELS.URGENTE
    },
    {
      title:'Hola Mundo',
      description: 'Crear un proyecto',
      completed: true,
      level: LEVELS.BLOCKING
    }
  ] ;

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //Actualizamos el valor a completed de la tarea
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed
       
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
