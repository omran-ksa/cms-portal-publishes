import { defaultMemoization } from './default-memoization.function.js';
import { distinctUntilChanged, map, shareReplay } from '@umbraco-cms/backoffice/external/rxjs';
/**
 * @function createObservablePart
 * @param {Observable<T>} source - RxJS Subject to use for this Observable.
 * @param {(mappable: T) => R} mappingFunction - Method to return the part for this Observable to return.
 * @param {(previousResult: R, currentResult: R) => boolean} [memoizationFunction] - Method to Compare if the data has changed. Should return true when data is different.
 * @returns {Observable<T>}
 * @description - Creates a RxJS Observable from RxJS Subject.
 * @example <caption>Example create a Observable for part of the data Subject.</caption>
 * public readonly myPart = CreateObservablePart(this._data, (data) => data.myPart);
 */
export function createObservablePart(source, mappingFunction, memoizationFunction) {
    return source.pipe(map(mappingFunction), distinctUntilChanged(memoizationFunction || defaultMemoization), shareReplay(1));
}
