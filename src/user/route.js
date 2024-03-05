import { Router } from "express";

const routes = Router({ mergeParams: true });

routes.get('/',(req,res)=>{
    res.send(200).json({})
})

export default {
    routes,
}