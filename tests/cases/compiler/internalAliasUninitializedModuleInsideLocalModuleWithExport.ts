//@module: commonjs
// @declaration: true
export module a {
    export module b {
        export interface I {
            foo();
        }
    }
}

export module c {
    export import b = a.b;
    export var x: b.I;
    x.foo();
}