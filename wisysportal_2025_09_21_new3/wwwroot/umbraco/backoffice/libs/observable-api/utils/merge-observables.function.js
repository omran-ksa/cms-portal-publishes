import { defaultMemoization } from './default-memoization.function.js';
import { combineLatest } from '@umbraco-cms/backoffice/external/rxjs';
import { distinctUntilChanged, map, shareReplay } from '@umbraco-cms/backoffice/external/rxjs';
/**
 * @function mergeObservables
 * @param {Array<Observable<T>>} sources - an Array of Observables to merge for this Observable.
 * @param {(mappable: Array<T>) => R} mergeFunction - Merge method to return the part for this Observable to return.
 * @param {(previousResult: R, currentResult: R) => boolean} [memoizationFunction] - Method to Compare if the merged data has changed. Should return true when data is different.
 * @returns {Observable<R>} - Returns a new Observable that combines the Observables into a single Observable.
 * @description - Creates a Observable from two or more Observables.
 * @example
 *
 * const mergedObservable = mergeObservables(
 * 	[observable1, observable2],
 * 	([value1, value2]) => value1 + value2,
 * );
 *
 * if observable1 has the value of 10 and observable2 has the value of 4, the mergedObservable will return the value of 14.
 * if one of them changes the mergedObservable will return the new value.
 */
export function mergeObservables(sources, mergeFunction, memoizationFunction) {
    return combineLatest(sources).pipe(map(mergeFunction), distinctUntilChanged(memoizationFunction ?? defaultMemoization), shareReplay(1));
}
