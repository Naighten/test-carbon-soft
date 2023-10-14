import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  notes: Note[] = [];

  @Output()
  selectedNote = new EventEmitter<number>();

  @Output()
  deletedNote = new EventEmitter<number>();

  @Output()
  created = new EventEmitter();

  createNote() {
    this.created.emit();
  }

  selectNote(id: number) {
    this.selectedNote.emit(id);
  }

  deleteNote(id: number) {
    this.deletedNote.emit(id);
  }
}
