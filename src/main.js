const {BrowserWindow, ipcMain, Notification} = require("electron");
const {getConnection} = require("./database");

let window

function createWindow (){
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.loadFile("src/ui/index.html")
}
   
ipcMain.on("newproduct", async (e, args) =>{
    const conn = await getConnection();
    const product = args
    newProduct = await conn.query("INSERT INTO productos SET ?", product)
    product.id = newProduct.insertId
    console.log(product)

    new Notification({
        title: "CRUD",
        body: "Producto agregado correctamente"
    }).show();

    return product;
})

module.exports = {
    createWindow
}