## Info del usuario

Vamos a partir de un objeto con información de un usuario que tenemos en el estado de nuestro componente. Lo vamos a inicializar a este valor directamenete en el constructor.

```
{
 firstName: 'Ada',
 lastName: 'Lovelace',
 birthDate: {
 day: 10,
 month: 'diciembre',
 year: 1815
 }
 }
```

Vamos a crear un formulario donde vamos a poder modificar estos campos del estado.

NOTA: Cuidado al modificar los campos anidados dentro del objeto `birthDate` ; recuerda que para modificarlos es muy útil usar en el `setState` el operador `spread ...` para mantener el resto de datos de ese objeto. Por ejemplo:

```
this.setState(prevState => {
 return {
 birthDate: {
 ...prevState.birthDate,
 day: 8
 }
 };
 });
```

---

# User info

We are going to start from an object with information of a user that we have in the state of our component. We are going to initialise it to this value directly in the constructor.

```
{
 firstName: 'Ada',
 lastName: 'Lovelace',
 birthDate: {
 day: 10,
 month: 'diciembre',
 year: 1815
 }
 }
```

We are going to create a form where we are going to be able to modify these state fields.

NOTE: Be careful when modifying the nested fields inside the `birthDate` object; remember that to modify them it is very useful to use in the `setState` the `spread ...` operator to keep the rest of the data of that object. For example:

```
this.setState(prevState => {
 return {
 birthDate: {
 ...prevState.birthDate,
 day: 8
 }
 };
 });
```
