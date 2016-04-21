import { Provider, NgZone, APP_INITIALIZER } from 'angular2/core';
import { PlatformLocation } from 'angular2/platform/common';
import { WebWorkerPlatformLocation } from './platform_location';
import { ROUTER_PROVIDERS_COMMON } from 'angular2/src/router/router_providers_common';
export var WORKER_APP_ROUTER = [
    ROUTER_PROVIDERS_COMMON,
    new Provider(PlatformLocation, { useClass: WebWorkerPlatformLocation }),
    new Provider(APP_INITIALIZER, {
        useFactory: (platformLocation, zone) => () => initRouter(platformLocation, zone),
        multi: true,
        deps: [PlatformLocation, NgZone]
    })
];
function initRouter(platformLocation, zone) {
    return zone.run(() => { return platformLocation.init(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtOUZBbUpXSm0udG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFpQixRQUFRLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWU7T0FDeEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBCQUEwQjtPQUNsRCxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCO09BQ3RELEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkM7QUFFbkYsT0FBTyxJQUFJLGlCQUFpQixHQUFHO0lBQzdCLHVCQUF1QjtJQUN2QixJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSx5QkFBeUIsRUFBQyxDQUFDO0lBQ3JFLElBQUksUUFBUSxDQUFDLGVBQWUsRUFDZjtRQUNFLFVBQVUsRUFBRSxDQUFDLGdCQUEyQyxFQUFFLElBQVksS0FBSyxNQUMzRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO1FBQ2xELEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDO0tBQ2pDLENBQUM7Q0FDaEIsQ0FBQztBQUVGLG9CQUFvQixnQkFBMkMsRUFBRSxJQUFZO0lBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwbGljYXRpb25SZWYsIFByb3ZpZGVyLCBOZ1pvbmUsIEFQUF9JTklUSUFMSVpFUn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbic7XG5pbXBvcnQge1dlYldvcmtlclBsYXRmb3JtTG9jYXRpb259IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTX0NPTU1PTn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzX2NvbW1vbic7XG5cbmV4cG9ydCB2YXIgV09SS0VSX0FQUF9ST1VURVIgPSBbXG4gIFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OLFxuICBuZXcgUHJvdmlkZXIoUGxhdGZvcm1Mb2NhdGlvbiwge3VzZUNsYXNzOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9ufSksXG4gIG5ldyBQcm92aWRlcihBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChwbGF0Zm9ybUxvY2F0aW9uOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLCB6b25lOiBOZ1pvbmUpID0+ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0Um91dGVyKHBsYXRmb3JtTG9jYXRpb24sIHpvbmUpLFxuICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgZGVwczogW1BsYXRmb3JtTG9jYXRpb24sIE5nWm9uZV1cbiAgICAgICAgICAgICAgIH0pXG5dO1xuXG5mdW5jdGlvbiBpbml0Um91dGVyKHBsYXRmb3JtTG9jYXRpb246IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb24sIHpvbmU6IE5nWm9uZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gem9uZS5ydW4oKCkgPT4geyByZXR1cm4gcGxhdGZvcm1Mb2NhdGlvbi5pbml0KCk7IH0pO1xufVxuIl19