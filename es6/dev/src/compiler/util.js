import { IS_DART, StringWrapper, isBlank, isPresent, isString, isArray } from 'angular2/src/facade/lang';
var CAMEL_CASE_REGEXP = /([A-Z])/g;
var DASH_CASE_REGEXP = /-([a-z])/g;
var SINGLE_QUOTE_ESCAPE_STRING_RE = /'|\\|\n|\r|\$/g;
var DOUBLE_QUOTE_ESCAPE_STRING_RE = /"|\\|\n|\r|\$/g;
export var MODULE_SUFFIX = IS_DART ? '.dart' : '.js';
export var CONST_VAR = IS_DART ? 'const' : 'var';
export function camelCaseToDashCase(input) {
    return StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, (m) => { return '-' + m[1].toLowerCase(); });
}
export function dashCaseToCamelCase(input) {
    return StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, (m) => { return m[1].toUpperCase(); });
}
export function escapeSingleQuoteString(input) {
    if (isBlank(input)) {
        return null;
    }
    return `'${escapeString(input, SINGLE_QUOTE_ESCAPE_STRING_RE)}'`;
}
export function escapeDoubleQuoteString(input) {
    if (isBlank(input)) {
        return null;
    }
    return `"${escapeString(input, DOUBLE_QUOTE_ESCAPE_STRING_RE)}"`;
}
function escapeString(input, re) {
    return StringWrapper.replaceAllMapped(input, re, (match) => {
        if (match[0] == '$') {
            return IS_DART ? '\\$' : '$';
        }
        else if (match[0] == '\n') {
            return '\\n';
        }
        else if (match[0] == '\r') {
            return '\\r';
        }
        else {
            return `\\${match[0]}`;
        }
    });
}
export function codeGenExportVariable(name) {
    if (IS_DART) {
        return `const ${name} = `;
    }
    else {
        return `var ${name} = exports['${name}'] = `;
    }
}
export function codeGenConstConstructorCall(name) {
    if (IS_DART) {
        return `const ${name}`;
    }
    else {
        return `new ${name}`;
    }
}
export function codeGenValueFn(params, value, fnName = '') {
    if (IS_DART) {
        return `${codeGenFnHeader(params, fnName)} => ${value}`;
    }
    else {
        return `${codeGenFnHeader(params, fnName)} { return ${value}; }`;
    }
}
export function codeGenFnHeader(params, fnName = '') {
    if (IS_DART) {
        return `${fnName}(${params.join(',')})`;
    }
    else {
        return `function ${fnName}(${params.join(',')})`;
    }
}
export function codeGenToString(expr) {
    if (IS_DART) {
        return `'\${${expr}}'`;
    }
    else {
        // JS automatically converts to string...
        return expr;
    }
}
export function splitAtColon(input, defaultValues) {
    var parts = StringWrapper.split(input.trim(), /\s*:\s*/g);
    if (parts.length > 1) {
        return parts;
    }
    else {
        return defaultValues;
    }
}
export class Statement {
    constructor(statement) {
        this.statement = statement;
    }
}
export class Expression {
    constructor(expression, isArray = false) {
        this.expression = expression;
        this.isArray = isArray;
    }
}
export function escapeValue(value) {
    if (value instanceof Expression) {
        return value.expression;
    }
    else if (isString(value)) {
        return escapeSingleQuoteString(value);
    }
    else if (isBlank(value)) {
        return 'null';
    }
    else {
        return `${value}`;
    }
}
export function codeGenArray(data) {
    return `[${data.map(escapeValue).join(',')}]`;
}
export function codeGenFlatArray(values) {
    var result = '([';
    var isFirstArrayEntry = true;
    var concatFn = IS_DART ? '.addAll' : 'concat';
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (value instanceof Expression && value.isArray) {
            result += `]).${concatFn}(${value.expression}).${concatFn}([`;
            isFirstArrayEntry = true;
        }
        else {
            if (!isFirstArrayEntry) {
                result += ',';
            }
            isFirstArrayEntry = false;
            result += escapeValue(value);
        }
    }
    result += '])';
    return result;
}
export function codeGenStringMap(keyValueArray) {
    return `{${keyValueArray.map(codeGenKeyValue).join(',')}}`;
}
function codeGenKeyValue(keyValue) {
    return `${escapeValue(keyValue[0])}:${escapeValue(keyValue[1])}`;
}
export function addAll(source, target) {
    for (var i = 0; i < source.length; i++) {
        target.push(source[i]);
    }
}
export function flattenArray(source, target) {
    if (isPresent(source)) {
        for (var i = 0; i < source.length; i++) {
            var item = source[i];
            if (isArray(item)) {
                flattenArray(item, target);
            }
            else {
                target.push(item);
            }
        }
    }
    return target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtOUZBbUpXSm0udG1wL2FuZ3VsYXIyL3NyYy9jb21waWxlci91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQ0wsT0FBTyxFQUNQLGFBQWEsRUFDYixPQUFPLEVBQ1AsU0FBUyxFQUNULFFBQVEsRUFDUixPQUFPLEVBQ1IsTUFBTSwwQkFBMEI7QUFFakMsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQUM7QUFDbkMsSUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7QUFDbkMsSUFBSSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQztBQUNyRCxJQUFJLDZCQUE2QixHQUFHLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sSUFBSSxhQUFhLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFFckQsT0FBTyxJQUFJLFNBQVMsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUVqRCxvQ0FBb0MsS0FBYTtJQUMvQyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFDeEIsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQsb0NBQW9DLEtBQWE7SUFDL0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQ3ZCLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRUQsd0NBQXdDLEtBQWE7SUFDbkQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtB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WUFDcEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSVNfREFSVCxcbiAgU3RyaW5nV3JhcHBlcixcbiAgaXNCbGFuayxcbiAgaXNQcmVzZW50LFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG52YXIgQ0FNRUxfQ0FTRV9SRUdFWFAgPSAvKFtBLVpdKS9nO1xudmFyIERBU0hfQ0FTRV9SRUdFWFAgPSAvLShbYS16XSkvZztcbnZhciBTSU5HTEVfUVVPVEVfRVNDQVBFX1NUUklOR19SRSA9IC8nfFxcXFx8XFxufFxccnxcXCQvZztcbnZhciBET1VCTEVfUVVPVEVfRVNDQVBFX1NUUklOR19SRSA9IC9cInxcXFxcfFxcbnxcXHJ8XFwkL2c7XG5cbmV4cG9ydCB2YXIgTU9EVUxFX1NVRkZJWCA9IElTX0RBUlQgPyAnLmRhcnQnIDogJy5qcyc7XG5cbmV4cG9ydCB2YXIgQ09OU1RfVkFSID0gSVNfREFSVCA/ICdjb25zdCcgOiAndmFyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaENhc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGxNYXBwZWQoaW5wdXQsIENBTUVMX0NBU0VfUkVHRVhQLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtKSA9PiB7IHJldHVybiAnLScgKyBtWzFdLnRvTG93ZXJDYXNlKCk7IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGFzaENhc2VUb0NhbWVsQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZChpbnB1dCwgREFTSF9DQVNFX1JFR0VYUCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobSkgPT4geyByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpOyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVNpbmdsZVF1b3RlU3RyaW5nKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaXNCbGFuayhpbnB1dCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gYCcke2VzY2FwZVN0cmluZyhpbnB1dCwgU0lOR0xFX1FVT1RFX0VTQ0FQRV9TVFJJTkdfUkUpfSdgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRG91YmxlUXVvdGVTdHJpbmcoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpc0JsYW5rKGlucHV0KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBgXCIke2VzY2FwZVN0cmluZyhpbnB1dCwgRE9VQkxFX1FVT1RFX0VTQ0FQRV9TVFJJTkdfUkUpfVwiYDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKGlucHV0OiBzdHJpbmcsIHJlOiBSZWdFeHApOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsTWFwcGVkKGlucHV0LCByZSwgKG1hdGNoKSA9PiB7XG4gICAgaWYgKG1hdGNoWzBdID09ICckJykge1xuICAgICAgcmV0dXJuIElTX0RBUlQgPyAnXFxcXCQnIDogJyQnO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT0gJ1xcbicpIHtcbiAgICAgIHJldHVybiAnXFxcXG4nO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT0gJ1xccicpIHtcbiAgICAgIHJldHVybiAnXFxcXHInO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYFxcXFwke21hdGNoWzBdfWA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5FeHBvcnRWYXJpYWJsZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgY29uc3QgJHtuYW1lfSA9IGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGB2YXIgJHtuYW1lfSA9IGV4cG9ydHNbJyR7bmFtZX0nXSA9IGA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5Db25zdENvbnN0cnVjdG9yQ2FsbChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgY29uc3QgJHtuYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBuZXcgJHtuYW1lfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5WYWx1ZUZuKHBhcmFtczogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcsIGZuTmFtZTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgJHtjb2RlR2VuRm5IZWFkZXIocGFyYW1zLCBmbk5hbWUpfSA9PiAke3ZhbHVlfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke2NvZGVHZW5GbkhlYWRlcihwYXJhbXMsIGZuTmFtZSl9IHsgcmV0dXJuICR7dmFsdWV9OyB9YDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZUdlbkZuSGVhZGVyKHBhcmFtczogc3RyaW5nW10sIGZuTmFtZTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgJHtmbk5hbWV9KCR7cGFyYW1zLmpvaW4oJywnKX0pYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYGZ1bmN0aW9uICR7Zm5OYW1lfSgke3BhcmFtcy5qb2luKCcsJyl9KWA7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb2RlR2VuVG9TdHJpbmcoZXhwcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKElTX0RBUlQpIHtcbiAgICByZXR1cm4gYCdcXCR7JHtleHByfX0nYDtcbiAgfSBlbHNlIHtcbiAgICAvLyBKUyBhdXRvbWF0aWNhbGx5IGNvbnZlcnRzIHRvIHN0cmluZy4uLlxuICAgIHJldHVybiBleHByO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEF0Q29sb24oaW5wdXQ6IHN0cmluZywgZGVmYXVsdFZhbHVlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIHZhciBwYXJ0cyA9IFN0cmluZ1dyYXBwZXIuc3BsaXQoaW5wdXQudHJpbSgpLCAvXFxzKjpcXHMqL2cpO1xuICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBwYXJ0cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlcztcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGVtZW50OiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGV4cHJlc3Npb246IHN0cmluZywgcHVibGljIGlzQXJyYXkgPSBmYWxzZSkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVZhbHVlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFeHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV4cHJlc3Npb247XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGVzY2FwZVNpbmdsZVF1b3RlU3RyaW5nKHZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc0JsYW5rKHZhbHVlKSkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5BcnJheShkYXRhOiBhbnlbXSk6IHN0cmluZyB7XG4gIHJldHVybiBgWyR7ZGF0YS5tYXAoZXNjYXBlVmFsdWUpLmpvaW4oJywnKX1dYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5GbGF0QXJyYXkodmFsdWVzOiBhbnlbXSk6IHN0cmluZyB7XG4gIHZhciByZXN1bHQgPSAnKFsnO1xuICB2YXIgaXNGaXJzdEFycmF5RW50cnkgPSB0cnVlO1xuICB2YXIgY29uY2F0Rm4gPSBJU19EQVJUID8gJy5hZGRBbGwnIDogJ2NvbmNhdCc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV4cHJlc3Npb24gJiYgKDxFeHByZXNzaW9uPnZhbHVlKS5pc0FycmF5KSB7XG4gICAgICByZXN1bHQgKz0gYF0pLiR7Y29uY2F0Rm59KCR7dmFsdWUuZXhwcmVzc2lvbn0pLiR7Y29uY2F0Rm59KFtgO1xuICAgICAgaXNGaXJzdEFycmF5RW50cnkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzRmlyc3RBcnJheUVudHJ5KSB7XG4gICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICB9XG4gICAgICBpc0ZpcnN0QXJyYXlFbnRyeSA9IGZhbHNlO1xuICAgICAgcmVzdWx0ICs9IGVzY2FwZVZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0ICs9ICddKSc7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlR2VuU3RyaW5nTWFwKGtleVZhbHVlQXJyYXk6IGFueVtdW10pOiBzdHJpbmcge1xuICByZXR1cm4gYHske2tleVZhbHVlQXJyYXkubWFwKGNvZGVHZW5LZXlWYWx1ZSkuam9pbignLCcpfX1gO1xufVxuXG5mdW5jdGlvbiBjb2RlR2VuS2V5VmFsdWUoa2V5VmFsdWU6IGFueVtdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2VzY2FwZVZhbHVlKGtleVZhbHVlWzBdKX06JHtlc2NhcGVWYWx1ZShrZXlWYWx1ZVsxXSl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFsbChzb3VyY2U6IGFueVtdLCB0YXJnZXQ6IGFueVtdKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgdGFyZ2V0LnB1c2goc291cmNlW2ldKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkFycmF5KHNvdXJjZTogYW55W10sIHRhcmdldDogYW55W10pOiBhbnlbXSB7XG4gIGlmIChpc1ByZXNlbnQoc291cmNlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHNvdXJjZVtpXTtcbiAgICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIGZsYXR0ZW5BcnJheShpdGVtLCB0YXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iXX0=