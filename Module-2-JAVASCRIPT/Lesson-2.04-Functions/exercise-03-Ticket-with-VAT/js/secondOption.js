
  function iva(a) {
    const ivaResult = a * 0.21;
    const totalPrice = a + ivaResult;
    console.log(
      "Precio sin IVA: " +
        a +
        "€, IVA: " +
        ivaResult +
        "€ y Total: " +
        totalPrice +
        "€."
    );
  }  
  let price = iva(10);