//aN EXAMPKE for class deciorator factory sealing its constructor
//this example is returning the constructor as it is since the resturn type is void
export function sealed(name: string){
    return function (target:Function): void {
        console.log(`Sealing the constructor.${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

//aN EXAMPKE for class deciorator factory sealing its constructor
//this example is returning the mutated constructor 
export function logger<TFunction extends Function>(target: TFunction): TFunction{
    let newConstructor:Function = function(){
        console.log(`creating new instance.`);
        console.log(target);
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}

//below is an example of method and access decorators
export function writable(isWritable: boolean) {
    return  function(target: Object,
                    propertyKey: string,
                    descriptor: PropertyDescriptor){
                console.log(`Setting ${propertyKey}. `);
                descriptor.writable = isWritable;
                    }
}