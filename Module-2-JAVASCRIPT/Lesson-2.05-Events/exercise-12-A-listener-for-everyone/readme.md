## Un listener para todos

Vamos a refactorizar el EJERCICIO 9 para mejorarlo. Tenemos que quitar ese mogollón de listeners en los ``li``, reemplazarlos por uno solo en la etiqueta madre ``ul`` y trabajar con ``event.target``.

Nota: esta técnica de poner un listener en la madre y acceder a la hija sobre la que se ha hecho click se llama **event delegation**.

---

## A listener for everyone

Let's refactor EXERCISE 9 to improve it. We need to remove that bunch of listeners in the ``li``, replace them with just one in the parent tag ``ul`` and work with ``event.target``.

Note: this technique of putting a listener in the parent and accessing the clicked child is called **event delegation**.
