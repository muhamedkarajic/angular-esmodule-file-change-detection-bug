import { createInjectionToken } from '../../helpers/token.helper';
import { BehaviorSubject } from 'rxjs';

export const EXAMPLE_1 = createInjectionToken(new BehaviorSubject<string>('Example1'));
