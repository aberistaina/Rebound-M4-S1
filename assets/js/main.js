
let botonCalcular = document.getElementById("botonCalcular")
let interesTotal;
let cuotaTotal;

const calculoInteres = () => {
    let monto = Number(document.getElementById("monto").value)
    let interes = Number(document.getElementById("interes").value)
    let cuotas = Number(document.getElementById("cuotas").value)
    
    if( monto != "" && monto > 0 && !isNaN(monto) && typeof monto != "string" && cuotas != "" && cuotas > 0 && !isNaN(cuotas) && typeof cuotas != "string" && interes != "" && interes > 0 && !isNaN(interes) && typeof interes != "string"){
    
    interesTotal =(monto * (interes/ 100))
    calculoCuotaTotal()
}
}

botonCalcular.addEventListener("click", calculoInteres)

const calculoCuotaTotal = () => {
    let monto = Number(document.getElementById("monto").value)
    let cuotas = Number(document.getElementById("cuotas").value)
    cuotaTotal = (interesTotal/cuotas) + (monto/cuotas)
    formatearValor()   
}


const formatearValor = () =>{
    let cuotas = Number(document.getElementById("cuotas").value)
    
    let valorCambiado =
            "$" +
            Number(cuotaTotal).toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });

    document.getElementById("result").innerText = ` !NO TE PREOCUPES¡ PUEDES PAGARLO EN ${cuotas} CUOTAS DE ${valorCambiado} `
}