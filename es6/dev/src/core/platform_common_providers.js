import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { Console } from 'angular2/src/core/console';
import { Reflector, reflector } from './reflection/reflection';
import { ReflectorReader } from './reflection/reflector_reader';
import { TestabilityRegistry } from 'angular2/src/core/testability/testability';
function _reflector() {
    return reflector;
}
/**
 * A default set of providers which should be included in any Angular platform.
 */
export const PLATFORM_COMMON_PROVIDERS = CONST_EXPR([
    new Provider(Reflector, { useFactory: _reflector, deps: [] }),
    new Provider(ReflectorReader, { useExisting: Reflector }),
    TestabilityRegistry,
    Console
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtT1dLQ0s5eUUudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL3BsYXRmb3JtX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBOEMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQ3pGLEVBQVUsUUFBUSxFQUF3QixNQUFNLHNCQUFzQjtPQUN0RSxFQUFDLE9BQU8sRUFBQyxNQUFNLDJCQUEyQjtPQUMxQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSx5QkFBeUI7T0FDckQsRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0I7T0FDdEQsRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDJDQUEyQztBQUU3RTtJQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHlCQUF5QixHQUFtQyxVQUFVLENBQUM7SUFDbEYsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDM0QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxDQUFDO0lBQ3ZELG1CQUFtQjtJQUNuQixPQUFPO0NBQ1IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBpc0JsYW5rLCBpc1ByZXNlbnQsIGFzc2VydGlvbnNFbmFibGVkLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtwcm92aWRlLCBQcm92aWRlciwgSW5qZWN0b3IsIE9wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge0NvbnNvbGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NvbnNvbGUnO1xuaW1wb3J0IHtSZWZsZWN0b3IsIHJlZmxlY3Rvcn0gZnJvbSAnLi9yZWZsZWN0aW9uL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtSZWZsZWN0b3JSZWFkZXJ9IGZyb20gJy4vcmVmbGVjdGlvbi9yZWZsZWN0b3JfcmVhZGVyJztcbmltcG9ydCB7VGVzdGFiaWxpdHlSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvdGVzdGFiaWxpdHkvdGVzdGFiaWxpdHknO1xuXG5mdW5jdGlvbiBfcmVmbGVjdG9yKCk6IFJlZmxlY3RvciB7XG4gIHJldHVybiByZWZsZWN0b3I7XG59XG5cbi8qKlxuICogQSBkZWZhdWx0IHNldCBvZiBwcm92aWRlcnMgd2hpY2ggc2hvdWxkIGJlIGluY2x1ZGVkIGluIGFueSBBbmd1bGFyIHBsYXRmb3JtLlxuICovXG5leHBvcnQgY29uc3QgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUzogQXJyYXk8VHlwZSB8IFByb3ZpZGVyIHwgYW55W10+ID0gQ09OU1RfRVhQUihbXG4gIG5ldyBQcm92aWRlcihSZWZsZWN0b3IsIHt1c2VGYWN0b3J5OiBfcmVmbGVjdG9yLCBkZXBzOiBbXX0pLFxuICBuZXcgUHJvdmlkZXIoUmVmbGVjdG9yUmVhZGVyLCB7dXNlRXhpc3Rpbmc6IFJlZmxlY3Rvcn0pLFxuICBUZXN0YWJpbGl0eVJlZ2lzdHJ5LFxuICBDb25zb2xlXG5dKTsiXX0=