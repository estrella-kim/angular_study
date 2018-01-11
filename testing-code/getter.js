var log = ['test'];
var obj = {
    get latest () {
        if(log.length == 0) return undefined;
        return log[log.length - 1]
    }
}
console.log(obj.latest);
console.log(obj);
var nums = { a : 0};
Object.defineProperty(nums, "b", { get : function( ) { return 1;}})
console.log(nums.b)