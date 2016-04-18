'use strict';"use strict";
function noNg() {
    throw new Error('AngularJS v1.x is not loaded!');
}
var angular = {
    bootstrap: noNg,
    module: noNg,
    element: noNg,
    version: noNg,
    resumeBootstrap: noNg,
    getTestability: noNg
};
try {
    if (window.hasOwnProperty('angular')) {
        angular = window.angular;
    }
}
catch (e) {
}
exports.bootstrap = angular.bootstrap;
exports.module = angular.module;
exports.element = angular.element;
exports.version = angular.version;
exports.resumeBootstrap = angular.resumeBootstrap;
exports.getTestability = angular.getTestability;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgta0p5TFdnZ0YudG1wL2FuZ3VsYXIyL3NyYy91cGdyYWRlL2FuZ3VsYXJfanMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQXFIQTtJQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQsSUFBSSxPQUFPLEdBT0U7SUFDUCxTQUFTLEVBQUUsSUFBSTtJQUNmLE1BQU0sRUFBRSxJQUFJO0lBQ1osT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLENBQUM7QUFHTixJQUFJLENBQUM7SUFDSCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQVMsTUFBTyxDQUFDLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0FBQ0gsQ0FBRTtBQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFYixDQUFDO0FBRVUsaUJBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQzlCLGNBQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ3hCLGVBQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzFCLGVBQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzFCLHVCQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUMxQyxzQkFBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElNb2R1bGUge1xuICBjb25maWcoZm46IGFueSk6IElNb2R1bGU7XG4gIGRpcmVjdGl2ZShzZWxlY3Rvcjogc3RyaW5nLCBmYWN0b3J5OiBhbnkpOiBJTW9kdWxlO1xuICBjb21wb25lbnQoc2VsZWN0b3I6IHN0cmluZywgY29tcG9uZW50OiBJQ29tcG9uZW50KTogSU1vZHVsZTtcbiAgY29udHJvbGxlcihuYW1lOiBzdHJpbmcsIHR5cGU6IGFueSk6IElNb2R1bGU7XG4gIGZhY3Rvcnkoa2V5OiBzdHJpbmcsIGZhY3RvcnlGbjogYW55KTogSU1vZHVsZTtcbiAgdmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBJTW9kdWxlO1xuICBydW4oYTogYW55KTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBpbGVTZXJ2aWNlIHtcbiAgKGVsZW1lbnQ6IEVsZW1lbnQgfCBOb2RlTGlzdCB8IHN0cmluZywgdHJhbnNjbHVkZT86IEZ1bmN0aW9uKTogSUxpbmtGbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtGbiB7XG4gIChzY29wZTogSVNjb3BlLCBjbG9uZUF0dGFjaEZuPzogRnVuY3Rpb24sIG9wdGlvbnM/OiBJTGlua0ZuT3B0aW9ucyk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElMaW5rRm5PcHRpb25zIHtcbiAgcGFyZW50Qm91bmRUcmFuc2NsdWRlRm4/OiBGdW5jdGlvbjtcbiAgdHJhbnNjbHVkZUNvbnRyb2xsZXJzPzoge1trZXk6IHN0cmluZ106IGFueX07XG4gIGZ1dHVyZVBhcmVudEVsZW1lbnQ/OiBOb2RlO1xufVxuZXhwb3J0IGludGVyZmFjZSBJUm9vdFNjb3BlU2VydmljZSB7XG4gICRuZXcoaXNvbGF0ZT86IGJvb2xlYW4pOiBJU2NvcGU7XG4gICRpZDogc3RyaW5nO1xuICAkd2F0Y2goZXhwcjogYW55LCBmbj86IChhMT86IGFueSwgYTI/OiBhbnkpID0+IHZvaWQpOiBGdW5jdGlvbjtcbiAgJGFwcGx5KCk6IGFueTtcbiAgJGFwcGx5KGV4cDogc3RyaW5nKTogYW55O1xuICAkYXBwbHkoZXhwOiBGdW5jdGlvbik6IGFueTtcbiAgJCRjaGlsZFRhaWw6IElTY29wZTtcbiAgJCRjaGlsZEhlYWQ6IElTY29wZTtcbiAgJCRuZXh0U2libGluZzogSVNjb3BlO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2NvcGUgZXh0ZW5kcyBJUm9vdFNjb3BlU2VydmljZSB7fVxuZXhwb3J0IGludGVyZmFjZSBJQW5ndWxhckJvb3RzdHJhcENvbmZpZyB7fVxuZXhwb3J0IGludGVyZmFjZSBJRGlyZWN0aXZlIHtcbiAgY29tcGlsZT86IElEaXJlY3RpdmVDb21waWxlRm47XG4gIGNvbnRyb2xsZXI/OiBhbnk7XG4gIGNvbnRyb2xsZXJBcz86IHN0cmluZztcbiAgYmluZFRvQ29udHJvbGxlcj86IGJvb2xlYW4gfCBPYmplY3Q7XG4gIGxpbms/OiBJRGlyZWN0aXZlTGlua0ZuIHwgSURpcmVjdGl2ZVByZVBvc3Q7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHByaW9yaXR5PzogbnVtYmVyO1xuICByZXBsYWNlPzogYm9vbGVhbjtcbiAgcmVxdWlyZT86IGFueTtcbiAgcmVzdHJpY3Q/OiBzdHJpbmc7XG4gIHNjb3BlPzogYW55O1xuICB0ZW1wbGF0ZT86IGFueTtcbiAgdGVtcGxhdGVVcmw/OiBhbnk7XG4gIHRlcm1pbmFsPzogYm9vbGVhbjtcbiAgdHJhbnNjbHVkZT86IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSURpcmVjdGl2ZUNvbXBpbGVGbiB7XG4gICh0ZW1wbGF0ZUVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksIHRlbXBsYXRlQXR0cmlidXRlczogSUF0dHJpYnV0ZXMsXG4gICB0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKTogSURpcmVjdGl2ZVByZVBvc3Q7XG59XG5leHBvcnQgaW50ZXJmYWNlIElEaXJlY3RpdmVQcmVQb3N0IHtcbiAgcHJlPzogSURpcmVjdGl2ZUxpbmtGbjtcbiAgcG9zdD86IElEaXJlY3RpdmVMaW5rRm47XG59XG5leHBvcnQgaW50ZXJmYWNlIElEaXJlY3RpdmVMaW5rRm4ge1xuICAoc2NvcGU6IElTY29wZSwgaW5zdGFuY2VFbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCBpbnN0YW5jZUF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxuICAgY29udHJvbGxlcjogYW55LCB0cmFuc2NsdWRlOiBJVHJhbnNjbHVkZUZ1bmN0aW9uKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XG4gIGJpbmRpbmdzPzogT2JqZWN0O1xuICBjb250cm9sbGVyPzogYW55O1xuICBjb250cm9sbGVyQXM/OiBzdHJpbmc7XG4gIHJlcXVpcmU/OiBhbnk7XG4gIHRlbXBsYXRlPzogYW55O1xuICB0ZW1wbGF0ZVVybD86IGFueTtcbiAgdHJhbnNjbHVkZT86IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUF0dHJpYnV0ZXMgeyAkb2JzZXJ2ZShhdHRyOiBzdHJpbmcsIGZuOiAodjogc3RyaW5nKSA9PiB2b2lkKTogdm9pZDsgfVxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNjbHVkZUZ1bmN0aW9uIHtcbiAgLy8gSWYgdGhlIHNjb3BlIGlzIHByb3ZpZGVkLCB0aGVuIHRoZSBjbG9uZUF0dGFjaEZuIG11c3QgYmUgYXMgd2VsbC5cbiAgKHNjb3BlOiBJU2NvcGUsIGNsb25lQXR0YWNoRm46IElDbG9uZUF0dGFjaEZ1bmN0aW9uKTogSUF1Z21lbnRlZEpRdWVyeTtcbiAgLy8gSWYgb25lIGFyZ3VtZW50IGlzIHByb3ZpZGVkLCB0aGVuIGl0J3MgYXNzdW1lZCB0byBiZSB0aGUgY2xvbmVBdHRhY2hGbi5cbiAgKGNsb25lQXR0YWNoRm4/OiBJQ2xvbmVBdHRhY2hGdW5jdGlvbik6IElBdWdtZW50ZWRKUXVlcnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDbG9uZUF0dGFjaEZ1bmN0aW9uIHtcbiAgLy8gTGV0J3MgaGludCBidXQgbm90IGZvcmNlIGNsb25lQXR0YWNoRm4ncyBzaWduYXR1cmVcbiAgKGNsb25lZEVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5LCBzY29wZT86IElTY29wZSk6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUF1Z21lbnRlZEpRdWVyeSB7XG4gIGJpbmQobmFtZTogc3RyaW5nLCBmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XG4gIGRhdGEobmFtZTogc3RyaW5nLCB2YWx1ZT86IGFueSk6IGFueTtcbiAgaW5oZXJpdGVkRGF0YShuYW1lOiBzdHJpbmcsIHZhbHVlPzogYW55KTogYW55O1xuICBjb250ZW50cygpOiBJQXVnbWVudGVkSlF1ZXJ5O1xuICBwYXJlbnQoKTogSUF1Z21lbnRlZEpRdWVyeTtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIFtpbmRleDogbnVtYmVyXTogTm9kZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlU2VydmljZSB7IChleHByZXNzaW9uOiBzdHJpbmcpOiBJQ29tcGlsZWRFeHByZXNzaW9uOyB9XG5leHBvcnQgaW50ZXJmYWNlIElDb21waWxlZEV4cHJlc3Npb24geyBhc3NpZ24oY29udGV4dDogYW55LCB2YWx1ZTogYW55KTogYW55OyB9XG5leHBvcnQgaW50ZXJmYWNlIElIdHRwQmFja2VuZFNlcnZpY2Uge1xuICAobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBwb3N0PzogYW55LCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBoZWFkZXJzPzogYW55LCB0aW1lb3V0PzogbnVtYmVyLFxuICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbik6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZU9iamVjdCB7XG4gIHB1dDxUPihrZXk6IHN0cmluZywgdmFsdWU/OiBUKTogVDtcbiAgZ2V0KGtleTogc3RyaW5nKTogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVDYWNoZVNlcnZpY2UgZXh0ZW5kcyBJQ2FjaGVPYmplY3Qge31cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRyb2xsZXJTZXJ2aWNlIHtcbiAgKGNvbnRyb2xsZXJDb25zdHJ1Y3RvcjogRnVuY3Rpb24sIGxvY2Fscz86IGFueSwgbGF0ZXI/OiBhbnksIGlkZW50PzogYW55KTogYW55O1xuICAoY29udHJvbGxlck5hbWU6IHN0cmluZywgbG9jYWxzPzogYW55KTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbmplY3RvclNlcnZpY2UgeyBnZXQoa2V5OiBzdHJpbmcpOiBhbnk7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVzdGFiaWxpdHlTZXJ2aWNlIHtcbiAgZmluZEJpbmRpbmdzKGVsZW1lbnQ6IEVsZW1lbnQsIGV4cHJlc3Npb246IHN0cmluZywgb3B0X2V4YWN0TWF0Y2g/OiBib29sZWFuKTogRWxlbWVudFtdO1xuICBmaW5kTW9kZWxzKGVsZW1lbnQ6IEVsZW1lbnQsIGV4cHJlc3Npb246IHN0cmluZywgb3B0X2V4YWN0TWF0Y2g/OiBib29sZWFuKTogRWxlbWVudFtdO1xuICBnZXRMb2NhdGlvbigpOiBzdHJpbmc7XG4gIHNldExvY2F0aW9uKHVybDogc3RyaW5nKTogdm9pZDtcbiAgd2hlblN0YWJsZShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBub05nKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJKUyB2MS54IGlzIG5vdCBsb2FkZWQhJyk7XG59XG5cbnZhciBhbmd1bGFyOlxuICAgIHtcbiAgICAgIGJvb3RzdHJhcDogKGU6IEVsZW1lbnQsIG1vZHVsZXM6IHN0cmluZ1tdLCBjb25maWc6IElBbmd1bGFyQm9vdHN0cmFwQ29uZmlnKSA9PiB2b2lkLFxuICAgICAgbW9kdWxlOiAocHJlZml4OiBzdHJpbmcsIGRlcGVuZGVuY2llcz86IHN0cmluZ1tdKSA9PiBJTW9kdWxlLFxuICAgICAgZWxlbWVudDogKGU6IEVsZW1lbnQpID0+IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICB2ZXJzaW9uOiB7bWFqb3I6IG51bWJlcn0sIHJlc3VtZUJvb3RzdHJhcD86ICgpID0+IHZvaWQsXG4gICAgICBnZXRUZXN0YWJpbGl0eTogKGU6IEVsZW1lbnQpID0+IElUZXN0YWJpbGl0eVNlcnZpY2VcbiAgICB9ID0gPGFueT57XG4gICAgICBib290c3RyYXA6IG5vTmcsXG4gICAgICBtb2R1bGU6IG5vTmcsXG4gICAgICBlbGVtZW50OiBub05nLFxuICAgICAgdmVyc2lvbjogbm9OZyxcbiAgICAgIHJlc3VtZUJvb3RzdHJhcDogbm9OZyxcbiAgICAgIGdldFRlc3RhYmlsaXR5OiBub05nXG4gICAgfTtcblxuXG50cnkge1xuICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KCdhbmd1bGFyJykpIHtcbiAgICBhbmd1bGFyID0gKDxhbnk+d2luZG93KS5hbmd1bGFyO1xuICB9XG59IGNhdGNoIChlKSB7XG4gIC8vIGlnbm9yZSBpbiBDSlMgbW9kZS5cbn1cblxuZXhwb3J0IHZhciBib290c3RyYXAgPSBhbmd1bGFyLmJvb3RzdHJhcDtcbmV4cG9ydCB2YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGU7XG5leHBvcnQgdmFyIGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQ7XG5leHBvcnQgdmFyIHZlcnNpb24gPSBhbmd1bGFyLnZlcnNpb247XG5leHBvcnQgdmFyIHJlc3VtZUJvb3RzdHJhcCA9IGFuZ3VsYXIucmVzdW1lQm9vdHN0cmFwO1xuZXhwb3J0IHZhciBnZXRUZXN0YWJpbGl0eSA9IGFuZ3VsYXIuZ2V0VGVzdGFiaWxpdHk7XG4iXX0=