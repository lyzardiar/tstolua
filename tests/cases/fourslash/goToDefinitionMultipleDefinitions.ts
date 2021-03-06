/// <reference path='fourslash.ts' />

// @Filename: a.ts
/////*interfaceDefintion1*/interface IFoo {
////    instance1: number;
////}

// @Filename: b.ts
/////*interfaceDefintion2*/interface IFoo {
////    instance2: number;
////}
////
/////*interfaceDefintion3*/interface IFoo {
////    instance3: number;
////}
////
////var ifoo: IFo/*interfaceReference*/o;

goTo.marker('interfaceReference');
goTo.definition(0);
verify.caretAtMarker('interfaceDefintion1');

goTo.marker('interfaceReference');
goTo.definition(1);
verify.caretAtMarker('interfaceDefintion2');

goTo.marker('interfaceReference');
goTo.definition(2);
verify.caretAtMarker('interfaceDefintion3');


// @Filename: c.ts
/////*moduleDefintion1*/module Module {
////    export class c1 { }
////}

// @Filename: d.ts
/////*moduleDefintion2*/module Module {
////    export class c2 { }
////}

// @Filename: e.ts
////Modul/*moduleReference*/e;

goTo.marker('moduleReference');
goTo.definition(0);
verify.caretAtMarker('moduleDefintion1');

goTo.marker('moduleReference');
goTo.definition(1);
verify.caretAtMarker('moduleDefintion2');
