import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { EXAMPLE_1 } from './shared/tokens/.example1/example1.token';
import { EXAMPLE_2 } from './shared/tokens/example2/example2.token';

@Component({
  selector: 'body-root',
  template: `
  <div>{{ example1 | async }}</div>
  <div>{{ example2 | async }}</div>
  `,
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  example1 = inject(EXAMPLE_1);
  example2 = inject(EXAMPLE_2);
}
