import { createInjectionToken } from '../../helpers/token.helper';
import { BehaviorSubject } from 'rxjs';

export const EXAMPLE_2 = createInjectionToken(new BehaviorSubject<string>('Example2'));
