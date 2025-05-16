import { Component } from '@angular/core';
import { Task } from '../../model/tasks';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { SearchComponent } from '../search/search.component';
import { AddTaskComponentComponent } from '../add-task-component/add-task-component.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    SearchComponent,
    AddTaskComponentComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'All Tasks is here...';
  inputText: string = '';

  tasks: Task[] = [
    {
      id: 1,
      title: 'Finish project report',
      description: 'Complete the final report for the Task Tracker project.',
      imageUrl: 'https://picsum.photos/200/300',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Design homepage',
      description: 'Create a modern, responsive homepage layout.',
      imageUrl: 'https://picsum.photos/200/400',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Team meeting',
      description: "Discuss project milestones and assign next week's tasks.",
      imageUrl: 'https://picsum.photos/200/600',
      isCompleted: true,
    },
    {
      id: 4,
      title: 'Update documentation',
      description: 'Ensure all API endpoints are documented properly.',
      imageUrl: 'https://picsum.photos/200/600',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Fix login bug',
      description: 'Resolve user authentication issues on mobile.',
      imageUrl: 'https://picsum.photos/200/300',
      isCompleted: false,
    },
  ];

  allTasks: Task[] = [...this.tasks];

  addTask() {
    //task is hardcoded
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: 'New Task',
      description: 'Description of the new task.',
      imageUrl: 'https://picsum.photos/200/300',
      isCompleted: false,
    };

    this.tasks.push(newTask);
  }

  userSearchSomething(inputText: string) {
    console.log('user search something: ');
    this.inputText = inputText;
    console.log('inputText: ', this.inputText);

    if (this.inputText.trim() === '') {
      this.tasks = [...this.allTasks];
      return;
    }

    this.tasks = this.tasks.filter((task) =>
      task.title.toLowerCase().includes(this.inputText.toLowerCase())
    );
  }

  addTaskFromComp($event: Task) {
    this.allTasks.push($event);
    this.tasks.push($event);
    alert('Task added successfully');
  }
}
