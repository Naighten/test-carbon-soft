import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input()
  note!: Note;

  title: string;
  body: string;

  @Output()
  deletedNote = new EventEmitter<number>();

  @Output()
  savedNote = new EventEmitter<Note>();

  ngOnInit(): void {
    this.title = this.note.title;
    this.body = this.note.body;
  }

  toEditNote() {
    this.note.edited = !this.note.edited;
    this.title = this.note.title;
    this.body = this.note.body;
  }

  deleteNote(id: number) {
    this.deletedNote.emit(id);
  }

  saveNote(note: Note) {
    this.savedNote.emit(note);
  }
}
