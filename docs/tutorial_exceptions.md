# Tutorial: Handling exceptions

## Exception types

One single base exception: `wrenbind17::Exception` (inherits `std::exception`) with the following derived exceptions:

* `wrenbind17::NotFound` - Throw when trying to find a variable or a static class inside of a Wren via `wrenbind17::VM::find(module, name)`.
* `wrenbind17::BadCast` - When passing values into Wren, for example when trying to pass in a class that has not been registered.
* `wrenbind17::RuntimeError` - When calling a Wren method via `wrenbind17::Method::operator()`.

Example of such runtime error:

```
Runtime error: Vector4 does not implement 'a=(_)'.
  at: main:7
```

## Catch C++ exception in Wren

```cpp
class MyCppClass {
public:
    ...
    void someMethod() {
        throw std::runtime_error("hello");
    }
};
```

```js
var fiber = Fiber.new { 
    var i = MyCppClass.new()
    i.someMethod() // C++ throws "hello"
}

var error = fiber.try()
System.print("Caught error: " + error) // Prints "Caught error: hello"
```

## Catch Wren exception in C++

```cpp
#include <wrenbind17/wrenbind17.hpp>
namespace wren = wrenbind17; // Alias

int main(...) {
    wren::VM vm;
    ...

    try {
        wren::Method wrenMain = vm.find("main", "Main").func("main()");
        wrenMain();
    } catch (wren::NotFound& e) {
        // Thows only if class "Main" has not been found
        std::cerr << e.what() << std::endl;
    } catch (wren::RuntimeError& e) {
        // Throw when something went wrong when executing
        // the function. For example: a variable does not
        // exist, or bad method name.
        std::cerr << e.what() << std::endl;
    }

    // If you are lazy, just do the following:
    try {
        wren::Method wrenMain = vm.find("main", "Main").func("main()");
        wrenMain();
    } catch (wren::Exception& e) {
        // catch everything
        std::cerr << e.what() << std::endl;
    }
}
```