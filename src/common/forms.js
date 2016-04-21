'use strict';"use strict";
/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link ControlGroup} that
 * consists of
 * {@link Control} objects, and mapping them onto the DOM. {@link Control} objects can then be used
 * to read information
 * from the form DOM elements.
 *
 * This module is not included in the `angular2` module; you must import the forms module
 * explicitly.
 *
 */
var model_1 = require('./forms/model');
exports.AbstractControl = model_1.AbstractControl;
exports.Control = model_1.Control;
exports.ControlGroup = model_1.ControlGroup;
exports.ControlArray = model_1.ControlArray;
var abstract_control_directive_1 = require('./forms/directives/abstract_control_directive');
exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
var control_container_1 = require('./forms/directives/control_container');
exports.ControlContainer = control_container_1.ControlContainer;
var ng_control_name_1 = require('./forms/directives/ng_control_name');
exports.NgControlName = ng_control_name_1.NgControlName;
var ng_form_control_1 = require('./forms/directives/ng_form_control');
exports.NgFormControl = ng_form_control_1.NgFormControl;
var ng_model_1 = require('./forms/directives/ng_model');
exports.NgModel = ng_model_1.NgModel;
var ng_control_1 = require('./forms/directives/ng_control');
exports.NgControl = ng_control_1.NgControl;
var ng_control_group_1 = require('./forms/directives/ng_control_group');
exports.NgControlGroup = ng_control_group_1.NgControlGroup;
var ng_form_model_1 = require('./forms/directives/ng_form_model');
exports.NgFormModel = ng_form_model_1.NgFormModel;
var ng_form_1 = require('./forms/directives/ng_form');
exports.NgForm = ng_form_1.NgForm;
var control_value_accessor_1 = require('./forms/directives/control_value_accessor');
exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
var default_value_accessor_1 = require('./forms/directives/default_value_accessor');
exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
var ng_control_status_1 = require('./forms/directives/ng_control_status');
exports.NgControlStatus = ng_control_status_1.NgControlStatus;
var checkbox_value_accessor_1 = require('./forms/directives/checkbox_value_accessor');
exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
var select_control_value_accessor_1 = require('./forms/directives/select_control_value_accessor');
exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
var directives_1 = require('./forms/directives');
exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
exports.RadioButtonState = directives_1.RadioButtonState;
var validators_1 = require('./forms/validators');
exports.NG_VALIDATORS = validators_1.NG_VALIDATORS;
exports.NG_ASYNC_VALIDATORS = validators_1.NG_ASYNC_VALIDATORS;
exports.Validators = validators_1.Validators;
var validators_2 = require('./forms/directives/validators');
exports.RequiredValidator = validators_2.RequiredValidator;
exports.MinLengthValidator = validators_2.MinLengthValidator;
exports.MaxLengthValidator = validators_2.MaxLengthValidator;
exports.PatternValidator = validators_2.PatternValidator;
var form_builder_1 = require('./forms/form_builder');
exports.FormBuilder = form_builder_1.FormBuilder;
var form_builder_2 = require('./forms/form_builder');
var radio_control_value_accessor_1 = require('./forms/directives/radio_control_value_accessor');
var lang_1 = require('angular2/src/facade/lang');
/**
 * Shorthand set of providers used for building Angular forms.
 *
 * ### Example
 *
 * ```typescript
 * bootstrap(MyApp, [FORM_PROVIDERS]);
 * ```
 */
exports.FORM_PROVIDERS = lang_1.CONST_EXPR([form_builder_2.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry]);
/**
 * See {@link FORM_PROVIDERS} instead.
 *
 * @deprecated
 */
