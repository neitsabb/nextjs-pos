/**
 * UseCase interface
 *
 * @export
 * @interface IUseCase
 * @template A
 * @template R
 */
export interface IUseCase<A, R> {
  execute(...args: A[]): R;
}
