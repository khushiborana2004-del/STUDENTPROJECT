const StudentController={
    create(req,res){
        res.send({
            message:"Succese! New record created.",
            reqBody:body
        });
    },
    readAll(req,res){
        res.send({
            message:"Success!46 records found.",
        });
    },
    readOne(req,res){
        res.send({
        
            message:"Success! Student details found.",
            
        });
    },
    Update(req,res){
        res.send({
            message:"Success! record has been updated.:",
        });
    },
    destroy(req,res){
        res.send({
            message:"Success! record has been deleted.",
        });
    },
};
module.exports=StudentController;
