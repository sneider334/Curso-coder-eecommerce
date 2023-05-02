

const productos = [
    {id : 'uno', name : 'Termo 2000', price:500, category: 'acero inoxidable', img:"https://www.brandit.com.ar/wp-content/uploads/2017/08/Termo_Acero_InoxidableManija.png", stock: 10, description: "Termo de Acero Inoxidable. Capacidad: 1,1 Lt. Manija de Plástico."},
    {id : 'dos', name : 'Termo 2500', price:600, category: 'acero inoxidable', img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/904/210/products/termo-media-manija-acero-1000ml-nuevo-ilcapitano1-1cbae019619577c50a16601770404192-640-0.jpg", stock: 10, description: "Termo Acero Inoxidable Media Manija 1000ml"},
    {id : 'tres', name : 'Termo 2400', price:550,category: 'acero inoxidable', img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/904/750/products/termo1-acefc5fbebc625409216407816930005-640-0.jpg", stock: 10, description: "Capacidad: 1 Litro, Acero Inoxidable doble capa térmica, Modelo ergonómico y ligero, Boca ancha, fácil de llenar, Tapón matero de apertura central, Tapa resistente con rosca antiderrame: para usar como vaso, taza o mate, 100% hermético, Conservación de líquidos por temperaturas: Frío y Caliente" },
    {id : 'cuatro', name : 'Termo 2200', price:525, category: 'acero inoxidable', img:"https://casanostracba.com/wp-content/uploads/2020/04/termo-1lt.jpg", stock: 10, description: "Termo bala acero inoxidable 1lt"},
    {id : 'cinco', name : 'Termo 2700', price:650, category: 'acero inoxidable', img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/141/903/products/c7fbf02f-a1d4-4e50-adc4-784e895210751-2c67e5a56b4eb07fcb16217796143548-640-0.webp", stock: 10, description: "Termo de acero inoxidable con pico cebador, Capacidad: 1 litro, Apto para bebidas frías y calientes"},
    {id : 'seis', name : 'Termo 1000', price:200, category: 'plastico', img:"https://d2r9epyceweg5n.cloudfront.net/stores/862/035/products/termo-use-flip-azul1-65f37d128e9a04a44416626738373291-640-0.jpg", stock: 10, description: "Capacidad: 1 litro, Termo plástico con ampolla de vidrio. Conserva el frío y el calor. Marca: Mor"},
    {id : 'siete', name : 'Termo 1500', price:400, category: 'plastico', img:"https://www.capitanyo.com.ar/608-home_default/termo-coleman-plastico-1-2-litros.jpg", stock: 10, description: "Termo Coleman Cooler 1.2 lts, Volumen: 1.2 litros, Dimensiones: 22.5 x 13 x 13.5 cm, Mantiene temperatura 6 hs, Material: Polietileno, Maxima resistencia y duración, Tapa ancha para limpieza y llenado, Aislamiento thermozone, Boquilla Flip Top para beber y servir sin derramar, Asas anatomicas para el facil transporte, Fabricado en USA"},
    {id : 'ocho', name : 'Termo 1100', price:100, category: 'plastico', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4E43QNF-XrGOdNpIS6zpx3uHhqFSvPtC5Asebq6iKG1JfHTFfJ46FdYQWo3hrlhiOc0&usqp=CAU", stock: 10, description: "TERMO DE Plástico Translucido, 3 COLORES, Con 1 LOGO"},
    {id : 'nueve', name : 'Termo 1300', price:250, category: 'plastico', img:"https://www.eneyememayorista.com.ar/5649-thickbox_default/termo-matero-1ls-art-dts030278.jpg", stock: 10, description: "Material: Plástico, Interior vidrio; Contiene: Termo; Modelo: Matero; 2 colores: Rojo y azul; Asa de agarre; Soporta repuesto; Capacidad: 1 litro; Presentación individual"},
    {id : 'diez', name : 'Termo 1200', price:225, category: 'plastico', img:"https://http2.mlstatic.com/D_NQ_NP_872506-MLA51443732131_092022-O.jpg", stock: 10, description: "Material del interior: Plástico, Materiales del exterior: Plástico, Mantiene contenido frío por: 4 hs, Mantiene contenido caliente por: 4 hs,Sistema de apertura de tapa: Pico cebador"}
]

export const mockAsync=()=>{
    let error = false;
    return new Promise ((res,rej) => {
        setTimeout(()=>{
            if (!error) {
                res(productos);
            } else{
                rej ("error")
            }
    },500)
    }) 
}

export const mockAsyncDetail =(productId)=>{
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(productos.find(prod => prod.id === productId));
            rej ("error")
        },500)
    })
}
