## Contador de ovejas

Definitivamente, Time2Sleep es fan de Adalab. Esta vez, basándose en unos novedosos estudios científicos de alguna famosísima universidad que dice que al contar ovejas nos aburrimos tanto que caemos dormidos, nos han encargado que hagamos un contador de ovejas digital.

Crearemos un componente cuentaovejas ( `SheepCounter` ) que mostrará un número en grande y un botón. El botón tendrá asignado un escuchador al evento `click` que aumentará el contador.
Actualizaremos el valor del contador con `setState(/_ función _/)`.

---

# Sheep counter

Time2Sleep is definitely a fan of Adalab. This time, based on some novel scientific studies from some famous university that says that counting sheep makes us so bored that we fall asleep, we have been commissioned to make a digital sheep counter.

We will create a sheep counter component ( `SheepCounter` ) that will display a large number and a button. The button will have a listener assigned to the `click` event that will increment the counter.
We will update the counter value with `setState(/_ function _/)`.
HINT: to get the time information with a date object, we can use the `getHours` , `getMinutes` and `getSeconds` methods as explained in the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) page.

NOTE: when making changes to the component once you have set the `setInterval`, reload the page completely manually. Otherwise, all the `setInterval`s you have set will continue to be executed and the page may be overloaded. We can control this problem through the code when we look at the lifecycle of React components.
