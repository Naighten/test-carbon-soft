import { Component } from '@angular/core';

export interface Note {
  id: number;
  title: string;
  body: string;
  edited: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-carbon-soft';

  notes: Note[] = [
    {
      id: 1278935612,
      title: 'Заметка номер один',
      body: 'А вот и появилась у вас на экране первая заметка в этом списке, а теперь подумайте, что можно сделать с ней, потому что я не могу придумать ничего интересного',
      edited: false,
    },
    {
      id: 212907312,
      title: 'Заметка номер 2',
      body: '123',
      edited: false,
    },
    {
      id: 3189203712,
      title: 'Заметка номер 3',
      body: '123',
      edited: false,
    },
    {
      id: 418927312,
      title: 'Заметка номер 4',
      body: '123',
      edited: false,
    },
  ];

  flagEditNote: boolean = false;

  selectedNote: Note = this.notes[0];

  createNote() {
    let lastId = Date.now();
    const newNote: Note = {
      id: lastId,
      title: 'Новая заметка',
      body: 'Новая заметка',
      edited: true,
    };
    this.notes.push(newNote);
    //  this.selectedNote = newNote;
    this.selectIdNote(lastId);
  }

  selectIdNote(id: number) {
    console.log(id);
    this.selectedNote.edited = false;
    this.selectedNote = this.notes.filter((el) => el.id === id)[0];
    this.selectedNote.edited = false;
  }

  deleteIdNote(id: number) {
    this.notes = this.notes.filter((e) => e.id !== id);
    this.selectedNote = this.notes[0];
    this.selectedNote.edited = false;
  }

  saveIdNote(note: Note) {
    this.notes.forEach((el: Note) => {
      if (el.id === note.id) {
        el.title = note.title;
        el.body = note.body;
        el.edited = false;
      }
    });
  }
}
