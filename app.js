
const express= require("express");

const app=express();

const path=require("path");
const PORT= process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(PORT,()=>{ console.log(`El Servidor esta correindo en el puerto ${PORT}`);});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
  });
  app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
  })

  app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
  })
