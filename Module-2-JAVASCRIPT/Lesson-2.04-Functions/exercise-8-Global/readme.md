Vamos a partir de uno de los ejemplos anteriores que usa una variable global, que luego se modifica desde una función.

```
// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
secretLetter = 'x';
return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"
```

En el ejemplo anterior prueba a cambiar el orden del los console.log . ¿Qué está pasando? ¿Por qué no se imprime en la consola 2 veces "x"?

---

Let's start from one of the previous examples that uses a global variable, which is then modified from a function.

In the example above try changing the order of the console.log . What is happening? Why doesn't the console print 2 times "x"?
