const vehiculos = {
    moto :{
        impuesto: '$0.30'
    },

    mototaxi:{
        impuesto: '$0.50'
    }, 

    microbus: {
        impuesto: '$1.25'
    },

    autobus:{
        impuesto: '$1.50'
    },

    vehiculoparticular: {
        impuesto: '$0.75'
    },

    otros:{
        impuesto: '$3.00'
    }
};

const categoria = document.getElementById("transporte");


categoria.addEventListener("change",()=>{

 var result = vehiculos[categoria.value].impuesto;
    
    alert(`El medio de transporte que elegiste tiene un impuesto de ${result}`)
})





















