import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.scss'],
})
export class StatusLabelComponent {
  @Input()
  status: 'approve' | 'reject' | 'pending' = 'approve';

  get labelText(): string {
    return this.status.charAt(0).toUpperCase() + this.status.slice(1);
  }

  get labelClass(): string {
    return this.status;
  }
}
