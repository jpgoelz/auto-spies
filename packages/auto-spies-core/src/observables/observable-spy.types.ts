import { Subject } from 'rxjs';
import { ValueConfigPerCall } from '../auto-spies-core.types';

export type CreateObservableAutoSpy<
  LibSpecificFunctionSpy,
  LibSpecificFunctionSpyWithObservableMethods,
  ObservableReturnType
> = LibSpecificFunctionSpy &
  LibSpecificFunctionSpyWithObservableMethods &
  AddCalledWithToObservableFunctionSpy<ObservableReturnType>;

export type AddCalledWithToObservableFunctionSpy<ObservableReturnType> = {
  calledWith(...args: any[]): AddObservableSpyMethods<ObservableReturnType>;
  mustBeCalledWith(...args: any[]): AddObservableSpyMethods<ObservableReturnType>;
};

export interface AddObservableSpyMethods<T> {
  nextWith(value?: T): void;
  nextOneTimeWith(value?: T): void; // emit one value and completes
  nextWithPerCall(valuesPerCall?: ValueConfigPerCall<T>[]): void;
  throwWith(value: any): void;
  complete(): void;
  returnSubject(): Subject<T>;
}