exports.FORM_BINDINGS = exports.FORM_PROVIDERS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXNkaExKN2FVLnRtcC9hbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxzQkFBbUUsZUFBZSxDQUFDO0FBQTNFLGtEQUFlO0FBQUUsa0NBQU87QUFBRSw0Q0FBWTtBQUFFLDRDQUFtQztBQUVuRiwyQ0FBdUMsK0NBQStDLENBQUM7QUFBL0UseUZBQStFO0FBRXZGLGtDQUErQixzQ0FBc0MsQ0FBQztBQUE5RCxnRUFBOEQ7QUFDdEUsZ0NBQTRCLG9DQUFvQyxDQUFDO0FBQXpELHdEQUF5RDtBQUNqRSxnQ0FBNEIsb0NBQW9DLENBQUM7QUFBekQsd0RBQXlEO0FBQ2pFLHlCQUFzQiw2QkFBNkIsQ0FBQztBQUE1QyxxQ0FBNEM7QUFDcEQsMkJBQXdCLCtCQUErQixDQUFDO0FBQWhELDJDQUFnRDtBQUN4RCxpQ0FBNkIscUNBQXFDLENBQUM7QUFBM0QsMkRBQTJEO0FBQ25FLDhCQUEwQixrQ0FBa0MsQ0FBQztBQUFyRCxrREFBcUQ7QUFDN0Qsd0JBQXFCLDRCQUE0QixDQUFDO0FBQTFDLGtDQUEwQztBQUNsRCx1Q0FBc0QsMkNBQTJDLENBQUM7QUFBcEUsdUVBQW9FO0FBQ2xHLHVDQUFtQywyQ0FBMkMsQ0FBQztBQUF2RSw2RUFBdUU7QUFDL0Usa0NBQThCLHNDQUFzQyxDQUFDO0FBQTdELDhEQUE2RDtBQUNyRSx3Q0FBMkMsNENBQTRDLENBQUM7QUFBaEYsOEZBQWdGO0FBQ3hGLDhDQUdPLGtEQUFrRCxDQUFDO0FBRnhELHdFQUFjO0FBQ2QsZ0dBQ3dEO0FBQzFELDJCQUFnRCxvQkFBb0IsQ0FBQztBQUE3RCx1REFBZTtBQUFFLHlEQUE0QztBQUNyRSwyQkFBNkQsb0JBQW9CLENBQUM7QUFBMUUsbURBQWE7QUFBRSwrREFBbUI7QUFBRSw2Q0FBc0M7QUFDbEYsMkJBTU8sK0JBQStCLENBQUM7QUFMckMsMkRBQWlCO0FBQ2pCLDZEQUFrQjtBQUNsQiw2REFBa0I7QUFDbEIseURBRXFDO0FBQ3ZDLDZCQUEwQixzQkFBc0IsQ0FBQztBQUF6QyxpREFBeUM7QUFDakQsNkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFDakQsNkNBQW1DLGlEQUFpRCxDQUFDLENBQUE7QUFDckYscUJBQStCLDBCQUEwQixDQUFDLENBQUE7QUFFMUQ7Ozs7Ozs7O0dBUUc7QUFDVSxzQkFBYyxHQUFXLGlCQUFVLENBQUMsQ0FBQywwQkFBVyxFQUFFLG1EQUFvQixDQUFDLENBQUMsQ0FBQztBQUV0Rjs7OztHQUlHO0FBQ1UscUJBQWEsR0FBRyxzQkFBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbW9kdWxlIGlzIHVzZWQgZm9yIGhhbmRsaW5nIHVzZXIgaW5wdXQsIGJ5IGRlZmluaW5nIGFuZCBidWlsZGluZyBhIHtAbGluayBDb250cm9sR3JvdXB9IHRoYXRcbiAqIGNvbnNpc3RzIG9mXG4gKiB7QGxpbmsgQ29udHJvbH0gb2JqZWN0cywgYW5kIG1hcHBpbmcgdGhlbSBvbnRvIHRoZSBET00uIHtAbGluayBDb250cm9sfSBvYmplY3RzIGNhbiB0aGVuIGJlIHVzZWRcbiAqIHRvIHJlYWQgaW5mb3JtYXRpb25cbiAqIGZyb20gdGhlIGZvcm0gRE9NIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYGFuZ3VsYXIyYCBtb2R1bGU7IHlvdSBtdXN0IGltcG9ydCB0aGUgZm9ybXMgbW9kdWxlXG4gKiBleHBsaWNpdGx5LlxuICpcbiAqL1xuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2wsIENvbnRyb2wsIENvbnRyb2xHcm91cCwgQ29udHJvbEFycmF5fSBmcm9tICcuL2Zvcm1zL21vZGVsJztcblxuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm19IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9mb3JtX2ludGVyZmFjZSc7XG5leHBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9jb250cm9sX2NvbnRhaW5lcic7XG5leHBvcnQge05nQ29udHJvbE5hbWV9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9uZ19jb250cm9sX25hbWUnO1xuZXhwb3J0IHtOZ0Zvcm1Db250cm9sfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfZm9ybV9jb250cm9sJztcbmV4cG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX21vZGVsJztcbmV4cG9ydCB7TmdDb250cm9sfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfY29udHJvbCc7XG5leHBvcnQge05nQ29udHJvbEdyb3VwfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9ncm91cCc7XG5leHBvcnQge05nRm9ybU1vZGVsfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfZm9ybV9tb2RlbCc7XG5leHBvcnQge05nRm9ybX0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuZXhwb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7TmdDb250cm9sU3RhdHVzfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMnO1xuZXhwb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtcbiAgTmdTZWxlY3RPcHRpb24sXG4gIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yXG59IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0ZPUk1fRElSRUNUSVZFUywgUmFkaW9CdXR0b25TdGF0ZX0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzJztcbmV4cG9ydCB7TkdfVkFMSURBVE9SUywgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdG9yc30gZnJvbSAnLi9mb3Jtcy92YWxpZGF0b3JzJztcbmV4cG9ydCB7XG4gIFJlcXVpcmVkVmFsaWRhdG9yLFxuICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gIE1heExlbmd0aFZhbGlkYXRvcixcbiAgUGF0dGVyblZhbGlkYXRvcixcbiAgVmFsaWRhdG9yXG59IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcbmV4cG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJy4vZm9ybXMvZm9ybV9idWlsZGVyJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJy4vZm9ybXMvZm9ybV9idWlsZGVyJztcbmltcG9ydCB7UmFkaW9Db250cm9sUmVnaXN0cnl9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7VHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuLyoqXG4gKiBTaG9ydGhhbmQgc2V0IG9mIHByb3ZpZGVycyB1c2VkIGZvciBidWlsZGluZyBBbmd1bGFyIGZvcm1zLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogYm9vdHN0cmFwKE15QXBwLCBbRk9STV9QUk9WSURFUlNdKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgRk9STV9QUk9WSURFUlM6IFR5cGVbXSA9IENPTlNUX0VYUFIoW0Zvcm1CdWlsZGVyLCBSYWRpb0NvbnRyb2xSZWdpc3RyeV0pO1xuXG4vKipcbiAqIFNlZSB7QGxpbmsgRk9STV9QUk9WSURFUlN9IGluc3RlYWQuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IEZPUk1fQklORElOR1MgPSBGT1JNX1BST1ZJREVSUztcbiJdfQ==