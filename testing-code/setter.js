var o = {
    set current (str) {
        this.log[this.log.length] = str;
    },
    log : []
}
console.log(o);
o.current = "test";
console.log(o);

var expr = "foo";

var obj = {
    baz : "bar",
    set expr (v) {
        this.baz = v;
    }
}
console.log(obj.baz);
obj.expr = "baz";
console.log(obj.baz);
