import express from "express";
import { Book } from "../models/bookmodel.js";
const router =express.Router();

router.post('',async(req,res)=>{
    try {
     if(
         !req.body.title ||
         !req.body.author ||
         !req.body.publishyear
     ){
         return res.status(400).send({
             message:'send all required fields'
         });
     }
     const newbook={
         title:req.body.title,
         author:req.body.author,
         publishyear:req.body.publishyear,
     };
     const book = await Book.create(newbook);
     return res.status(201).send(book);
     
    } catch (error) {
     console.log(error);
     res.status(500).send({message:error.message});
     
    }
 });
 
 router.get('',async(req,res)=>{
     try {
         
         const books =await Book.find({});
         return res.json(
           {  count:books.length,
             data:books}
             // books
         );
     } catch (error) {
         console.log(error.message);
         res.send({message:error.message})
     }
 })
 router.get('/:id',async(req,res)=>{
     try {
         const {id}=req.params;
         const books =await Book.findById(id);
         return res.json(
         //   {  count:books.length,
         //     data:books}
             books
         );
     } catch (error) {
         console.log(error.message);
         res.send({message:error.message})
     }
 })
 
 router.put('/:id',async(req,res)=>{
     try {
         if(
             !req.body.title ||
             !req.body.author ||
             !req.body.publishyear
         ){
             return res.status(400).send({
                 message:'send all required fields'
             });
         }
         const {id}=req.params;
         const result=await Book.findByIdAndUpdate(id,req.body);
         if(!result){
             return res.status(404).json({
                 message:'book not found'
             });
 
         }
         return res.status(200).send({
             message:'book updated successfully'
         });
     } catch (error) {
         
      res.send({message:error.message})
     }
 })
 router.delete('/:id',async(req,res)=>{
     try {
        
         const {id}=req.params;
         const result=await Book.findByIdAndDelete(id);
         if(!result){
             return res.status(404).json({
                 message:'book not found'
             });
 
         }
         return res.status(200).send({
             message:'book deleted successfully'
         });
     } catch (error) {
         
      res.send({message:error.message})
     }
 })
 
 
 export default router;